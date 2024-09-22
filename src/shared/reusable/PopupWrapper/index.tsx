import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface IPopupWrapper {
  children: ReactNode;
  isOpen: boolean;
}

const PopupWrapper = ({ children, isOpen }: IPopupWrapper) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const popupWrapper = document.getElementById("popup_wrapper") as HTMLElement;

  return (
    <>
      {createPortal(
        <div
          className={`fixed inset-0 bg-black/10 backdrop-grayscale z-[51] ${
            isOpen ? "flex" : "hidden"
          } flex-col justify-center items-center`}
        >
          {children}
        </div>,
        popupWrapper
      )}
    </>
  );
};

export default PopupWrapper;
