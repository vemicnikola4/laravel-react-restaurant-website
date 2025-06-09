import { useState,useEffect } from "react";
import { usePageContext } from "@/Contexts/PageContext";

export default function HamburgerButton({
    className = '',
    fcn,setFcn
}) {


    const toggleButton = () => {
        setFcn(!fcn);
    };

    return <div className={className + ' md:hidden flex items-center justify-center rounded-sm p-1 '}>
        <button
            onClick={toggleButton}
            className=" text-gray-700 focus:outline-none   "
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {fcn ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
            </svg>
        </button>
    </div>
}