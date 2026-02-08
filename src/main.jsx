import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18n";

// In Vite, public/ assets are served at the root URL.
// Use a Proxy so any filename key returns the correct public path.
const headshots = new Proxy(
  {},
  {
    get(_target, prop) {
      if (typeof prop === "string") {
        return `/images/about/team-headshots/${prop}`;
      }
    },
  }
);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export { headshots };
