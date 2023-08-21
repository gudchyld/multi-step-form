import iconArcade from "../assets/images/icon-arcade.svg";

function Plan() {
  return (
    <div className="w-[80vw] bg-gray-50 rounded-xl px-6 pt-9 pb-12">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-700 pb-1.5">
          Select your plan
        </h2>
        <p className="w-[90%] text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      {/* begin plan holder */}
      <div className="plan-holder mt-6 flex flex-col gap-3">
        {/* Arcade */}
        <div className="flex items-center border-2 p-4 rounded-lg gap-4">
          <span>
            <img src={iconArcade} alt="" />
          </span>
          <div className="flex flex-col items-start">
            <h3 className="font-medium">Arcade</h3>
            <p className="text-gray-400 text-sm">$9/mo</p>
          </div>
        </div>
        {/* Advanced */}
        <div className="flex items-center border-2 p-4 rounded-lg gap-4">
          <span>
            <img src={iconArcade} alt="" />
          </span>
          <div className="flex flex-col items-start">
            <h3 className="font-medium">Advanced</h3>
            <p className="text-gray-400 text-sm">$9/mo</p>
          </div>
        </div>
        {/* Pro */}
        <div className="flex items-center border-2 p-4 rounded-lg gap-4">
          <span>
            <img src={iconArcade} alt="" />
          </span>
          <div className="flex flex-col items-start">
            <h3 className="font-medium">Pro</h3>
            <p className="text-gray-400 text-sm">$9/mo</p>
          </div>
        </div>
      </div>
      {/* begin monthly or yearly toggle */}
      <div className="flex justify-center mt-6 gap-4 text-sm bg-slate-100 text-gray-500 p-4 rounded-lg">
        <p>Monthly</p>
        <div>dot</div>
        <p>Yearly</p>
      </div>
    </div>
  );
}

export default Plan;
