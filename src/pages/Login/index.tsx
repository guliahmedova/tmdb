const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-7xl w-full my-10 px-10">
        <div>
          <h2 className="text-2xl">Login to your account</h2>
          <form className="my-10">
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="username" className="text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="p-2 rounded border"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="password" className="text-gray-600">
                Password
              </label>
              <input
                type="text"
                name="password"
                className="p-2 rounded border"
              />
            </div>
            <div>
              <button className="bg-sky-500 rounded-md p-2 px-4 text-white font-semibold cursor-pointer shadow">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
