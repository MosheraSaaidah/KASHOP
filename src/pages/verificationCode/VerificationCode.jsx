import { Box, Button, InputAdornment, TextField } from "@mui/material";
import style from "./VerificationCode.module.css";
import { Code, Email, Visibility, VpnKey } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function VerificationCode() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const VerificationCode = async (values) => {
    try {
      const response = await axios.patch(
        "http://mytshop.runasp.net/api/Account/SendCode",
        values
      );
      console.log(response);
      console.log(values);

      // If success
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  return (
    <>
     <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={"form"}
        className={`${style.Formcustom} `}
        onSubmit={handleSubmit(VerificationCode)}
      >
        <div>
          <h2>Enter Verification Code </h2>
          <p>
            We have sent OTP code via phone number to +972********5, please
            enter it below to reset your password..
          </p>
        </div>

        <TextField
          label="Email"
          {...register("email")}
          type="email"
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Code"
          variant="outlined"
          {...register("code")}
          type="number"
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                 
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Password"
          {...register("password")}
          type="password"
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="confirm Password"
          {...register("confirmPassword")}
          type="password"
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              ),
            },
          }}
        />

        <div>
          <Button fullWidth variant="outlined" type="submit">
            Continue
          </Button>

          <p>
            {" "}
            Remembered your password?<Link to={"/login"}>Login</Link>{" "}
          </p>
        </div>
      </Box>
      </Box>
    </>
  );
}
