import {
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaEdit,
  FaSearch,
  FaBlog,
  FaChartBar,
  FaPaintBrush,
  FaCreditCard,
  FaClipboardList,
} from "react-icons/fa";
import bitssLogo from "../../../../assets/logo/bitss.png";
import Image from "next/image";

export default function KeyFeats() {
  return (
    <div className="text-brand px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      <h2 className="font-inter text-center text-4xl font-bold">
        Premium Perks, Free with Any Plan
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Geo Location Redundancy - Colspan 8 */}
        <div className="rounded-lg border border-neutral-200 bg-[#fafbff] p-6 md:col-span-8">
          <h3 className="flex gap-2 text-2xl font-semibold">
            <FaGlobe className="text-royal-blue" /> Geo Location Redundancy &
            Security
          </h3>
          <p className="mt-2 text-gray-600">
            Secure, Redundant, and Compliant with Global Standards.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaGlobe /> Data distributed across multiple secure locations for
              failover protection.
            </li>
            <li className="flex items-center gap-2">
              <FaDatabase /> Secure GDPR-compliant data management with
              encryption.
            </li>
            <li className="flex items-center gap-2">
              <FaCloud /> Optimized performance with CDN integration &
              management.
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt /> Encrypted backups across secure regions for
              disaster recovery.
            </li>
          </ul>
        </div>

        {/* Web Builder - Colspan 4 */}
        <div className="rounded-lg border border-neutral-200 bg-[#fafbff] p-6 md:col-span-4">
          <h3 className="flex gap-2 text-2xl font-semibold">
            <FaEdit className="text-royal-blue" /> BFINIT Ecommerce Web Builder
          </h3>
          <p className="mt-2 text-gray-600">
            Build and scale your business effortlessly with custom-built
            Ecommerce websites.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaSearch /> Enhance SEO Control
            </li>
            <li className="flex items-center gap-2">
              <FaBlog /> Dedicated Blog Panel
            </li>
            <li className="flex items-center gap-2">
              <FaChartBar /> Market & Business Insights
            </li>
            <li className="flex items-center gap-2">
              <FaPaintBrush /> Custom Branding Experience
            </li>
            <li className="flex items-center gap-2">
              <FaCreditCard /> Choose Your Own Payment Gateway
            </li>
            <li className="flex items-center gap-2">
              <FaClipboardList /> Cost-Effective Solutions
            </li>
          </ul>
        </div>

        {/* Dedicated Task Management - Colspan 4 */}
        <div className="rounded-lg border border-neutral-200 bg-[#fafbff] p-6 md:col-span-4">
          <h3 className="flex gap-2 text-2xl font-semibold">
            <FaClipboardList className="text-royal-blue" /> Dedicated Task
            Management
          </h3>
          <p className="mt-2 text-gray-600">
            Organize, assign, and track tasks efficiently with our dedicated
            task management system.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaShieldAlt /> Real-time task tracking and assignment
            </li>
            <li className="flex items-center gap-2">
              <FaCloud /> Cloud-based collaboration for seamless workflow
            </li>
            <li className="flex items-center gap-2">
              <FaChartBar /> Productivity analytics & insights
            </li>
          </ul>
        </div>

        {/* Bitss Related Product - Colspan 8 */}
        <div className="rounded-lg border border-neutral-200 bg-[#fafbff] p-6 md:col-span-8">
          <h3 className="flex gap-2 text-2xl font-semibold">
            <Image
              src={bitssLogo}
              alt="bitss logo"
              width={40}
              height={40}
              className="object-cover"
            />{" "}
            Bitss Security Suite
          </h3>
          <p className="mt-2 text-gray-600">
            Advanced security solutions included with every plan to safeguard
            your business.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaShieldAlt /> Contact Form Spamming Prevention
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt /> WAP Website Login Protection
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt /> Bitss VWAR - Database Security & Filtering
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
