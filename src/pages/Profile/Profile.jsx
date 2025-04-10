import React from "react";
import { Button } from "@mui/material";
import './profile.css'; // Your custom styles if needed
import IconButtonWithBadge from "../../components/UI/button/IconButtonWithBadge";
function Profile() {
  return (
    <div className="min-h-screen w-full bg-gray-300">
      {/* Top Header Section */}
      <div className="w-full h-30 md:h-40 bgColor py-10 text-center">
      </div>

      {/* Profile Image Overlapping */}
      <div className="flex justify-center -mt-20 md:-mt-28">
        <img
          src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
          alt="User"
          className="h-44 w-44 md:h-60 md:w-60 rounded-[25%] object-cover shadow-lg"
        />
      </div>

      {/* Info Section */}
      <div className=" px-6 md:px-32 py-5">
        <div className="text-center md:text-left">
          <h2
            className="text-3xl text-center md:text-4xl md:font-bold"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Dev Varun
          </h2>
          <p className="mt-2 text-center text-lg text-gray-800">
            A passionate software developer.
          </p>
          <p className="mt-1 text-center text-base text-gray-700">
            I am a full-stack web developer with a passion for UI/UX design and writing.
          </p>

          <div className="mt-6  flex justify-center gap-1 ">
            <Button variant="contained" color="secondary">
              Contact
            </Button>
            <IconButtonWithBadge text="ACTIVITES" badgeNumber="2" />
          </div>
        </div>
      </div>

      {/* Pending Content Section */}
      <div className="w-full bg-gray-600 py-16 flex justify-center items-center">
        <span
          className="text-2xl md:text-5xl text-white font-bold"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Pending Contents...
        </span>
      </div>
    </div>
  );
}

export default Profile;


{
  /* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            maxWidth: 300,
            margin: "auto",
          }}
        >
          <Avatar
            alt="User Name"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography
            variant="h5"
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
            component="div"
          >
            User Name
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            A short bio about the user goes here. This can be a brief
            description or tagline that represents the user.
          </Typography>
        </Box> */
}
