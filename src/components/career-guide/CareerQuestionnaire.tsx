
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Question = {
  id: number;
  text: string;
  type: "slider" | "radio";
  options?: { value: string; label: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "How would you rate your interest in front-end development?",
    type: "slider"
  },
  {
    id: 2,
    text: "How comfortable are you with algorithms and data structures?",
    type: "slider"
  },
  {
    id: 3,
    text: "Which of these technologies interests you the most?",
    type: "radio",
    options: [
      { value: "web", label: "Web Development" },
      { value: "mobile", label: "Mobile Development" },
      { value: "data", label: "Data Science" },
      { value: "devops", label: "DevOps" },
      { value: "ai", label: "Artificial Intelligence" }
    ]
  },
  {
    id: 4,
    text: "What type of work environment do you prefer?",
    type: "radio",
    options: [
      { value: "startup", label: "Startup" },
      { value: "enterprise", label: "Enterprise" },
      { value: "freelance", label: "Freelance" },
      { value: "remote", label: "Remote" }
    ]
  }
];

const CareerQuestionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [sliderValues, setSliderValues] = useState<Record<number, number>>({});
  const [progress, setProgress] = useState(1);
  
  const handleSliderChange = (value: number[]) => {
    const newSliderValues = { ...sliderValues, [questions[currentQuestion].id]: value[0] };
    setSliderValues(newSliderValues);
    setAnswers({ ...answers, [questions[currentQuestion].id]: value[0] });
  };
  
  const handleRadioChange = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(progress + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(progress - 1);
    }
  };
  
  const handleSubmit = () => {
    console.log("Questionnaire answers:", answers);
    // In a real app, this would send the data to a backend for processing
    // and then navigate to results page
  };
  
  const renderSliderQuestion = (question: Question) => {
    const value = sliderValues[question.id] || 50;
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Low</span>
          <span className="text-sm text-gray-500">High</span>
        </div>
        <Slider
          defaultValue={[value]}
          max={100}
          step={1}
          onValueChange={handleSliderChange}
          className="py-4"
        />
        <div className="text-center">
          <span className="text-sm font-medium">{value}%</span>
        </div>
      </div>
    );
  };
  
  const renderRadioQuestion = (question: Question) => {
    return (
      <RadioGroup
        onValueChange={handleRadioChange}
        defaultValue={answers[question.id]}
        className="space-y-3"
      >
        {question.options?.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    );
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg min-h-[400px] animate-fade-in">
      <CardHeader>
        <CardTitle>Career Assessment</CardTitle>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
          <div 
            className="bg-blue-accent h-2.5 rounded-full transition-all" 
            style={{ width: `${(progress / questions.length) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent className="min-h-[250px] flex flex-col">
        <h3 className="text-lg font-medium mb-6">
          {questions[currentQuestion].text}
        </h3>
        
        {questions[currentQuestion].type === "slider" 
          ? renderSliderQuestion(questions[currentQuestion])
          : renderRadioQuestion(questions[currentQuestion])
        }
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-200 dark:border-gray-800 pt-4">
        <Button 
          variant="outline" 
          onClick={handlePrevious} 
          disabled={currentQuestion === 0}
          className="btn-hover"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous
        </Button>
        
        {currentQuestion < questions.length - 1 ? (
          <Button 
            onClick={handleNext}
            disabled={!answers[questions[currentQuestion].id]}
            className="btn-hover"
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            disabled={!answers[questions[currentQuestion].id]}
            className="btn-hover"
          >
            Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CareerQuestionnaire;
