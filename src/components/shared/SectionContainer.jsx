export default function SectionContainer({ children, flex }) {
  return (
    <section
      className={`mx-5 py-10 flex-col gap-8 md:container md:mx-auto md:py-20 md:flex-row md:items-center md:gap-16 ${flex}`}
    >
      {children}
    </section>
  );
}
