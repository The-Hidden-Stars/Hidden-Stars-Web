import clsx from "clsx";
import React from "react";
import UpdateBarStyles from "./styles.module.css";

const UpdateBar : React.FC<{}> = ({ children }) => {
    return (
        <div className={clsx(
            UpdateBarStyles.container, 
            "relative p-3 space-x-2 border-b border-0 border-[rgba(255,255,255,0.1)] w-screen flex justify-center items-center"
        )}>
            { children }
        </div>
    )
}

export default UpdateBar;