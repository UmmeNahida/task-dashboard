const TimeTracker = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >

      {/* Card */}
      <div className="w-[320px] rounded-2xl p-6 text-white text-center">
        <p className="text-sm opacity-80 mb-2">Time Tracker</p>

        <h1 className="text-4xl font-mono font-semibold tracking-wider mb-6">
          01:24:08
        </h1>

        <div className="flex items-center justify-center gap-4">
          {/* Pause */}
          <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition">
            ⏸
          </button>

          {/* Stop */}
          <button className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center hover:scale-105 transition">
            ⏹
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimeTracker;