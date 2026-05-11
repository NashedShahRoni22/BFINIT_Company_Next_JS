import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ArrowBtn({ to, label }) {
  return (
    <Link
      href={to}
      className="group inline-flex items-center rounded bg-brand px-6 py-3 font-medium text-white shadow">
      <span className="flex items-center px-3">
        <span className="transition-transform duration-300 group-hover:-translate-x-2">
          {label}
        </span>
      </span>
      <AiOutlineArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
    </Link>
  );
}
