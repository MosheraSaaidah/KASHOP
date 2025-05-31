import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/index.js";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";

createRoot(document.getElementById("root")).render(
  // الملفات الي جوا الااب هي الي رح تقدر تشوف الثيم بروفايدر
  <ThemeProvider theme={theme}>
    {/* to reset defult margin in material */}
    <CssBaseline />
    <App />
  </ThemeProvider>
);
