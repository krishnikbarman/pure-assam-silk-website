import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.PROD ? "/pure-assam-silk-website" : "/"}>
    <App />
  </BrowserRouter>
);
