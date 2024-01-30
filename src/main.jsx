import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "@splidejs/splide/dist/css/splide.min.css";
import "./styles/globals.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.CLIENT_ID}
      // activeChain="avalanche-fuji"
      activeChain="avalanche"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
