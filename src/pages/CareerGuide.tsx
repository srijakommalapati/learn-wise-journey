
import DashboardLayout from "@/components/layout/DashboardLayout";
import CareerQuestionnaire from "@/components/career-guide/CareerQuestionnaire";
import JobRecommendation from "@/components/career-guide/JobRecommendation";
import TutorVideo from "@/components/ai-tutor/TutorVideo";

const CareerGuide = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Career Guide</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Get personalized career recommendations based on your skills and preferences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <TutorVideo tutor="lisa" />
          <CareerQuestionnaire />
        </div>
        <div className="lg:col-span-2">
          <JobRecommendation />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CareerGuide;
