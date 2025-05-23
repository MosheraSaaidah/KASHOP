import { RouterProvider } from "react-router";
import routes from "./routers";

export default function App() {
  return (
   <RouterProvider router={routes}/>
  )
}
