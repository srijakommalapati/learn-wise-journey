
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  match: number;
  skills: string[];
  liked?: boolean;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $140K",
    match: 95,
    skills: ["React", "TypeScript", "CSS", "HTML"]
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "InnovateX",
    location: "New York, NY (Remote)",
    type: "Full-time",
    salary: "$130K - $150K",
    match: 87,
    skills: ["Node.js", "React", "MongoDB", "AWS"]
  },
  {
    id: 3,
    title: "Software Engineer - Backend",
    company: "DataSphere",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$125K - $145K",
    match: 82,
    skills: ["Python", "Django", "PostgreSQL", "Docker"]
  }
];

const JobRecommendation = () => {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle>Recommended Jobs</CardTitle>
      </CardHeader>
      <CardContent className="px-2 py-0">
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card 
              key={job.id}
              className="border border-gray-200 dark:border-gray-800 card-hover"
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{job.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">
                      {job.match}%
                    </span>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: `conic-gradient(#3B82F6 ${job.match * 3.6}deg, #F3F4F6 ${job.match * 3.6}deg)`
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-xs font-medium">
                        Match
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">{job.type}</Badge>
                  <Badge variant="outline">{job.salary}</Badge>
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>Save</span>
                  </Button>
                  <Button size="sm" className="btn-hover">
                    <span>Apply Now</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobRecommendation;
