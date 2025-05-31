import { Box, Button, InputAdornment, TextField } from "@mui/material";
import style from "./Register.module.css";
import PersonIcon from "@mui/icons-material/Person";
import { CalendarMonth, Email, Visibility } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const registerUser = async (values) => {
    const response = await axios.post(
      "http://mytshop.runasp.net/api/Account/register",
      values
    );

    console.log(response);
    console.log(values);
  };

  return (
    <>
       <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={"form"}
        className={`${style.Formcustom} `}
        onSubmit={handleSubmit(registerUser)}
      >
        <div className={``}>
          <h2>Create New Account</h2>
          <p>
            Join us to track orders, save favorites, and get special offers.
          </p>
        </div>

        <TextField
          label="First Name"
          {...register("firstName")}
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Last Name"
          {...register("lastName")}
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="User Name"
          {...register("userName")}
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }}
        />
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

        <TextField
          label="birth Of Date"
          variant="outlined"
          id="outlined-basic"
          {...register("birthOfDate")}
          type="date"
          sx={{ m: 1, width: "60ch" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonth />
                </InputAdornment>
              ),
            },
          }}
        />
        <div>
          <Button className={` `} fullWidth variant="contained" type="submit">
            Create New Account
          </Button>
          <p>
            {" "}
            Already have an Account?<Link to={"/login"}>Login</Link>{" "}
          </p>
        </div>
      </Box>
      </Box>
    </>
  );
}
