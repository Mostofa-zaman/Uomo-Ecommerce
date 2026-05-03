
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SmoothScroll from "./component/common/SmoothScroll";

createRoot(document.getElementById("root")).render(

    <SmoothScroll>
      <App />
    </SmoothScroll>

);
