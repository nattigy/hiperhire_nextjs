import CategorySection from "@/components/category-section/category";
import Hero from "@/components/hero/hero";
import HeroSection from "@/components/hero/hero";
import NavBar from "@/components/navbar/navbar";
import ProductsSection from "@/components/products/products";

export default function Page() {
  return (
    <main>
      <NavBar />
      {/* <div className=""> */}
      <div className="container mx-auto">
        <Hero />
      </div>
      <CategorySection />
      <ProductsSection />
      {/* </div> */}
    </main>
  );
}
