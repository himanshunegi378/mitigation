import { startTransition, useEffect, useState } from "react";

export const Delay = ({ children, wait = 16 }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) return;
    const timeout = setTimeout(() => {
      startTransition(() => {
        setShow(true);
      });
    }, wait);
    return () => clearTimeout(timeout);
  }, [wait, show]);

  // if children is an array wrap them in Delay with increment of +5 wait time
  if (Array.isArray(children)) {
    return children.map((child, index) => {
      return (
        <Delay key={index} wait={wait + index * 5}>
          {child}
        </Delay>
      );
    });
  }
  // if children is a function return a function that returns a Delay
  if (typeof children === "function") {
    return <Delay wait={wait}>{children()}</Delay>;
  }
  // if children is a string return a Delay
  return show ? children : null;
};
