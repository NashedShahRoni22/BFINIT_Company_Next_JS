export async function GET() {
  const res = await fetch(
    "https://api.frankfurter.app/latest?from=EUR&to=USD",
    {
      redirect: "follow",
    },
  );
  const data = await res.json();
  return Response.json({ rate: data.rates.USD });
}
