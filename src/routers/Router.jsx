import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Login } from "../components";
import Home from "../pages/Home";
import { AddTask, Dashboard } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}>
        <Route index element={<Dashboard />} />{" "}
        {/* Default child route for /home */}
        <Route path="addtask" element={<AddTask />} /> {/* Relative path */}
      </Route>
    </>
  )
);

export default router;
