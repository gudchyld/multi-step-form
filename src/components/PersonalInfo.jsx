function PersonalInfo({ name, setName, email, setEmail, phone, setPhone }) {
  return (
    <div className="w-full md:w-full bg-white rounded-xl px-6 pt-9 pb-12">
      <div className="text-left">
        <h2 className="text-color text-2xl md:text-3xl md:font-bold font-semibold pb-1.5">
          Personal Info
        </h2>
        <p className="w-[90%] text-gray-400">
          Please provide your name, email address and phone number.
        </p>
      </div>
      <div className="form-holder mt-5">
        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col items-start">
            <span className="text-color">Name</span>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g Suz eth"
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-color">Email Address</span>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g suzeth@ethereum.org"
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-color">Phone Number</span>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g 08036174716 (11 or more in length)"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
