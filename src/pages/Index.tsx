
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import PerformanceSection from "@/components/home/PerformanceSection";
import SalarySection from "@/components/home/SalarySection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
      <PerformanceSection />
      <SalarySection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
