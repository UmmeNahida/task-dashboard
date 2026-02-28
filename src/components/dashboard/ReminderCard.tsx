const ReminderCard = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="">
        {/* Header */}
        <p className="text-lg font-medium text-gray-500 mb-2">
          Reminders
        </p>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-emerald-900 leading-snug mb-1">
          Meeting with Arc Company
        </h2>

        {/* Time */}
        <p className="text-sm text-gray-400 mb-4">
          Time : 02.00 pm - 04.00 pm
        </p>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 rounded-full bg-emerald-800 py-3 text-sm font-medium text-white hover:bg-emerald-900 transition">
          {/* Icon */}
          <span className="text-base">📹</span>
          Start Meeting
        </button>
      </div>
    </section>
  );
};

export default ReminderCard;