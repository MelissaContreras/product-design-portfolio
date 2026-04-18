import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { CaseStudies } from "@/components/site/CaseStudies";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
