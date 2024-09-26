import { useEffect, useMemo, useRef, useState } from "react";
import { ToastContext } from "./ToastContext";

type ToastProps = {
  message: string;
  close: () => void;
};

function useTimeout(callbackFunction: () => void) {
  const savedCallback = useRef(callbackFunction);
  useEffect(() => {
    savedCallback.current = callbackFunction;
  }, [callbackFunction]);
  useEffect(() => {
    const functionId = setTimeout(() => {
      savedCallback.current();
    }, 3000);

    return () => clearTimeout(functionId);
  }, []);
}

const Toast = ({ message, close }: ToastProps) => {
  useTimeout(() => {
    close();
  });

  return (
    <div
      className="toast-animation | flex bg-white items-center max-w-xs p-2 mb-4 text-gray-500 rounded-lg shadow w-80 border"
      role="alert"
    >
      <div className="ms-3 text-lg font-normal">{message}</div>
      <button
        type="button"
        onClick={close}
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;

type ToastProviderProps = {
  children: React.ReactElement;
};

type ToastType = {
  id: number;
  message: string;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const openToast = (message: string) => {
    const newToast = {
      id: Date.now(),
      message: message,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const closeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    []
  );

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="fixed top-2 right-2 flex gap-2 z-[53]">
          {toasts &&
            toasts?.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  close={() => closeToast(toast.id)}
                  message={toast.message}
                />
              );
            })}
        </div>
      </ToastContext.Provider>
    </>
  );
}
