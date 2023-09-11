function PersonalInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  error,
}) {
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
        <form className="flex flex-col gap-3">
          <div className="flex flex-col items-start">
            <div className="w-full flex items-center justify-between pr-1">
              <span className="basic-span text-color">Name</span>
              {error && <span className="error-span">{error.name}</span>}
            </div>
            <input
              className="bg-transparent border-2 w-full py-2 px-3"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g Suz eth"
              required
            />
          </div>

          <div className="flex flex-col items-start">
          <div className="w-full flex items-center justify-between pr-1">
              <span className="basic-span text-color">Email Address</span>
              {error && <span className="error-span">{error.email}</span>}
            </div>
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
          <div className="w-full flex items-center justify-between pr-1">
              <span className="basic-span text-color">Phone Number</span>
              {error && <span className="error-span">{error.phone}</span>}
            </div>
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
