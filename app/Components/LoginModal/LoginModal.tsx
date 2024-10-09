import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import bgImage from "../../../media/bg.jpeg";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(" handle clicked", email, password);
  };
  const handleGoogleLogin = () => {
    console.log("google login");
  };
  return (
    <Grid container>
      <Grid item xs={7} sx={{ backgroundColor: "#071549", opacity: 0.5 }}>
        <Image src={bgImage} alt="image" objectFit="fill"></Image>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          backgroundColor: "#071549",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#39B6DDDB",
            height: 564,
            width: 414,
            borderRadius: 5,
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            gap: 2,
            padding: 4,
          }}
        >
          <Typography variant="h4" alignSelf="center" color="black">
            Log in
          </Typography>
          <InputLabel sx={{ color: "black" }}>Email</InputLabel>
          <TextField
            type="text"
            placeholder="Email"
            value={email}
            sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputLabel sx={{ color: "black" }}>Password</InputLabel>
          <TextField
            type="password"
            placeholder="Password"
            value={password}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#071549",
              color: "#fff",
              fontWeight: "bold",
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Typography alignSelf="center" color="black">
            OR
          </Typography>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            sx={{ backgroundColor: "#fff", color: "#000", fontWeight: "bold" }}
          >
            Login with Google
          </Button>
          <Typography alignSelf="center" color="black">
            Don&apos;t Have Account? <Link href="/">Signup here</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginModal;
