import { Button } from "@repo/ui/components/button";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@repo/ui/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button>Yousef Dawood</Button>
  </StrictMode>,
);
