import {
  Globe,
  ShieldCheck,
  Package,
  DollarSign,
  Settings,
  Users,
  Sparkle,
} from "lucide-react";
import Container from "../../../shared/Container";

const features = [
  {
    icon: Globe,
    title: "Global Reach & Compliance",
    description:
      "Reliable local hosting worldwide, full GDPR & data privacy compliance, plus dedicated human support.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in Cybersecurity",
    description: "Native integration with Bitss for maximum site protection.",
  },
  {
    icon: Package,
    title: "Complete Business Suite",
    description: "E-commerce, invoicing, payroll, SEO, and blog all-in-one.",
  },
  {
    icon: DollarSign,
    title: "No Sales Commissions",
    description: "Simple, transparent pricing—you choose your payment gateway.",
  },
  {
    icon: Settings,
    title: "Hosted & Scalable",
    description: "Quick setup, real support, and upgrade paths as you grow.",
  },
  {
    icon: Users,
    title: "Human Support",
    description: "Dedicated experts ready to help whenever you need.",
  },
];

export default function Features() {
  return (
    <Container>
      <section className="w-full py-10 md:py-20">
        {/* badge */}
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-gray-200 bg-background px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <div className="items-center justify-center rounded-full bg-primary/85 p-1">
              <Sparkle className="size-4 text-secondary" />
            </div>
            <p>Core Platform Highlights</p>
          </div>
        </div>
        {/* title */}
        <h2 className="mb-12 text-center font-inter text-3xl font-bold text-dark md:text-4xl">
          Empowering Your Growth
        </h2>
        {/* features card container */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/5 text-brand">
                <Icon className="h-7 w-7 text-brand" />
              </div>
              <h3 className="mb-2 text-lg font-semibold font-inter text-dark">
                {title}
              </h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
