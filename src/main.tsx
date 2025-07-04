import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Index.css";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
);
