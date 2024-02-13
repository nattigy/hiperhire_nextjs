import CategorySection from "@/components/category-section/category";
import HeroSection from "@/components/hero/hero";
import NavBar from "@/components/navbar/navbar";
import ProductsSection from "@/components/products/products";

export default function Page() {
  return (
    <main>
      <NavBar />
      {/* <div className=""> */}
        <HeroSection />
        <CategorySection />
        <ProductsSection />
      {/* </div> */}
    </main>
  );
}
