import { useEffect, useState } from "react"


export default function SideBarFeald(locale,frontError,bgError,value,setContactInfo){

    const[modal,setModal] = useState(value || '');

    // useEffect(
    //     setContactInfo({...contactInfo})
    // )
    return <div>
        <div className="text-sm  flex w-full px-2 flex  " >
                        {locale == 'en' ? 'Phone number feald' : 'Polje za broj telefona'}

                    </div>
                    <div className="flex w-full  h-10 px-2 ">
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                        </div>
                        <span className="px-1">*</span>
                        <input type="text" value={modal} onChange={e => setModal(e.target.value)} className={"w-full   rounded-md "} placeholder={locale == 'en' ? "Paste phone number" : translate["Paste phone number"]} />
                        <div className="px-2 bg-gray-400 flex justify-center items-center rounded-md ms-1 ">
                            x
                        </div>


                    </div>
                    {
                        bgError &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgError : translate[bgError]
                        }</div>
                    }
                    {

                        frontError &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontError : translate[frontError]
                        }</div>
                    }
    </div>
}