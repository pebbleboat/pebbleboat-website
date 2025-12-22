import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Button } from "../../../shared";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
            Service Not Found
          </h1>
          <p className="text-xl text-white/80 mb-8">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/#services">
              <Button variant="primary" size="lg">
                View All Services
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

