import customBranding from "../../../assets/icons/custom-branding.png";
import scalability from "../../../assets/icons/scalability.png";
import support from "../../../assets/icons/headphone.png";
import flexibility from "../../../assets/icons/flexibility.png";
import WhiteLabelFeatCard from "../../../components/Cards/WhiteLabelFeatCard";

const keyFeatures = [
  {
    title: "Custom Branding",
    description:
      "White label software allows businesses to add their own branding, logos, and colors to the software, making it their own product.",
    icon: customBranding,
  },
  {
    title: "Scalability",
    description:
      "Reseller white label software allows businesses to create software products and services in bulk to customers, making it easy to scale their business as demand increases.",
    icon: scalability,
  },
  {
    title: "Technical Support",
    description:
      "Bfin offers technical support to the white label customers, which the customers can then offer to their own users.",
    icon: support,
  },
  {
    title: "Flexibility",
    description:
      "White label software is flexible, allowing white label customers to choose the features they want to offer their customers and customize the software to meet their customers' specific needs.",
    icon: flexibility,
  },
];

export default function KeyFeats() {
  return (
    <div className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <h2 className="mb-16 text-center font-montserrat text-2xl font-bold md:text-4xl">
        Our Key Features
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {keyFeatures.map((feat, i) => (
          <WhiteLabelFeatCard key={i} feat={feat} />
        ))}
      </div>
    </div>
  );
}
