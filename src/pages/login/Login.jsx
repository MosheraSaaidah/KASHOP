import { Box, Button, InputAdornment, TextField } from "@mui/material";
import style from "./Login.module.css";
import {
  Apple,
  Email,
  FacebookOutlined,
  Google,
  Visibility,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router";
export default function Login() {
  const { register, handleSubmit } = useForm();

  const LoginUser = async (values) => {
    try {
      const response = await axios.post(
        "mytshop.runasp.net/api/Account/Login",
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed, please check your credentials.");
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
        className={`${style.Formcustom} `}
        onSubmit={handleSubmit(LoginUser)}
      >
        <div>
          <h2>Login </h2>
          <p>Good to see you again!</p>
        </div>

        <div className={`${style.buttons}`}>
          <Button variant="outlined" startIcon={<FacebookOutlined />}>
            FaceBook
          </Button>

          <Button variant="outlined" startIcon={<Google />}>
            Google
          </Button>

          <Button variant="outlined" startIcon={<Apple />}>
            Apple ID
          </Button>
        </div>

        <TextField
          label="Email"
          {...register("email")}
          type="email"
          sx={{ m: 1, width: "50ch" }}
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
          label="Password"
          {...register("password")}
          type="password"
          sx={{ m: 1, width: "50ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <Visibility />
                </InputAdornment>
              ),
            },
          }}
        />
        <span>
          <Link to={"/forgetPassword"}> Forget Password?</Link>{" "}
        </span>
        <div>
          <Button fullWidth variant="contained" type="submit">
            Login
          </Button>
          <p>
            {" "}
            Don’t Have an Account?<Link to={"/register"}>
              Create Account
            </Link>{" "}
          </p>
        </div>
      </Box>
    </Box>
  );
}
