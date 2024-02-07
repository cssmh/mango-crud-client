import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Mangoes from "../Component/Mangoes/Mangoes";
import Update from "../Component/Update/Update";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mangoes",
        element: <Mangoes></Mangoes>,
        loader: () => fetch("http://localhost:3000/mangos"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/update/${params.id}`),
      },
    ],
  },
]);

export default Root;
