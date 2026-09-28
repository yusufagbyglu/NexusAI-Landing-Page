import Image from "next/image";
import Header from "@/components/shared/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SocialProof } from "@/components/sections/social-proof";
import { Testimonials } from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import Faq from "@/components/sections/faq";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
}
