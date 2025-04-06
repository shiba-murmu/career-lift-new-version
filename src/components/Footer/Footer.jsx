// components/Footer.js
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: isDark ? "#0A0A0A" : "#F5F5F5",
        color: isDark ? "#FFFFFF" : "#333333",
        px: { xs: 3, sm: 10 },
        pt: 8,
        pb: 4,
        mt: 10,
        position: "relative",
        fontFamily: "Raleway, sans-serif", // default for body
      }}
    >
      {/* Top Grid Section */}
      <Grid container spacing={5}>
        {/* Brand Info */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Career Lift 🚀
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            Helping students find the right path based on passion, skill, and
            location.
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Explore
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/about" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="/careers" underline="hover" color="inherit">
              Career Paths
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact & Social */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Connect With Us
          </Typography>
          <Box display="flex" gap={1} mb={1}>
            <IconButton
              href="https://github.com"
              target="_blank"
              sx={{ color: "inherit" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "inherit" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "inherit" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="mailto:careerlift@example.com"
              sx={{ color: "inherit" }}
            >
              <Email />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ color: "gray" }}>
            careerlift@example.com
          </Typography>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, borderColor: isDark ? "#333" : "#ddd" }} />

      <Box textAlign="center">
        <Typography variant="body2" sx={{ color: "gray" }}>
          © {new Date().getFullYear()} Career Lift. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
