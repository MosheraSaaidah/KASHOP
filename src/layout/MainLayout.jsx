import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Container } from "@mui/material";

export default function MainLayout() {
  return (
    <>
      {/* Navbar ,Footer  أنا بهاي الحالة بحكيله النافبار والفوتر رح يكونوا ثابتين  المين لي اوت  */}
      {/* Outlet   حسب مين نادي على المين لي اوت رح تنحط القيمة فيه    (متغييير ) */}
      <Navbar />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}
