import CompanyIntro from "@/components/home/CompanyIntro";
import FinalCta from "@/components/home/FinalCta";
import Hero from "@/components/home/Hero";
import ProductFamilies from "@/components/home/ProductFamilies";
import Catalogo from "@/components/home/Catalogo";
import TechnicalService from "@/components/home/TechnicalService";

export default function Home() {
  return (
    <main id="contenido-principal">
      <Hero />
      <ProductFamilies />
      <CompanyIntro />
      <Catalogo />
      <TechnicalService />
      <FinalCta />
    </main>
  );
}
