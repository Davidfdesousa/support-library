import { ReactNode } from "react";
import 'button-style.css';
interface ButtonProps {
    children: ReactNode;
    className?: string;
    appName: string;
}
export declare const Button: ({ children, className, appName }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
