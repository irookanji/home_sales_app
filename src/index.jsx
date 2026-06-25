import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./main-page";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
registerServiceWorker();
