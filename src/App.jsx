import "./App.css";
import Plan from "./components/Plan";
import PersonalInfo from "./components/PersonalInfo";
import AddOn from "./components/AddOn";
import Summary from "./components/Summary";

import Layout from "./layout/Layout";
import { useState } from "react";
import iconArcade from "./assets/images/icon-arcade.svg";
import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconPro from "./assets/images/icon-pro.svg";


function App() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [tenureMonthly, setTenureMonthly] = useState(false);
 

  // formData array
  const formData = {
    plans: [
      {
        name: "Arcade",
        price: tenureMonthly ? "9" : "90",
        tenure: tenureMonthly ? "mo" : "yr",
        image: iconArcade,
        discount: "2 months free",
      },
      {
        name: "Advanced",
        price: tenureMonthly ? "12" : "120",
        tenure: tenureMonthly ? "mo" : "yr",
        image: iconAdvanced,
        discount: "2 months free",
      },
      {
        name: "Pro",
        price: tenureMonthly ? "15" : "150",
        tenure: tenureMonthly ? "mo" : "yr",
        image: iconPro,
        discount: "2 months free",
      },
    ],

    addOns: [
      {
        name: "Online Service",
        description: "Access to multiplayer games",
        price: tenureMonthly ? "1" : "10",
        tenure: tenureMonthly ? "mo" : "yr",
      },
      {
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: tenureMonthly ? "2" : "20",
        tenure: tenureMonthly ? "mo" : "yr",
      },
      {
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: tenureMonthly ? "2" : "20",
        tenure: tenureMonthly ? "mo" : "yr",
      },
    ],
  };

  const [data, setData] = useState(formData);
   //state for plan.jsx
   const [selectedPlan, setSelectedPlan] = useState(data.plans[0])
   //state for AddOn.jsx
   const [selectedAddOn, setSelectedAddOn] = useState([]);
   const [selectedAddOnObj, setSelectedAddOnObj] = useState([]);

  const componentsArray = [
    <PersonalInfo key={1} />,
    <Plan
      key={2}
      apiData={data}
      tenureMonthly={tenureMonthly}
      setTenureMonthly={setTenureMonthly}
      handleToggleClick={handleToggleClick}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
    />,
    <AddOn 
      key={3} 
      apiData={data}
      selectedAddOn={selectedAddOn}
      setSelectedAddOn={setSelectedAddOn}
      selectedAddOnObj={selectedAddOnObj}
      setSelectedAddOnObj={setSelectedAddOnObj}
       />,
    <Summary
      key={4}
      selectedPlan={selectedPlan}
      selectedAddOnObj={selectedAddOnObj}
    />
  ];

  function handleToggleClick() {
    console.log("togle fired!!");
    setTenureMonthly(!tenureMonthly);
    setData(formData);
  }

  function handleBackButton() {
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  }

  function handleNextButton() {
    if (currentIndex < componentsArray.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <>
      <Layout>
        <div className=" mt-[-60px] ">{componentsArray[currentIndex]}</div>
        {/* bottom toggle buttons */}
        <div className="bg-gray-50 w-full p-4 flex justify-center mt-auto">
          <div className="w-[80vw] flex justify-between">
            <button
              className="px-0 outline-none focus:outline-none hover:outline-none hover:border-none border-none text-gray-400"
              onClick={() => handleBackButton()}
            >
              Go Back
            </button>

            <button
              className="bg-blue-950 text-white ml-auto outline-none focus:outline-none hover:outline-none hover:border-none border-none
            "
              onClick={() => handleNextButton()}
            >
              Next Step
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
