import React from "react";
import clsx from "clsx";

interface EmbedIFrameProps extends React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>{
    src: string; 
}

const EmbedIFrame = ({ src, className, ...props } : EmbedIFrameProps, ref : React.LegacyRef<HTMLIFrameElement>) => {
    return (
        <iframe
            ref={ref}
            src={src}
            className={clsx('rounded-md', className)}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            { ...props }
        >
        </iframe>
    )
}

export default React.memo(React.forwardRef<HTMLIFrameElement, EmbedIFrameProps>(EmbedIFrame));