import { createRoot } from "react-dom/client";
import App from "./App";

const containerElement = document.getElementById("root");
if (!containerElement) {
  throw new Error("div with `root` id not found on public `index.html`");
}

const root = createRoot(containerElement);
root.render(<App />);
