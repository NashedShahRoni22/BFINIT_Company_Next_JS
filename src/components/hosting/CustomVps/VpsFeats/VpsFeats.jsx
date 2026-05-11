import { BiCheckCircle } from "react-icons/bi";

const VpsFeats = () => {
  return (
    <div className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <h5 className="text-xl font-bold">
          High-Performance <span className="text-brand">Custom VPS</span>:
          Optimized for Your Needs
        </h5>
        <h2 className="mt-1 font-inter text-2xl font-semibold md:text-4xl">
          Elevate Your Business with a Custom VPS Server
        </h2>
        <p className="mt-3 text-[#737373]">
          Experience top-tier performance, security, and scalability with our
          custom VPS solutions. Tailor your server to meet your exact business
          requirements.
        </p>
        <p className="mt-1 text-[#737373]">
          Our high-speed infrastructure ensures uptime and reliability,
          empowering your applications with seamless connectivity and
          performance.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="mx-auto mt-16 max-w-5xl rounded-lg border bg-white p-8 text-gray-800">
        <h2 className="mb-6 font-inter text-center text-2xl font-semibold">
          Shared Hosting vs Custom VPS Hosting
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-4 font-inter">Feature</th>
              <th className="border border-gray-300 p-4 font-inter">
                Shared Hosting
              </th>
              <th className="border border-gray-300 p-4 font-inter">
                Custom VPS Hosting
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4">
                Dedicated Resources
              </td>
              <td className="border border-gray-300 p-4 text-red-500">✗</td>
              <td className="border border-gray-300 p-4 text-green-500">
                <BiCheckCircle size={20} />
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-4">Performance</td>
              <td className="border border-gray-300 p-4 text-red-500">
                Limited
              </td>
              <td className="border border-gray-300 p-4 text-green-500">
                High-Speed
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4">Security</td>
              <td className="border border-gray-300 p-4 text-red-500">Basic</td>
              <td className="border border-gray-300 p-4 text-green-500">
                Advanced DDoS Protection
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-4">Control</td>
              <td className="border border-gray-300 p-4 text-red-500">
                Limited
              </td>
              <td className="border border-gray-300 p-4 text-green-500">
                Full Root Access
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4">Scalability</td>
              <td className="border border-gray-300 p-4 text-red-500">
                Restricted
              </td>
              <td className="border border-gray-300 p-4 text-green-500">
                Highly Scalable
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VpsFeats;
