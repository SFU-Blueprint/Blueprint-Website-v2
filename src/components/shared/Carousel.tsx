import React from "react";

const Carousel = ({ children}) => {
    const childrenArray = React.Children.toArray(children);
    
    return (
        <div className="flex overflow-hidden bg-bp-lightest-grey ">
            <ul className="flex gap-6 animate-infinite-scroll">
                {[...childrenArray, ...childrenArray].map((child, index)=>(
                    <li key={index}>
                        <div className="w-24 h-14 rounded-md flex">
                            {child}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carousel;