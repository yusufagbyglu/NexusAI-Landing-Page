import Header from "@/components/shared/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SocialProof } from "@/components/sections/social-proof";
import { Testimonials } from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import Faq from "@/components/sections/faq";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/shared/footer";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  const url = "";
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${url}/#org`,
              name: "NexusAI",
              url,
              logo: `${url}/icon.png`,
              // sameAs: [
              //   "https://github.com/app_name",
              //   "https://linkedin.com/company/app_name",
              //   "https://twitter.com/app_name",
              // ],
            },
            {
              "@type": "WebSite",
              "@id": `${url}/#website`,
              url,
              name: "NexusAI",
              publisher: { "@id": `${url}/#org` },
              inLanguage: "en",
            },
            {
              "@type": "SoftwareApplication",
              name: "NexusAI",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "AI-Powered Customer Support That Scales With Us. Automate up to 80% of your customer inquiries in minutes.",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does it take to train the AI on our data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It takes less than 10 minutes. Just paste your website URL or upload your knowledge base documents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I integrate NexusAI with my existing CRM?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we support native integrations with Zendesk, Salesforce, HubSpot, Intercom, and 150+ more tools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What happens if the AI doesn't know the answer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It gracefully hands off the conversation to a human support agent with full chat context.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my customer data secure?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All data is encrypted in transit and at rest, and we're SOC 2 Type II compliant. Your data is never used to train models for other customers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I cancel my subscription anytime?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. There are no long-term contracts — cancel anytime from your billing settings with no penalty.",
                  },
                },
              ],
            },
          ],
        }}
      />

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
