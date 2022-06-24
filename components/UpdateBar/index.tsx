import React from "react";

const UpdateBar : React.FC<{}> = ({ children }) => {
    return (
        <div className="p-3 space-x-2 border-b border-0 border-[rgba(255,255,255,0.1)] bg-black w-screen flex justify-center items-center">
            { children }
        </div>
    )
}

export default UpdateBar;