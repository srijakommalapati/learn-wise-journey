
import { useState } from 'react';
import { Minus, Plus, CheckCircle, Circle } from 'lucide-react';

interface CodeCheckPoint {
  id: number;
  text: string;
  completed: boolean;
}

interface CodeCheckPointsProps {
  checkPoints: CodeCheckPoint[];
  onToggleCheckPoint: (id: number) => void;
}

const CodeCheckPoints = ({ checkPoints, onToggleCheckPoint }: CodeCheckPointsProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border rounded-md p-2 bg-gray-50 dark:bg-gray-800/50 text-sm mt-3">
      <div 
        className="flex items-center justify-between cursor-pointer p-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium flex items-center">
          Code Check Points
          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            {checkPoints.filter(cp => cp.completed).length}/{checkPoints.length}
          </span>
        </h3>
        {isExpanded ? (
          <Minus className="h-4 w-4 text-gray-500" />
        ) : (
          <Plus className="h-4 w-4 text-gray-500" />
        )}
      </div>
      
      {isExpanded && (
        <ul className="mt-2 space-y-1.5 px-2">
          {checkPoints.map((checkPoint) => (
            <li 
              key={checkPoint.id}
              className="flex items-start gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/50 p-1 rounded"
              onClick={() => onToggleCheckPoint(checkPoint.id)}
            >
              {checkPoint.completed ? (
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              ) : (
                <Circle className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              )}
              <span className={`text-sm ${checkPoint.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
                {checkPoint.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CodeCheckPoints;
