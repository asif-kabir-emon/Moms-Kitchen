import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routers } from "./Routes/Routers/Routers";

function App() {
  return (
    <div data-theme="light">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
