import CategorySection from "@/components/category-section/category";
import HeroSection from "@/components/hero/hero";
import NavBar from "@/components/navbar/navbar";

export default function Page() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <CategorySection />
    </main>
  );
}
