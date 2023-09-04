
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function Plan({ tenureMonthly, handleToggleClick, apiData, selectedPlan, setSelectedPlan }) {
 
  

  return (
    <div className="w-full md:w-full bg-white rounded-xl px-6 pt-9 pb-12">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-700 pb-1.5 md:text-3xl md:font-bold text-color">
          Select your plan
        </h2>
        <p className="w-[90%] text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      {/* begin plan holder */}
      <div className="plan-holder mt-6 flex flex-col gap-8 ">
        <RadioGroup value={selectedPlan} onChange={setSelectedPlan} className={``} >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4 md:flex md:justify-between md:space-x-6">
            {apiData.plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none md:flex-1 md:h-[200px]`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center md:flex-col md:gap-12 md:items-start rounded-lg gap-4 md:py-4">
                      <span>
                        <img src={plan.image} alt="" />
                      </span>
                      <div className="flex flex-col items-start">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {plan.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={` ${
                            checked ? "text-sky-100" : "text-gray-500"
                          }`}
                        >
                          <span className="text-sm">
                            ${plan.price}/{plan.tenure}
                          </span>
                          
                        </RadioGroup.Description>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* begin monthly or yearly toggle */}
      <div className="flex justify-center mt-6 gap-4 text-sm bg-slate-100  p-4 rounded-lg">
        <p>Monthly</p>
        {
          <ToggleButton
            tenureMonthly={tenureMonthly}
            handleToggleClick={handleToggleClick}
          />
        }
        <p className="text-gray-500">Yearly</p>
      </div>
    </div>
  );
}

export default Plan;
