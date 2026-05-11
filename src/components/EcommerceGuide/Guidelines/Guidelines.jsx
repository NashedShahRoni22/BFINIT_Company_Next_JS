import { GoDotFill } from "react-icons/go";

export default function Guidelines({ sectionRef }) {
  const steps = [
    {
      step: 1,
      title: "Sales and Marketing Analysis",
      description:
        "Learn the importance of understanding your customer needs and competitors to craft an effective marketing strategy.",
      details: [
        "Why Sales and Marketing Analysis is Important",
        "Breaking Down Your Target Market",
        "Using Tools like Google Analytics for insights",
        "Competitor Analysis and Differentiation",
      ],
      videoUrl: "https://www.youtube.com/embed/9-qeLwCJkcg?si=QH-1mngJDortLzJI",
    },
    {
      step: 2,
      title: "Compliance Regulations",
      description:
        "Starting a business sounds exciting, but missing compliance steps can cost you big! Let’s break it down the right way.",
      details: [
        "Why Compliance Matters",
        "Step-by-Step Guide to Compliance",
        "Examples of Compliance in Action",
        "Common Mistakes to Avoid",
        "Tools to Simplify Compliance",
      ],
      videoUrl: "https://www.youtube.com/embed/XPGkp3q2pzI?si=mWVsKc8OQclt_Gvw",
    },
    {
      step: 3,
      title: "Selecting the Perfect Brand Name",
      description:
        "Learn about the necessary licenses for your business and how to choose a name that leaves a lasting impression.",
      details: [
        "Common Licenses Required",
        "Selecting the Perfect Name for Your Brand",
        "Tools to Help You Choose",
        "Mistakes to Avoid",
        "Examples of Great Business Names",
      ],
      videoUrl: "https://www.youtube.com/embed/gSp2VBcvrAs?si=6t2Ip6HS940FxWH_",
    },
    {
      step: 4,
      title: "Generating Winning Product Ideas",
      description:
        "Stuck on what to sell? Let me show you how to discover the perfect product ideas that will make your e-commerce store a success!",
      details: [
        "Why Choosing the Right Product Is Crucial",
        "Four Steps to Generate Product Ideas",
        "Examples of Product Niches",
        "Validating Your Product Ideas",
        "Tools to Help You Generate Ideas",
        "Mistakes to Avoid",
      ],
      videoUrl: "https://www.youtube.com/embed/w-1cbJNZCsY?si=IQX4GbzqmqgQ5N-o",
    },
    {
      step: 5,
      title: "Managing Capital and Costs",
      description:
        "Learn how to manage capital, control costs, and maintain cash flow to succeed—even on a budget.",
      details: [
        "Why Capital and Cash Flow Are Key",
        "Understanding Startup Costs for E-Commerce",
        "How Much Capital Do You Really Need?",
        "Managing Cash Flow Like a Pro",
        "Controlling Costs to Boost Profit",
      ],
      videoUrl: "https://www.youtube.com/embed/tHKD_xX_hJE?si=e05Sr5RSE5fPB74m",
    },
    {
      step: 6,
      title: "Mastering Client Support",
      description:
        "Learn how to set up and manage exceptional client support to keep your customers coming back.",
      details: [
        "Why Client Support Matters",
        "Setting Up Your Support System",
        "Building a FAQ Section",
        "Personalizing the Customer Experience",
        "Handling Complaints Like a Pro",
        "Metrics to Track Your Support Success",
      ],
      videoUrl: "https://www.youtube.com/embed/DqaAgSOocME?si=TGMUB1YV-pH2WAO9",
    },
  ];

  return (
    <section ref={sectionRef} className="md:py-20">
      <h2 className="text-3xl mt-2 font-bold text-center md:text-4xl font-inter">
        Why This Guide Matters
      </h2>
      <p className="mt-6 text-center leading-relaxed text-balance text-lg">
        Learn the step-by-step process to start, manage and grow your E-Commerce
        store
      </p>

      <div className="mt-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col py-12 md:py-24 gap-8 md:gap-16 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}>
            <div className="w-full md:w-1/2">
              <p className="font-bold text-brand mb-2">
                Step {step.step} of {steps.length}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 mb-5">{step.description}</p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold mb-2">What You&apos;ll Learn:</p>
                {step.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <GoDotFill className="text-xs mt-1" />
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <iframe
                src={step.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full rounded-lg"></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
