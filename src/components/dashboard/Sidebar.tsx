import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/",
      badge: null,
    },
    {
      icon: CheckSquare,
      label: "Tasks",
      path: "/tasks",
      badge: "03",
    },
    {
      icon: Calendar,
      label: "Calendar",
      path: "/calendar",
      badge: null,
    },
    {
      icon: BarChart3,
      label: "Analytics",
      path: "/analytics",
      badge: null,
    },
    { icon: Users, label: "Team", path: "/team", badge: null },
  ];

  const generalItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 border-3 border-white rounded-lg"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">
            Donezo
          </span>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="px-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Menu
          </p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                    active
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        active
                          ? "bg-emerald-700 text-white"
                          : "bg-emerald-600 text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* General Section */}
        <div className="px-4 mt-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            General
          </p>
          <nav className="space-y-1">
            {generalItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    active
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Download App Card */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-emerald-600 rounded-full opacity-20 blur-2xl"></div>

          <div className="relative z-10">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-emerald-600 rounded"></div>
            </div>
            <h3 className="text-base font-semibold mb-2">
              Download our Mobile App
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Get easy to access from your mobile
            </p>
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
              Download
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
