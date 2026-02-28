export default function ProductAnalytics() {
  return (
  <div className="min-h-screen bg-gray-100 p-6">
  
  {/* <!-- Dashboard Container --> */}
  <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

    {/* <!-- ===== Top Stats Cards ===== --> */}
    <div className="col-span-3 bg-green-600 text-white p-6 rounded-2xl shadow">
      <h4 className="text-sm">Total Projects</h4>
      <h2 className="text-3xl font-bold mt-2">24</h2>
    </div>

    <div className="col-span-3 bg-white p-6 rounded-2xl shadow">
      <h4 className="text-sm text-gray-500">Ended Projects</h4>
      <h2 className="text-3xl font-bold mt-2">10</h2>
    </div>

    <div className="col-span-3 bg-white p-6 rounded-2xl shadow">
      <h4 className="text-sm text-gray-500">Running Projects</h4>
      <h2 className="text-3xl font-bold mt-2">12</h2>
    </div>

    <div className="col-span-3 bg-white p-6 rounded-2xl shadow">
      <h4 className="text-sm text-gray-500">Pending Project</h4>
      <h2 className="text-3xl font-bold mt-2">2</h2>
    </div>

    {/* <!-- ===== Middle Left Section ===== --> */}
    <div className="col-span-5 bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Project Analytics</h3>
      <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center">
        Chart Area
      </div>
    </div>
    <div className="col-span-3 bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Project Analytics</h3>
      <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center">
        Chart Area
      </div>
    </div>

    {/* <!-- ===== Right Sidebar ===== --> */}
    <div className="col-span-4 row-span-8 space-y-6">
      
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Projects</h3>
        <ul className="space-y-2 text-sm">
          <li>Develop API Endpoints</li>
          <li>Onboarding Flow</li>
          <li>Build Dashboard</li>
          <li>Optimize Page Load</li>
          <li>Develop API Endpoints</li>
          <li>Onboarding Flow</li>
          <li>Build Dashboard</li>
          <li>Optimize Page Load</li>
          <li>Develop API Endpoints</li>
          <li>Onboarding Flow</li>
          <li>Build Dashboard</li>
          <li>Optimize Page Load</li>
        </ul>
      </div>

      <div className="row-span-4 bg-green-700 text-white p-6 rounded-2xl shadow">
        <h3 className="text-lg">Time Tracker</h3>
        <p className="text-3xl font-bold mt-2">01:24:08</p>
      </div>

    </div>

    {/* <!-- ===== Bottom Left Section ===== --> */}
    <div className="col-span-4 bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Team Collaboration</h3>
      <div className="space-y-2 text-sm">
        <p>Alexandra Deff</p>
        <p>Edwin Atenike</p>
        <p>Isaac Oluwatemilrun</p>
      </div>
    </div>

    <div className="col-span-4 bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Project Progress</h3>
      <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center">
        41%
      </div>
    </div>

  </div>
</div>
  );
}
