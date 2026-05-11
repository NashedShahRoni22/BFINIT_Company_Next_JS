import Career from "@/components/company/Career/Career";

export const metadata = {
  title: "Careers | Join Our Team & Grow Your Professional Journey",
  description:
    "Explore exciting career opportunities. We offer competitive salaries, flexible working hours, and a great company culture. Apply today to grow with us!",
  keywords: [
    "career opportunities",
    "job openings",
    "company culture",
    "flexible work hours",
    "hiring process",
    "competitive salary jobs",
    "professional growth",
  ],
  openGraph: {
    title: "Work with Us | Exciting Career Opportunities Await",
    description:
      "Join a workplace built on respect, collaboration, and innovation. Discover how you can make an impact.",
    url: "http://localhost:3000/career",
    type: "website",
    images: [
      {
        url: "../../assets/home/question.png",
        width: 1200,
        height: 630,
        alt: "Team collaboration at our company",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <Career />
    </>
  );
}
