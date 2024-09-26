import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./shared/utils/i18n";
import { store } from "./redux/app/store.ts";
import Loader from "./shared/reusable/Loader/index.tsx";
import { ToastProvider } from "./shared/reusable/Toast/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <ToastProvider>
            <App />
          </ToastProvider>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
