import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import CustomPack from "./CustomPack/CustomPack";

export default function EcomEnterprisePack() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container mx-auto px-5 py-16">
        <CustomPack />
        <Features />
      </div>
    </div>
  );
}
