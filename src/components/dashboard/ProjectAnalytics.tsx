import { BarChart3 } from "lucide-react";

interface Analytics {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

interface ProjectAnalyticsProps {
  analytics: Analytics[];
}

const ProjectAnalytics = ({ analytics }: ProjectAnalyticsProps) => {
  // Get the last 7 days of analytics data
  const weekData = analytics.slice(-7);

  // Calculate max value for scaling
  const maxValue = Math.max(
    ...weekData.map((item) =>
      Math.max(item.views, item.clicks, item.conversions),
    ),
  );

  // Get day names
  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-US", { weekday: "short" })
      .charAt(0);
  };

  // Calculate bar height percentage
  const getBarHeight = (value: number) => {
    return (value / maxValue) * 100;
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">
          Project Analytics
        </h2>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-between gap-3 h-48 mb-4">
        {weekData.map((item, index) => {
          const viewsHeight = getBarHeight(item.views);
          const clicksHeight = getBarHeight(item.clicks);
          const conversionsHeight = getBarHeight(item.conversions);

          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
            >
              {/* Bars Container */}
              <div className="w-full flex items-end justify-center gap-1 h-40">
                {/* Views Bar */}
                <div
                  className="w-full bg-emerald-600 rounded-full transition-all duration-500 hover:opacity-80"
                  style={{ height: `${viewsHeight}%` }}
                  title={`Views: ${item.views}`}
                />
                {/* Clicks Bar */}
                <div
                  className="w-full bg-emerald-400 rounded-full transition-all duration-500 hover:opacity-80"
                  style={{ height: `${clicksHeight}%` }}
                  title={`Clicks: ${item.clicks}`}
                />
                {/* Conversions Bar */}
                <div
                  className="w-full bg-emerald-800 rounded-full transition-all duration-500 hover:opacity-80"
                  style={{ height: `${conversionsHeight}%` }}
                  title={`Conversions: ${item.conversions}`}
                />
              </div>
              {/* Day Label */}
              <span className="text-sm font-medium text-gray-600">
                {getDayName(item.date)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
          <span className="text-xs text-gray-600">Views</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          <span className="text-xs text-gray-600">Clicks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
          <span className="text-xs text-gray-600">Conversions</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
