import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


function LoginPage() {
  return (
    <>
    
      <section className="h-[60vh] p-3 md:p-0 md:h-screen  flex items-center justify-center">
        <div className="bg-white dark:bg-neutral-800 dark:shadow-none shadow-neutral-500 rounded-lg shadow-lg p-13 w-full md:w-1/4">
          <h1
            className="md:text-5xl text-4xl font-bold mb-6 text-center text-[#1976d2] dark:text-[#90caf9]"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Login
          </h1>
          <form action="" className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-lg md:font-medium"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 placeholder:text-gray-400 placeholder:placeholder-opacity-50 rounded-sm md:rounded-md border-1 md:border-2 border-gray-300 w-full required"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-lg font-medium mb-2"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="p-2 placeholder:text-gray-400 placeholder:placeholder-opacity-70  rounded-sm md:rounded-md border-1 md:border-2 border-gray-300 w-full required"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Login
            </Button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginPage



// function Login() {
//   return (
//     <>
//     </>
//   );
// }

// export default Login;/

// import React from "react";
// function Login() {
//   return (
//   );
// }

// export default Login;
