import { Box, Button, InputAdornment, TextField } from "@mui/material";
import style from "./ForgetPassword.module.css";
import { Email } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function ForgetPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const ForgetPassword = async (values) => {
    try {
      const response = await axios.post(
        "http://mytshop.runasp.net/api/Account/ForgotPassword",
        values
      );

      console.log(response);
      // إذا نجحت العملية انتقل لصفحة التحقق
      if (response.status === 200) {
        navigate("/verificationCode");
      }
    } catch (error) {
      console.error("Error in ForgetPassword:", error);
    }
  };

  return (
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
        className={`${style.Formcustom}`}
        onSubmit={handleSubmit(ForgetPassword)}
      >
        <div>
          <h2>Forgot Password </h2>
          <p>
            Please enter your phone number and we’ll send you a recovery code.
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

        <div>
          <Button fullWidth variant="outlined" type="submit">
            <Link to={"/verificationCode"}> Send Code </Link>
          </Button>
          <p>
            Remembered your password?<Link to={"/login"}>Login</Link>{" "}
          </p>
        </div>
      </Box>
    </Box>
  );
}
