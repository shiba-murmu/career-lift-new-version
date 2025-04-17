import React from "react";

function Login() {
  return (
    <>
      <section className="h-screen">
        <div className="flex h-[85vh]  flex-col md:flex-row md:w-full">
          <div className="md:w-[57%] bg-white">for image</div>

          <div className="md:w-[43%] bg-pink-500">
            <form action="" className="flex flex-col gap-5">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="p-2 rounded-md border-2 border-gray-300"
                />
              </div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="p-2 rounded-md border-2 border-gray-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md w-xl"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
