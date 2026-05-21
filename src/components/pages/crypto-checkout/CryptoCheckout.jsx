import { ArrowLeft } from "lucide-react";
import Container from "@/components/shared/Container";

export default function CryptoCheckout() {
  return (
    <main className="py-14 min-h-dvh md:py-20">
      <Container>
        <section>
          <button className="inline-flex items-center gap-1 broder rounded-md">
            <ArrowLeft />
            Back to checkout
          </button>
          <h1>Complete your payment</h1>
          <p>Connect your Solana wallet to pay with SPUMP.</p>

          <div>
            <div></div>

            <div>
              <p>Web3 ecosystem partner</p>
              <p>
                Bfinit is part of the Scotty Pumpkin Web3 Ecosystem · Pay with
                SPUMP and save up to 15%
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
