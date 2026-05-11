"use client";
import { useState } from "react";
import { Check, X, Zap } from "lucide-react";
import Container from "@/components/shared/Container";

const features = [
  "Core Website",
  "Blog Interface",
  "Payments",
  "SEO Tools",
  "Cybersecurity",
  "Payroll System",
  "Invoicing",
  "Gift / Marketing Tools",
  "Cost Structure",
  "Best For",
  "Hosted in France/EU",
  "Native GDPR compliance",
  "Built-in Cybersecurity",
  "Invoicing & Payroll",
  "Sales Commission",
  "Local Human Support",
  "Custom Branding",
  "Full Control",
];

const competitors = {
  bfinit: {
    name: "eBfinit",
    highlight: true,
    values: [
      { text: "Free, customizable", status: "good" },
      { text: "Included", status: "good" },
      { text: "Native + external", status: "good" },
      { text: "Full, advanced, free", status: "good" },
      { text: "Bitss-protected", status: "good" },
      { text: "Included", status: "good" },
      { text: "Mobile + desktop native", status: "good" },
      { text: "Included free", status: "good" },
      { text: "Free to use", status: "good" },
      { text: "All business sizes", status: "good" },

      { text: "Yes – Local server options", status: "good" },
      { text: "Full by design", status: "good" },
      { text: "Yes – Bitss Security", status: "good" },
      { text: "Built into all plans", status: "good" },
      { text: "0% – Use your own gateway", status: "good" },
      { text: "Real people, regional support", status: "good" },
      { text: "Fully branded & white-labeled", status: "good" },
      { text: "Owner-controlled infrastructure", status: "good" },
    ],
  },
  shopify: {
    name: "Shopify",
    values: [
      { text: "Paid plans", status: "limited" },
      { text: "Limited", status: "limited" },
      { text: "Shopify Pay (fees)", status: "limited" },
      { text: "Moderate, plugin-based", status: "limited" },
      { text: "Limited", status: "limited" },
      { text: "Add-on", status: "limited" },
      { text: "3rd party", status: "limited" },
      { text: "Paid apps", status: "limited" },
      { text: "Monthly + transaction", status: "limited" },
      { text: "Mid-large e-commerce", status: "limited" },
      { text: "No", status: "none" },
      { text: "Partial", status: "limited" },
      { text: "No", status: "none" },
      { text: "Paid apps", status: "limited" },
      { text: "2%+ unless Shopify Pay", status: "limited" },
      { text: "Remote / Chatbot", status: "limited" },
      { text: "Shopify-branded", status: "limited" },
      { text: "Platform limited", status: "limited" },
    ],
  },
  wix: {
    name: "Wix",
    values: [
      { text: "Paid plans", status: "limited" },
      { text: "Included", status: "good" },
      { text: "Wix Payments (fees)", status: "limited" },
      { text: "Basic to moderate", status: "limited" },
      { text: "Limited", status: "limited" },
      { text: "Not available", status: "none" },
      { text: "Basic", status: "limited" },
      { text: "Add-ons", status: "limited" },
      { text: "Monthly + fees", status: "limited" },
      { text: "Visual websites & SMBs", status: "limited" },
      { text: "No", status: "none" },
      { text: "Partial", status: "limited" },
      { text: "No", status: "none" },
      { text: "Not included", status: "none" },
      { text: "Applies depending on payment", status: "limited" },
      { text: "Limited or chatbot", status: "limited" },
      { text: "Wix-branded", status: "limited" },
      { text: "Platform limited", status: "limited" },
    ],
  },
};

const getStatusIcon = (status) => {
  if (status === "good") {
    return <Check className="h-4 w-4 text-primary" />;
  } else {
    return <X className="h-4 w-4 text-gray-400" />;
  }
};

export default function Compare() {
  const [showAll, setShowAll] = useState(false);
  const initialRowsCount = 5;

  const featuresToShow = showAll
    ? features
    : features.slice(0, initialRowsCount);

  return (
    <Container>
      <section className="py-10 md:py-20">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-gray-200/50 bg-background px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <div className="items-center justify-center rounded-full bg-primary/85 p-1">
              <Zap className="size-4 text-secondary" />
            </div>
            <p>Platform Comparison</p>
          </div>
          <h2 className="text-center font-inter text-3xl font-bold text-dark md:text-4xl">
            eBfinit vs Shopify & Wix
          </h2>
          <p className="mt-2 text-gray-600">
            Compare key features and value across platforms like Shopify and Wix
            & see why businesses choose eBfinit.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-5 text-left text-sm font-semibold text-gray-700">
                    Feature
                  </th>
                  {Object.entries(competitors).map(([key, competitor]) => (
                    <th
                      key={key}
                      className={`p-5 text-center text-sm font-semibold ${
                        competitor.highlight ? "text-primary" : "text-gray-600"
                      }`}>
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featuresToShow.map((feature, idx) => (
                  <tr
                    key={feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-5 font-medium text-gray-900">{feature}</td>
                    {Object.entries(competitors).map(([key, competitor]) => (
                      <td key={key} className="p-5 text-center">
                        <div className="flex flex-col items-center gap-2">
                          {getStatusIcon(competitor.values[idx].status)}
                          <span className="text-center text-xs text-gray-600">
                            {competitor.values[idx].text}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {!showAll && features.length > initialRowsCount ? (
            <button
              onClick={() => setShowAll(true)}
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary">
              View All Features
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary">
              Show less
            </button>
          )}
        </div>
      </section>
    </Container>
  );
}
