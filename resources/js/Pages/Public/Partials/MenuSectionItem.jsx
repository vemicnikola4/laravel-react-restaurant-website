import { useState, useEffect } from "react";


const MenuSectionItem = ({ item }) => {

    const [modal, setModal] = useState(item)


    return (
        <div className={"min-w-[250px] max-w-[250px] block bg-gray-100 text-gray-900  rounded-md min-h-[350px] pb-6 relative"}>

            <div className="w-full">
                <img src={modal.image} alt="" className="w-full object-cover  rounded-t-md h-48" />
            </div>
            <div className="flex flex-col items-center py-6 ">
                <div className="flex justify-center  w-full">
                    <div className="flex flex-col gap-1 items-center border-b-2 ">
                        <div>
                            <h2 className="font-bold text-2xl text-center ">
                                {modal.name}

                            </h2>
                        </div>

                    </div>


                </div>


                <div className="my-4 px-4 flex justify-center items-center text-center  w-full ">
                    {modal.description}
                </div>

                <div className="flex justify-center">
                    <div>
                        <p className=" text-center border-b-2 font-bold " >
                            {modal.price} RSD
                        </p>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default MenuSectionItem;