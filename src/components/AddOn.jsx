// import { useState } from "react";

function AddOn({ apiData, selectedAddOn, setSelectedAddOn }) {
  
  function handleCheckboxChange(event) {
    const addOnValue = event.target.value;

    if (selectedAddOn.includes(addOnValue)) {
      //if unchecked value is present, remove it
      setSelectedAddOn(selectedAddOn.filter((value) => value !== addOnValue));
    } else {
      //else add it
      setSelectedAddOn([...selectedAddOn, addOnValue]);
    }
  }

  return (
    <>
      <div className="w-full md:w-full bg-white rounded-xl px-6 pt-9 pb-12">
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-gray-700 pb-1.5 md:text-3xl md:font-bold text-color">
            Pick add-ons
          </h2>
          <p className="w-[90%] text-gray-400">
            Add-ons help enhance your gaming experience
          </p>
        </div>

        {/* begin checkbox group */}
        <div className="mt-6 flex flex-col gap-3">
          {apiData.addOns.map((addOn, index) => (
            <div
              key={addOn.name}
              className="flex items-center gap-4 border rounded-lg hover:bg-slate-100 relative"
            >
              <input
                type="checkbox"
                value={addOn.name}
                checked={selectedAddOn.includes(addOn.name)}
                onChange={handleCheckboxChange}
                className="w-5 h-5  rounded- border-gray-300 peer absolute left-4"
                id={index}
              />
              <label
                htmlFor={index}
                className="w-[100vw] peer-checked:bg-slate-100 peer-checked:border-blue-800 peer-checked:border pl-14 p-4 rounded-lg"
              >
                <div className="flex justify-between w-full items-center ">
                  <div className="items-start flex flex-col">
                    <p className="font-medium">{addOn.name}</p>
                    <p className="text-sm text-gray-400">{addOn.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-700">
                      ${addOn.price}/{addOn.tenure}
                    </p>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddOn;
