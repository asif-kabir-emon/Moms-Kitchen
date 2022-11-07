import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routers } from "./Routes/Routers/Routers";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
