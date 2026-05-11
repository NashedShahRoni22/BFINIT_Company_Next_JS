import { FaServer, FaShoppingCart } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

export default function Hero() {
  return (
    <div className="bg-linear-to-br from-blue-600 to-blue-800 py-32 text-white">
      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Enterprise E-commerce Pack
          </h1>
          <p className="mb-6 text-xl opacity-90">
            Custom-built for scalable global brands needing full control,
            resources, and support.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaShoppingCart />
              <span>Unlimited Stores</span>
            </div>
            <div className="flex items-center gap-2">
              <FaServer />
              <span>Dedicated Server</span>
            </div>
            <div className="flex items-center gap-2">
              <MdSpeed />
              <span>Enterprise Performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
