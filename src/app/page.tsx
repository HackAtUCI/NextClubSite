import AboutUs from "@/lib/components/Home/AboutUs/AboutUs";
import Hero from "@/lib/components/Home/Hero/Hero";

export default function Home() {
  return (
    <div className="home-background min-h-screen">
      <Hero />
      <AboutUs />
    </div>
  );
}
