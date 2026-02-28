import { type ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Mail, Bell } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search task"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">
                      ⌘F
                    </kbd>
                  </div>
                </div>
              </div>

              {/* Right Side - Icons and User */}
              <div className="flex items-center gap-4 ml-6">
                {/* Mail Icon */}
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </button>

                {/* Notification Icon */}
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user.email
                        ? user.email.charAt(0).toUpperCase()
                        : "T"}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900">
                      Totok Michael
                    </p>
                    <p className="text-xs text-gray-500">
                      {user.email || "tmichael@gmail.com"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
