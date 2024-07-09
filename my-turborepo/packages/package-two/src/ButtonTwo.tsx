"use client";

import { ReactNode } from "react";

export interface ButtonPropsTwo {
  children: ReactNode;
  className?: string;
  appName: string;
  label: string
}

export const ButtonTwo = ({ children, className, appName }: ButtonPropsTwo) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app TWO!`)}
    >
      {children}
    </button>
  );
};
