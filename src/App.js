import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Routers } from "./Routes/Routers/Routers";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={Routers}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
