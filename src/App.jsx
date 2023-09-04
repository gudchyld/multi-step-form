import "./App.css";
import Plan from "./components/Plan";
import PersonalInfo from "./components/PersonalInfo";
import AddOn from "./components/AddOn";
import Summary from "./components/Summary";

import { useState } from "react";
import iconArcade from "./assets/images/icon-arcade.svg";
import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconPro from "./assets/images/icon-pro.svg";
import Final from "./components/Final";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const [selectedPlan, setSelectedPlan] = useState(data.plans[0]);
  //state for AddOn.jsx
  const [selectedAddOn, setSelectedAddOn] = useState([]);
  const [selectedAddOnObj, setSelectedAddOnObj] = useState([]);

  // PersonalInfo form Validations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});

  const componentsArray = [
    <PersonalInfo
      key={1}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
    />,
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
      handleChangeButton={handleChangeButton}
    />,

    <Final key={5} />,
  ];

  //  function to handle form validation
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // validate user name
    if (name.trim() === "") {
      errors.name = "Username is required";
      isValid = false;
    }
    // validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }
    //validate phone number
    if (phone.length < 11) {
      errors.phone = "invalid phone number";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  //  const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     // Form is valid,
  //     console.log('Form is valid');
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // };

  // function to handle monthly/yearly toggle functionality
  function handleToggleClick() {
    console.log("togle fired!!");
    setTenureMonthly(!tenureMonthly);
    setData(formData);
  }

  function handleBackButton() {
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  }

  function handleNextButton() {
    if (validateForm()) {
      if (currentIndex < componentsArray.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      console.log("Form is invalid");
    }
  }

  function handleChangeButton() {
    setCurrentIndex(1);
  }

  return (
    <>
      <div className="h-[100vh] flex flex-col justify-between bg-sky-100 md:bg-white md:grid md:grid-cols-12 md:grid-rows-12">
        {/* navigation */}
        <div className="background w-[100%] h-1/4 md:h-[95%] md:col-span-3 md:row-[1/13] bg-no-repeat bg-cover pb-14 md:shrink-0 md:m-4 md:rounded-lg">
          {/* top navigation buttons */}
          <div className="button-holder flex justify-center py-10 gap-3 md:flex-col md:pl-10 md:pt-10 md:mt-10 md:ml-2 md:gap-6">
            <div className="md:flex md:gap-3">
              <button
                className={`${
                  currentIndex === 0
                    ? "bg-blue-300 text-gray-900"
                    : "bg-transparent text-white"
                }`}
              >
                1
              </button>
              <div className="hidden md:flex md:flex-col">
                <p className="md:font-light md:text-sm">STEP 1</p>
                <p className="md:font-bold md:text-sm">YOUR INFO</p>
              </div>
            </div>

            <div className="md:flex md:gap-3">
              <button
                className={`${
                  currentIndex === 1
                    ? "bg-blue-300 text-gray-900"
                    : "bg-transparent text-white"
                }`}
              >
                2
              </button>
              <div className="hidden md:flex md:flex-col">
                <p className="md:font-light md:text-sm">STEP 2</p>
                <p className="md:font-bold md:text-sm">SELECT PLANS</p>
              </div>
            </div>

            <div className="md:flex md:gap-3">
              <button
                className={`${
                  currentIndex === 2
                    ? "bg-blue-300 text-gray-900"
                    : "bg-transparent text-white"
                }`}
              >
                3
              </button>
              <div className="hidden md:flex md:flex-col">
                <p className="md:font-light md:text-sm">STEP 3</p>
                <p className="md:font-bold md:text-sm">ADD-ONS</p>
              </div>
            </div>

            <div className="md:flex md:gap-3">
              <button
                className={`${
                  currentIndex === 3
                    ? "bg-blue-300 text-gray-900"
                    : "bg-transparent text-white"
                }`}
              >
                4
              </button>
              <div className="hidden md:flex md:flex-col">
                <p className="md:font-light md:text-sm">STEP 4</p>
                <p className="md:font-bold md:text-sm">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second section on larger screen */}

        {/* Components */}
        <div className="w-[80vw] mx-auto absolute top-[150px] left-0 right-0 md:static md:m-auto md:w-full md:col-start-5 md:col-span-7 md:row-[2/8] ">
          {componentsArray[currentIndex]}
        </div>
        {/* bottom toggle buttons */}
        <div
          className={` ${
            currentIndex === 4
              ? "hidden"
              : "bg-gray-50 md:bg-white w-full p-4 flex justify-center"
          } md:row-[11/12] md:col-start-5 md:col-span-7 md:max-h-[80px]`}
        >
          <div className="w-[80vw] flex justify-between">
            <button
              className={`${
                currentIndex === 0 ? "hidden" : "visible"
              }  px-0 outline-none focus:outline-none hover:outline-none hover:border-none border-none text-gray-400`}
              onClick={() => handleBackButton()}
            >
              Go Back
            </button>

            <button
              className={` ${
                currentIndex === 3 ? "bg-blue-500" : " bg-blue-950"
              } text-white ml-auto outline-none focus:outline-none hover:outline-none hover:border-none border-none
            `}
              onClick={() => handleNextButton()}
            >
              {currentIndex === 3 ? `Confirm` : `Next Step`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
