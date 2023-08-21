import "./App.css";
import Plan from "./components/Plan";
import PersonalInfo from "./components/PersonalInfo";

import Layout from "./layout/Layout";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const componentsArray = [<PersonalInfo key={1} />, <Plan key={2} />];

  function handleBackButon() {
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
        <div className="absolute top-[17%]">
          {componentsArray[currentIndex]}
        </div>
        {/* bottom toggle buttons */}
        <div className="bg-gray-50 w-full p-4 flex justify-center ">
          <div className="w-[80vw] flex justify-between">
            <button
              className="px-0 outline-none focus:outline-none hover:outline-none hover:border-none border-none text-gray-400"
              onClick={() => handleBackButon()}
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
