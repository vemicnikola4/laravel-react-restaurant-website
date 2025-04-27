import { useState,useEffect } from "react";

const LocaleDiv = ({locale, onSetLocaleClick}) => {
   

    return (
        <div className='flex gap-2'>
            <div className={"w-4 h-4 p-4  flex justify-center items-center rounded-sm " + (locale == 'sr' ? 'bg-gray-100 font-bold text-blue-500 underline' : 'hover:cursor-pointer')} onClick={e => onSetLocaleClick('sr')} >
                sr
            </div>
            <div className={"w-4 h-4 p-4  flex justify-center items-center rounded-sm " + (locale == 'en' ? 'bg-gray-100 font-bold text-blue-500 underline' : 'hover:cursor-pointer')} onClick={e => onSetLocaleClick('en')}>
                en
            </div>
        </div>
    )

}

export default LocaleDiv;