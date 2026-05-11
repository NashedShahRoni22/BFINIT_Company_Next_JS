export default async function page(props) {
  console.log(props);
  return (
    <div className="w-full h-screen z-999">this is params {props.slug}</div>
  );
}
