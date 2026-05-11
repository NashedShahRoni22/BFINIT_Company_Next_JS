import Link from "next/link";

export default function Contact() {
  return (
    <div className="py-10 md:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold font-inter">
          Ready to Start Earning?
        </h2>
        <p className="mb-8 text-xl text-brand">
          Join now and get your exclusive partner dashboard instantly.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={"https://hpanel.bfinit.com/distributor/register"}
            target="_blank"
            className="rounded-lg bg-brand px-8 py-3 font-bold text-white">
            Sign Up Free
          </Link>
        </div>
        <p className="mt-4 text-sm text-brand/65">
          No credit card required. Approval in 24 hours.
        </p>
      </div>
    </div>
  );
}
