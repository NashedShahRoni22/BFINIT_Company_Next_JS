import Image from "next/image";
import img1 from "@/assets/home-3/slider-1.png";
import img2 from "@/assets/home-3/slider-2.png";
import img3 from "@/assets/home-3/slider-3.png";
import img4 from "@/assets/home-3/slider-4.png";
import img5 from "@/assets/home-3/slider-5.png";
import Container from "@/components/shared/Container";

const showcaseItems = [
  {
    image: img1,
    title: "Beautiful Store Design",
    description:
      "Create stunning, mobile-responsive storefronts with elegant layouts and professional templates that showcase your brand.",
  },
  {
    image: img2,
    title: "Organize Your Catalog",
    description:
      "Manage your products efficiently with intuitive category management and smart organization tools for better customer navigation.",
  },
  {
    image: img3,
    title: "Premium Product Gallery",
    description:
      "Display your luxury items and high-value products with sophisticated galleries that highlight quality and craftsmanship.",
  },
  {
    image: img4,
    title: "Diverse Product Range",
    description:
      "Showcase any type of product beautifully - from watches and accessories to electronics, all with professional layouts.",
  },
  {
    image: img5,
    title: "Multi-Category Display",
    description:
      "Present different product categories seamlessly with consistent, attractive product grids that work for any industry.",
  },
];
const SiteShowCase = () => {
  return (
    <section className="w-full bg-[#020617] py-10 text-white md:py-20">
      <Container>
        <h2 className="text-center text-3xl font-inter font-bold md:text-4xl">
          Sell here, there, and everywhere
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-gray-400">
          Showcase and sell your products across every channel, beautifully and
          effortlessly.
        </p>

        {/* Grid Layout */}
        <div className="mt-10 space-y-6">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {showcaseItems.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md hover:border-secondary hover:bg-white/10">
                <Image
                  width={1000}
                  height={1000}
                  src={item.image}
                  alt={item.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.slice(2).map((item, index) => (
              <div
                key={index + 2}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md hover:border-secondary hover:bg-white/10">
                <Image
                  width={1000}
                  height={1000}
                  src={item.image}
                  alt={item.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SiteShowCase;
