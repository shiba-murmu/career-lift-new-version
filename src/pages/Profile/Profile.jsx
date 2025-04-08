import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
// import { MyButton } from '../../components/UI/button/MyButton'
import './profile.css'
function Profile() {
  return (
    <>
      <div className="h-screen ">
        <div className="h-48 w-full bgColor grid place-content-evenly">
          <div className="hidden md:block">
            <span className="text-2xl md:text-6xl text-white font-bold"  style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}>
              SHIBA MURMU
            </span>
          </div>
          <div className="h-60 w-60 absolute left-22 md:left-32 md:top-50 top-26 rounded-4xl">
            <img src="/images/career.jpeg"className=""  style={{ borderRadius: "25%" }} alt="User image" />
          </div>
        </div>
        <div className="h-96">
          <div className="absolute top-90  md:left-96 md:top-70">
            <h2 className="text-4xl hidden md:block" style={{ fontFamily: "Open Sans, sans-serif"}}>Shiba Murmu</h2>
            <p className="hidden md:block">A passonate software developer.</p>
            <p className="hidden md:block">
              I am a full-stack web developer with a passion for UI/UX design and writing.
            </p>

            {/* Below text will be hide id the screen size will be large */}
            <h2 className="text-4xl md:hidden text-center " style={{ fontFamily: "Open Sans, sans-serif"}}>Shiba Murmu</h2>
            <p className="text-center md:hidden">A passonate software developer.</p>
            <p className="text-center px-6 md:hidden">
              I am a full-stack web developer with a passion for UI/UX design and writing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

        {/* <Box
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
        </Box> */}