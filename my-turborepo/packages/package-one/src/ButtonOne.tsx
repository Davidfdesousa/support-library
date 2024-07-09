"use client";

import { ReactNode } from "react";

export interface ButtonPropsOne {
  children: ReactNode;
  className?: string;
  appName: string;
  label: string
}

export const ButtonOne = ({ children, className, appName }: ButtonPropsOne) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app ONE!`)}
    >
      {children}
    </button>
  );
};
