import {
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiHardDrive,
  FiLayers,
  FiZap,
} from "react-icons/fi";

const featuresData = [
  {
    icon: FiZap,
    title: "Maximum performance",
    subtitle: "No ifs, no buts - just raw computing power when you need it",
    bgColor: "#7c3aed",
  },
  {
    icon: FiCpu,
    title: "Powerful Intel® CPUs",
    subtitle: "Latest generation processors for unbeatable performance",
    bgColor: "#06b6d4",
  },
  {
    icon: FiLayers,
    title: "Up to 16 Cores",
    subtitle: "Handle even the most demanding workloads with ease",
    bgColor: "#f59e0b",
  },
  {
    icon: FiDatabase,
    title: "Up to 256GB DDR4 RAM",
    subtitle: "Lightning-fast memory for your memory-intensive applications",
    bgColor: "#fbbf24",
  },
  {
    icon: FiHardDrive,
    title: "SATA, SSD or NVMe",
    subtitle: "Choose the perfect storage solution for your needs",
    bgColor: "#f472b6",
  },
  {
    icon: FiGlobe,
    title: "Up to 1 Gbit/s Network",
    subtitle: "Blazing-fast network speeds with unlimited traffic",
    bgColor: "#34d399",
  },
];

export default function Features() {
  return (
    <div className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-inter tracking-tight text-gray-900 sm:text-4xl">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We provide the raw power your clients demand, with no compromises
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300">
              <div className="relative z-10">
                <div
                  style={{ backgroundColor: feature.bgColor }}
                  className={`flex h-12 w-12 items-center justify-center rounded-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-inter font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
