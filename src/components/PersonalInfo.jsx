function PersonalInfo() {
  return (
    <div className="w-[80vw] bg-white rounded-xl px-6 pt-9 pb-12">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-700 pb-1.5">
          Personal Info
        </h2>
        <p className="w-[90%] text-gray-400">
          Please provide your name, email address and phone number.
        </p>
      </div>
      <div className="form-holder mt-5">
        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col items-start">
            <span>Name</span>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="name"
              placeholder="e.g Suz eth"
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <span>Email Address</span>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="email"
              placeholder="e.g suzeth@ethereum.org"
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <span>Phone Number</span>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="text"
              placeholder="e.g 08036174716"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
