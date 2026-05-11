import heroBg from "../../../assets/data-center/data-centers-bg.jpg";

export default function Hero() {
  return (
    <div className="text-brand px-5 py-10 md:container md:mx-auto">
      <div
        style={{
          backgroundImage: `url(${heroBg.src})`,
        }}
        className="mt-4 flex min-h-96 w-full flex-col justify-center gap-5 rounded-2xl bg-cover bg-center px-5 py-10 text-white">
        <h2 className="font-urbanist text-4xl font-bold font-inter">
          Two Secure Locations, One Quality Hosting Experience
        </h2>
        <p className="w-full max-w-xl">
          Choose from two premium locations—Strasbourg, France, or St. Louis,
          MO, USA! Both data centers ensure top-notch security with advanced
          fire detection, 24/7 monitoring and strict access controls.
        </p>
      </div>
    </div>
  );
}
