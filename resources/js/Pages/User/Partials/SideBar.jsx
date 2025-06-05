import { usePageContext } from "@/Contexts/PageContext";
import { useState } from "react";


const SideBar = () => {
    const [pageSetingsShow, setPageSetingsShow] = useState(true);
    const { locale, translate, theme, setTheme,styling,fontFamily,setFontFamily} = usePageContext();
    const[showSideBar,setShowBar] = useState(false);

    
    return <div className={"flex flex-col w-full h-full pt-16 px-4 z-50 " + styling.sideBar.main[theme]}>
        <h1 className="text-lg md:text-xl py-2 ">
            {locale == 'en' ? 'Page Settings': translate['Page Settings']}
            
        </h1>
        <div className="w-full flex gap-1">
                    {
                        locale == 'en' ?
                            <select id="selectThemeInput" className={"w-full p-2 rounded-md " + styling.sideBar.input[theme] }
                                name="chooseTheme" onChange={e => setTheme(e.target.value)}>


                                <option value="">choose theme</option>
                                <option value="light">light</option>
                                <option value="dark">dark</option>
                                {/* <option value="blue">blue</option>
                                <option value="red">red</option>
                                <option value="purple">purple</option>
                                <option value="yellow">yellow</option>
                                <option value="green">green</option> */}
                            </select>

                            :
                            <select id="selectThemeInput" className={"w-full p-2 rounded-md " + styling.sideBar.input[theme]}
                                name="chooseTheme" onChange={e => setTheme(e.target.value)}>

                                <option value="">izaberite temu</option>
                                <option value="light">svetla</option>
                                <option value="dark">tamna</option>
                                {/* <option value="blue">plava</option>
                                <option value="red">crvena</option>
                                <option value="purple">ljubičasta</option>
                                <option value="yellow">žuta</option>
                                <option value="green">zelena</option> */}

                            </select>

                    }

                    {
                        locale == 'en' ?
                            <select id="selectFontInput" className={'w-full p-2 rounded-md ' + styling.sideBar.input[theme]}
                                name="chooseTheme" onChange={e => setFontFamily(e.target.value)} >


                                <option value="">choose font</option>
                                <option value="font-sans">sans</option>
                                <option value="font-serif">serif</option>
                                <option value="font-mono">mono</option>
                            </select>

                            :
                            <select id="selectFontInput" className={'w-full p-2 rounded-md ' + styling.sideBar.input[theme]}
                                name="chooseTheme" onChange={e => setFontFamily(e.target.value)} >


                                <option value="">izaberite font</option>
                                <option value="font-sans">sans</option>
                                <option value="font-serif">serif</option>
                                <option value="font-mono">mono</option>
                            </select>


                    } 


                </div>
        
    </div>
}

export default SideBar;