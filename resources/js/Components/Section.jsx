import { Children } from "react";





export default function Section ({children,className}){



    return (
        <div className={"flex w-full py-12 px-4 " + className}>
            {children}
        </div>
    )
}