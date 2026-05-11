import Link from "next/link";

export default function Notfound() {
  return (
    <section className="mx-5 flex min-h-screen flex-col items-center justify-center gap-10 md:container md:mx-auto">
      <h1 className="text-center text-5xl font-extrabold capitalize md:text-7xl">
        <span className="text-red-500">under maintainance</span> <br />
        bringing new features soon...
      </h1>
      <Link
        href={"/"}
        className="font-semibold capitalize text-primary underline md:text-xl">
        Go back to home
      </Link>
    </section>
  );
}
