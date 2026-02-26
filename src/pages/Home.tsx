import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  BarChart3,
  Package,
  LogOut,
} from "lucide-react";

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-600">Failed to load dashboard data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <h1 className="text-xl font-bold text-gray-900">
                Task Dashboard
              </h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Users */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
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
                {data.users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
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
        </div>

        {/* Analytics Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Analytics Overview
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.analytics.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.clicks.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.conversions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {(
                          (item.conversions / item.clicks) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
