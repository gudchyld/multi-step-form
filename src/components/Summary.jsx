import React from "react";

function Summary({ selectedPlan, selectedAddOnObj, handleChangeButton }) {

    function getTotal(){
        let sum = +(selectedPlan.price);
        
        for(let obj of selectedAddOnObj){
            sum += Number(obj.price);
        }

        return sum;
    }

  return (
    <>
      <div className="w-full md:w-full bg-white rounded-xl px-6 pt-9 pb-12">
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-gray-700 pb-1.5">
            Finishing Up
          </h2>
          <p className="w-[90%] text-gray-400">
            Double check everything looks OK before confirming
          </p>
        </div>

        {/* Begin summary group */}

        <div className="mt-6">
          <div className="bg-sky-50 px-4 py-2 rounded-lg pb-3">
            <div className="flex justify-between items-center border-b py-3 mb-2">
              <div className="flex  flex-col items-start">
                <h2 className="font-semibold">
                  {selectedPlan.name}&nbsp;
                  {selectedPlan.tenure === "mo" ? "(Monthly)" : "(Yearly)"}
                </h2>
                <a className="text-sm text-gray-400" 
                href="#"
                onClick={handleChangeButton}
                >
                  Change
                </a>
              </div>
              <p className="text-sm">
                ${selectedPlan.price}/{selectedPlan.tenure}
              </p>
            </div>
            {selectedAddOnObj.map((item, idx) => (
              <div className="flex justify-between gap-2 py-1" key={idx}>
                <p className="text-sm text-gray-400">{item.name}</p>
                <p className="text-sm">
                  +{item.price}/{item.tenure}
                </p>
              </div>
            ))}
          </div>
          {/* second part */}
          <div className="flex justify-between px-4 pt-6">
            <p className="text-sm text-gray-400">Total (per {selectedPlan.tenure === "mo" ? "month" : "year"})</p>
            <p className="text-sm">
              +{getTotal()}/{selectedPlan.tenure}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
