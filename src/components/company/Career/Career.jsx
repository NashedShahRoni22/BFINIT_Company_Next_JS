import { MdArrowOutward } from "react-icons/md";
import career from "../../../assets/career.png";
import philosopy from "../../../assets/philosopy.png";
import vision from "../../../assets/vision.png";
import mission from "../../../assets/mission.png";
import salary from "../../../assets/salary.png";
import Image from "next/image";
import Question from "@/components/Question";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Career() {
  const items = [
    {
      image: philosopy,
      title: "Career Growth",
      desc: "At our company, we prioritize your career development and growth. We offer a structured career path, mentorship programs, and continuous learning opportunities to help you reach your full potential. Whether you're starting your career or looking to advance to the next level, we provide the support and resources you need to succeed in your professional journey.",
    },
    {
      image: vision,
      title: "Great Culture",
      desc: "We believe that a positive and inclusive culture is key to success. Our workplace is built on respect, collaboration, and innovation, where every voice is heard, and creativity is encouraged. We foster a supportive environment where employees feel valued, engaged, and motivated to contribute their best work every day.",
    },
    {
      image: mission,
      title: "Flexible Hours",
      desc: "We understand the importance of work-life balance. That's why we offer flexible working hours that allow you to manage your personal and professional responsibilities effectively. Whether you prefer an early start or need to accommodate other commitments, our flexible schedule ensures that you can work in a way that suits your lifestyle.",
    },
    {
      image: salary,
      title: "Competitive Salary",
      desc: "We recognize the value of your skills and expertise, which is why we offer competitive salaries that reflect your hard work and dedication. Alongside attractive compensation packages, we provide additional benefits and incentives to ensure that you are rewarded for your contributions and can enjoy financial stability while pursuing your career goals.",
    },
  ];

  const works = [
    {
      title: "Find the Job Sources",
      desc: "Discover a wide range of job opportunities through our extensive network of industry connections and online platforms. We guide you on how to effectively search for jobs, leveraging both traditional and modern methods to find the best positions that match your skills and career aspirations. Stay informed about the latest job openings and learn strategies to stand out in a competitive market.",
    },
    {
      title: "Submit Your CV",
      desc: "Present yourself to potential employers with a strong and polished CV. Learn how to craft a resume that highlights your skills, experiences, and achievements effectively. We provide you with tips and best practices for submitting your CV through various channels, ensuring that it reaches the right people and makes a lasting impression.",
    },
    {
      title: "Interview",
      desc: "Ace your interview with confidence and preparation. We offer comprehensive guidance on how to approach different types of interviews, from phone screenings to in-person meetings. Learn how to answer common questions, showcase your strengths, and leave a positive impression on your potential employers. With our support, you'll be ready to excel in your interviews and secure the job you want.",
    },
  ];

  return (
    <Container>
      <section className="py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 place-items-center">
          <div className="flex flex-col gap-4 md:gap-8">
            <h5 className="md:text-2xl font-semibold">Career</h5>
            <p className="text-2xl md:text-4xl font-inter text-brand font-semibold">
              Exciting Career Opportunities Await
            </p>
            <p>
              Find to open shifts based on the location, types of work, and our
              business rating Work for the most.
            </p>
            <div className="flex gap-4">
              <Link
                href={"/contact"}
                className="px-4 py-2 bg-brand border border-brand hover:bg-transparent hover:text-brand text-white font-semibold rounded shadow w-fit flex items-center gap-4 group duration-300 ease-linear">
                <span className="md:text-xl">Contact</span>
                <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              width={1000}
              height={1000}
              src={career}
              alt="career_banner_image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-20 md:mt-40">
          <div className="flex flex-col gap-4 md:gap-8">
            <h5 className="md:text-2xl font-semibold">Benifits</h5>
            <p className="text-2xl font-inter md:text-4xl font-semibold text-brand">
              What job profiles are we currently looking for?
            </p>
            <p>
              Insipidity the sufficient discretion imprudence resolution sir him
              decisively. Proceed how any engaged visitor. Explained propriety
              off out perpetual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-16">
            {items.map((item, i) => (
              <div key={i}>
                <div
                  className={`p-4 shadow roundex-xl w-fit bg-gray-100 ${
                    i == 0 && "bg-secondary"
                  }`}>
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="w-auto h-12"
                  />
                </div>
                <div className="mt-5">
                  <h5 className="font-semibold font-inter text-brand text-xl">
                    {item.title}
                  </h5>
                  <p className="mt-2.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-40 flex flex-col gap-4 md:gap-8">
          <h5 className="md:text-2xl font-semibold text-center">
            How It Works
          </h5>
          <p className="text-2xl font-inter md:text-4xl font-semibold text-brand text-center">
            How to apply to the Nivia platform <br /> and growing your career
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-8 md:my-16">
            {works.map((w, i) => (
              <div key={i} className="p-8 shadow-xl rounded-xl">
                <div className="bg-secondary rounded-full size-12 flex justify-center items-center text-2xl font-semibold">
                  {i + 1}
                </div>
                <h5 className="text-xl md:text-2xl font-semibold font-inter text-brand my-2.5">
                  {w.title}
                </h5>
                <p className="">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Question />
      </section>
    </Container>
  );
}
