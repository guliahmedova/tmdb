import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

type OutsideWrapperT = {
  setDropdownVisibility: Dispatch<SetStateAction<boolean>>;
};

const OutsideWrapper = ({
  children,
  setDropdownVisibility,
}: PropsWithChildren<OutsideWrapperT>) => {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setDropdownVisibility(false);
    }
  };

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideWrapper;
