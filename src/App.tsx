import { RouterProvider } from "react-router-dom";
import { mainApp } from "./router/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainApp} />
    </div>
  );
};

export default App;
