import { TrendingUp } from "lucide-react";

interface Analytics {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

interface ProjectProgressProps {
  analytics: Analytics[];
}

const ProjectProgress = ({ analytics }: ProjectProgressProps) => {
  // Calculate totals
  const totalViews = analytics.reduce(
    (sum, item) => sum + item.views,
    0,
  );
  const totalClicks = analytics.reduce(
    (sum, item) => sum + item.clicks,
    0,
  );
  const totalConversions = analytics.reduce(
    (sum, item) => sum + item.conversions,
    0,
  );

  // Calculate total actions
  const totalActions = totalViews + totalClicks + totalConversions;

  // Calculate percentages
  const completedPercentage = Math.round(
    (totalConversions / totalActions) * 100,
  );
  const inProgressPercentage = Math.round(
    (totalClicks / totalActions) * 100,
  );
  // const pendingPercentage = Math.round(
  //   (totalViews / totalActions) * 100,
  // );

  // Calculate stroke dash array for the circular progress
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const completedOffset =
    circumference - (completedPercentage / 100) * circumference;
  const inProgressOffset =
    circumference - (inProgressPercentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">
          Progress
        </h2>
      </div>

      {/* Circular Progress Chart */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="#f3f4f6"
              strokeWidth="20"
              fill="none"
            />

            {/* Pending (Striped pattern) */}
            <defs>
              <pattern
                id="stripes"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  stroke="#d1d5db"
                  strokeWidth="4"
                />
              </pattern>
            </defs>
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="url(#stripes)"
              strokeWidth="20"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={inProgressOffset}
              className="transition-all duration-1000"
            />

            {/* In Progress (Green) */}
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="#10b981"
              strokeWidth="20"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={inProgressOffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />

            {/* Completed (Dark Green) */}
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="#047857"
              strokeWidth="20"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={completedOffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-gray-900">
              {completedPercentage}%
            </span>
            <span className="text-sm text-gray-500 mt-1">
              Project Ended
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
          <span className="text-xs text-gray-600">Conversions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Clicks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span className="text-xs text-gray-600">Views</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-700">
            {totalConversions}
          </p>
          <p className="text-xs text-gray-500 mt-1">Conversions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-500">
            {totalClicks}
          </p>
          <p className="text-xs text-gray-500 mt-1">Total Clicks</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-400">
            {totalViews}
          </p>
          <p className="text-xs text-gray-500 mt-1">Total Views</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
