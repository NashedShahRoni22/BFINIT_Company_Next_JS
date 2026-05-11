"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/eblogo.png";
import { menuItems } from "../../data/menuItems";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [hostingProducts, setHostingProducts] = useState([]);
  const [updatedMenuItems, setUpdatedMenuItems] = useState(menuItems);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === "/";

  // fetching hosting products
  useEffect(() => {
    const fetchHostingProducts = async () => {
      const response = await fetch(
        "https://hpanel.bfinit.com/api/product/categories",
      );
      const data = await response.json();
      setHostingProducts(data.data);
    };

    fetchHostingProducts();
  }, []);

  // Update the MenuItems when hostingProducts changes
  useEffect(() => {
    if (hostingProducts.length > 0) {
      // Define categories and their respective product IDs
      const categories = {
        "Bare Metal Servers": [1, 3],
        "Virtual Machine": [2, 8],
        Hosting: [4, 5, 7],
      };

      // Map hosting products to categories
      const categorizedProducts = Object.keys(categories).map((category) => {
        const productIds = categories[category];
        const products = hostingProducts.filter((product) =>
          productIds.includes(product.id),
        );
        return {
          header: category,
          subChild: products.map((product) => ({
            name: product.name,
            link: `/hosting-products/${product.id}`,
          })),
        };
      });

      // Add "Build your own VPS" to the "Virtual Machine" category
      const virtualMachineCategory = categorizedProducts.find(
        (cat) => cat.header === "Virtual Machine",
      );
      if (virtualMachineCategory) {
        virtualMachineCategory.subChild.push({
          name: "Build Your Own VPS",
          link: "/build-your-own-vps",
        });
      }

      // Update the MenuItems
      const updatedMenu = updatedMenuItems.map((item) => {
        if (item.name === "Hosting Products") {
          return {
            ...item,
            child: categorizedProducts,
          };
        }
        return item;
      });

      setUpdatedMenuItems(updatedMenu);
    }
  }, [hostingProducts]);

  // Toggle Submenu in Destop View
  const toggleSubMenu = (index) => {
    setShowSubMenu((prev) => (prev === index ? null : index));
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;

    setShowNav(false);
    setShowSubMenu(false);

    if (scrollY >= 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("isScrolled : ", isScrolled);
  console.log("Not Home : ", !isHome);

  return (
    <nav
      className={`fixed z-50 w-full border-b border-primary font-roboto ${isScrolled || !isHome ? "top-0 bg-white" : "top-0 md:bg-transparent bg-white"}`}>
      <Container>
        <section
          className={`relative flex items-center justify-between py-4 text-black`}>
          {/* logo here  */}
          <Link
            onClick={toggleSubMenu}
            href={"/"}
            className="inline-flex items-center gap-2 text-2xl font-semibold">
            <Image
              width={1000}
              height={1000}
              src={logo}
              className="h-6 md:h-8 w-full"
              alt=""
              loading="lazy"
            />
            {/* Scotty Pumpkin */}
          </Link>
          {/* desktop view  */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {updatedMenuItems.map((mi, i) => (
              <div key={i}>
                {mi.child ? (
                  <div className="group hover:underline">
                    <span
                      onClick={() => toggleSubMenu(i)}
                      className="flex cursor-pointer font-inter items-center gap-1">
                      {mi.name}
                      <ChevronDown className="text-2xl" />
                    </span>
                    {showSubMenu === i && (
                      <div className="absolute left-1/2 top-full grid h-auto max-h-[calc(100vh-80px)] w-2/3 flex-1 -translate-x-1/2 grid-cols-3 gap-4 overflow-y-auto rounded border border-primary bg-white p-5 text-black shadow">
                        {mi.child.map((mc, i) => (
                          <div key={i}>
                            {mc.header ? (
                              <div>
                                <span className="font-semibold">
                                  {mc.header}
                                </span>
                                <ul className="ml-2 mt-2 flex flex-col gap-2">
                                  {mc.subChild.map((mcc, i) => (
                                    <Link
                                      onClick={() => setShowSubMenu(null)}
                                      key={i}
                                      href={mcc.link}
                                      className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary">
                                      <ChevronRight className="min-w-fit text-2xl" />
                                      {mcc.name}
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link
                                onClick={() => setShowSubMenu(null)}
                                href={mc.link}
                                key={i}
                                className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3">
                                {mc.icon ? (
                                  <Image
                                    width={100}
                                    height={100}
                                    src={mc.icon}
                                    className="size-8 rounded bg-blue-100 p-1"
                                    alt=""
                                  />
                                ) : (
                                  <ChevronRight className="text-2xl" />
                                )}
                                <div>
                                  <p className="font-semibold">{mc.name}</p>
                                  <p className="mt-1 text-xs text-gray-800">
                                    {mc.description}
                                  </p>
                                </div>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    onClick={toggleSubMenu}
                    key={i}
                    href={mi.link}
                    className="flex items-center gap-2.5 hover:underline">
                    {mi.name}
                    {/* <MdArrowOutward /> */}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* mobile view  */}
          {showNav ? (
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setShowNav(!showNav)}>
              <X className="text-2xl" />
            </button>
          ) : (
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setShowNav(!showNav)}>
              <Menu className="text-xl" />
            </button>
          )}

          {/* desktop mode contact button */}
          <Link
            href="/contact"
            className={`group hidden h-fit items-center gap-2.5 rounded-full border px-4 py-2 font-medium shadow transition-all duration-300 ease-linear lg:flex ${isScrolled || !isHome ? "border-primary/25 bg-[#242D2B] text-white hover:bg-[#090B0B]" : "border-transparent bg-brand text-white hover:bg-brand/90"}`}>
            Contact{" "}
            <MoveUpRight className="duration-300 ease-linear group-hover:rotate-45" />
          </Link>
        </section>
      </Container>

      {/* mobile view  */}
      {showNav && (
        <div className="top-14 absolute left-0 flex h-[80vh] min-w-full flex-col gap-4 overflow-y-scroll bg-white p-5 md:px-14 lg:hidden">
          {updatedMenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div>
                  <div className="flex items-center justify-between text-[18px]">
                    {mi.name}
                    {showChild !== i ? (
                      <button
                        onClick={() => setShowChild(i)}
                        className="flex cursor-pointer items-center gap-1">
                        <ChevronDown className="text-3xl" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowChild("")}
                        className="flex cursor-pointer items-center gap-1">
                        <ChevronUp className="text-3xl" />
                      </button>
                    )}
                  </div>

                  {showChild === i && (
                    <div className="ml-2 mt-2 flex flex-col gap-4">
                      {mi.child.map((mc, i) => (
                        <div key={i}>
                          {mc.header ? (
                            <div>
                              <span className="font-semibold text-primary">
                                {mc.header}
                              </span>
                              <ul className="ml-2 mt-2 flex flex-col gap-2">
                                {mc.subChild.map((mcc, i) => (
                                  <Link
                                    key={i}
                                    href={mcc.link}
                                    onClick={() => setShowNav(!showNav)}
                                    className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary">
                                    <ChevronRight className="text-2xl" />
                                    {mcc.name}
                                  </Link>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              href={mc.link}
                              key={i}
                              onClick={() => setShowNav(!showNav)}
                              className="flex gap-1.5 duration-300 ease-linear hover:translate-x-3 hover:font-semibold hover:text-primary">
                              {mc.icon ? (
                                <Image
                                  width={500}
                                  height={500}
                                  src={mc.icon}
                                  className="size-8 rounded bg-blue-100 p-1"
                                  alt=""
                                />
                              ) : (
                                <ChevronRight className="text-2xl" />
                              )}
                              <div>
                                <p className="">{mc.name}</p>
                                <p className="mt-1 text-xs text-gray-800">
                                  {mc.description}
                                </p>
                              </div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={mi.link}
                  key={i}
                  onClick={() => setShowNav(!showNav)}
                  className="flex items-center justify-between text-[18px]">
                  {mi.name}
                  {/* <MdArrowOutward /> */}
                </Link>
              )}
            </div>
          ))}
          <Link
            href={"/contact"}
            onClick={() => setShowNav(!showNav)}
            className="w-fit rounded bg-primary px-4 py-2 text-white shadow">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
