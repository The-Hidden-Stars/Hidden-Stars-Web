import clsx from "clsx";
import React, { CSSProperties } from "react";

interface IButtonProps<T extends React.ElementType = "div"> {
    as?: T,
    style?: CSSProperties,
    className?: string; 
    mode?: "primary" | "secondary",
    children?: React.ReactChild,
}

const Button = <T extends React.ElementType = "div">({ 
        as, 
        mode = "primary", 
        children, 
        className, 
        style, 
        ...props 
    } : IButtonProps<T> & React.ComponentPropsWithoutRef<T>) => {

    const Component = as || "div";

    return (
        <Component { ...props}>
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
                type="button" 
            >
                { children }
            </button>
        </Component>
    )
}

export default Button; 