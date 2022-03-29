import clsx from "clsx";
import React, { CSSProperties, HTMLProps } from "react";

interface IButtonProps extends HTMLProps<HTMLButtonElement>{
    style?: CSSProperties,
    className?: string; 
    mode?: "primary" | "secondary"
}

const Button : React.FC<IButtonProps> = ({ mode = "primary", children, className, style, ...props }) => {
    return (
        <button 
            style={style}
            className={clsx(
                `text-white ${
                     mode === "primary" ? 
                        "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:ring-blue-300" :
                        "bg-gray-400 focus:ring-gray-600 hover:bg-gray-500"
                } focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 `, 
                !!className && className
            )}       
            { ...props}
            type="button" 
        >
            { children }
        </button>
    )
}

export default Button; 