import { createBrowserRouter } from "react-router";
import App from "./App";
import Phones from "./Components/Phones";
import Phone from "./Components/Phone";
import Form from "./Components/Form";

export const router = createBrowserRouter([
  {
    path: "/",
  Component: App,

    children:[
      {
      path: "/phones",
      Component: Phones,
      loader: ()=>fetch("http://localhost:3000/phones"),
    },{
      path:"/phone/:id",
      Component: Phone,
      loader:({params}) =>fetch(`http://localhost:3000/phones/${params.id}`)
    },{
      path:"/form",
      Component:Form,
    }
  ]
  },
  
]);