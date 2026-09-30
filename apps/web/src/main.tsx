import Container from "@repo/ui/components/container";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container />
  </StrictMode>,
);
