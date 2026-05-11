import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { MdSecurity, MdSupport } from "react-icons/md";

const enterpriseFeatures = [
  {
    category: "E-commerce Features",
    icon: <FaShoppingCart className="text-2xl" />,
    features: [
      "Unlimited Ecommerce Websites",
      "Unlimited Product Catalogs",
      "Pre-Built Templates + Custom Layouts",
      "Fully Responsive Across All Devices",
      "Advanced SEO Control and Schema Integration",
      "Business Intelligence & Market Insights",
      "Dedicated Blog Panel for Each Store",
      "Full Branding Personalization",
      "Custom Payment Gateway Integration",
      "Free Domain(s) Included",
      "Free Business Email",
      "Drag & Drop Website Builder",
      "Global Currency & Location Deployment Options",
    ],
  },
  {
    category: "Performance & Security",
    icon: <MdSecurity className="text-2xl" />,
    features: [
      "Unlimited Monthly Visits",
      "Unlimited Bandwidth",
      "Unlimited SSL Certificates",
      "Geo Redundant Backup Option",
      "Enterprise-Grade Security with Bitss Cyber Protection",
      "CDN Distribution Option for Speed & Reliability",
      "Local Backup Included",
      "Managed Updates, Patching, Monitoring",
    ],
  },
  {
    category: "Support & Flexibility",
    icon: <MdSupport className="text-2xl" />,
    features: [
      "Unlimited Revisions and Scaling",
      "Free Hosting Setup and Maintenance",
      "24/7 Priority Support",
      "Contract Options: 3, 6, 12, or 24 Months",
      "Custom Solution for Global Brands",
    ],
  },
];

export default function Features() {
  return (
    <div className="mt-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-600">
          What&apos;s Included in Enterprise Pack
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Get everything you need to build and scale your global e-commerce
          empire with enterprise-grade features and dedicated server
          performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {enterpriseFeatures.map((category, index) => (
          <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-blue-600">{category.icon}</div>
              <h3 className="text-xl font-bold text-blue-600">
                {category.category}
              </h3>
            </div>

            <ul className="space-y-3">
              {category.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <FaCheck className="mt-1 shrink-0 text-sm text-blue-600" />
                  <span className="text-sm leading-relaxed text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
