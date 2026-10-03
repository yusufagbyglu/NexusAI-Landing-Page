import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const configured =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const limiter = configured
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(2, "10 m"), // 2 attempts per IP every 10 minutes
      prefix: "nexus:newsletter",
    })
  : null;

// There is no quota to enforce in preview mode. We allow it if Redis is not configured (local development).
export async function checkRateLimit(key: string): Promise<boolean> {
  if (!limiter) return true;
  const { success } = await limiter.limit(key);
  return success;
}
