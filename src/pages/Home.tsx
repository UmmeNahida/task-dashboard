import { useEffect, useState } from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Package,
} from "lucide-react";
import ProjectAnalytics from "@/components/dashboard/ProjectAnalytics";
import ProjectProgress from "@/components/dashboard/ProjectProgress";
import TimeTracker from "@/components/dashboard/TimeTracker";
import ReminderCard from "@/components/dashboard/ReminderCard";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Overview {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
}

interface Analytics {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
}

interface DashboardData {
  overview: Overview;
  users: User[];
  analytics: Analytics[];
  products: Product[];
}

const Home = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/dashboard",
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!data) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-600">
            Failed to load dashboard data
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {data.overview.totalUsers.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Active Users
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {data.overview.activeUsers.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              ${data.overview.revenue.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Growth
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {data.overview.growth}%
            </p>
          </div>
        </div>

        {/* Project Analytics and Progress */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* <!-- ===== Middle Left Section ===== --> */}
          <div className="col-span-5 bg-white p-6 rounded-2xl shadow">
            <ProjectAnalytics analytics={data.analytics} />
          </div>
          <div className="col-span-3 bg-white p-6 rounded-2xl shadow flex items-center justify-center">
            <ReminderCard></ReminderCard>
          </div>

          {/* <!-- ===== Right Sidebar ===== --> */}
          <div className="col-span-4 row-span-8 space-y-6">
            {/* Products */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Products
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {data.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500 capitalize">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${product.price}
                        </p>
                        <p className="text-sm text-gray-500">
                          {product.sales} sales
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row-span-1 bg-green-700 text-white p-6 rounded-2xl shadow">
              <TimeTracker></TimeTracker>
            </div>
          </div>

          {/* Recent Users */}
          <div className="col-span-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Users
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {data.users.slice(0, 3).map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <ProjectProgress analytics={data.analytics} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
