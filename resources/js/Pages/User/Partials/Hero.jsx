import CreateButton from "@/Components/CreateButton";
import HamburgerButton from "@/Components/HamburgerButton";
import InputError from "@/Components/InputError";
import { usePageContext } from "@/Contexts/PageContext";
import { useState } from "react";

export default function Hero() {

    const [hero, setHero] = useState({
        title: '',
        subtitle: '',
        media: '',
        textBoxPosition:'left'
    })
    const { locale, setLocale, translate, fontFamily, theme, styling, positioning,isMobileMenuOpen, validateTitle,validateDescription,validateImage } = usePageContext();
    const [navBarPosition, setNavBarPosition] = useState('center');
    const[showMobileMenu,setShowMobileMenu] = useState(false);
    const [frontErrors, setFrontErrors] = useState({
        title: '',
        subtitle: '',
        media: '',
        textBoxPosition:''
    });
  
    const submitHero = (e) => {
        let tError = '';
        let sError = '';
        let mError = '';
        let tBPError = '';
        const allowedPosition = ['center', 'left', 'right'];
        if ( !allowedPosition.includes(hero.textBoxPosition) ){
            tBPError = 'Value not valid!';
        }else{
            tBPError = '';
        }

        tError = validateTitle(hero.title);
        sError =validateDescription(hero.subtitle);
        mError =validateImage(hero.media);

        
        setFrontErrors({
            title: tError,
            subtitle: sError,
            media: mError,
            textBoxPosition:tBPError,


        })
        if (tError == '' && sError == '' && mError == '' && tBPError == '') {
            console.log('Submited');

            // handleSubmitHero(e);
        } else {
            console.log(frontErrors);
        }

    }
    

    return <div className="min-h-screen w-full relative flex flex-col gap-2 justify-center items-center  " >
        <img src={'https://cdn.pixabay.com/photo/2021/04/24/18/07/road-6204694_1280.jpg'} alt="" className="w-full h-full object-cover bg-center absolute bottom-0 " />
        <div id="navBar" className={"flex flex-col gap-4  absolute top-0  w-full py-6 items-start ps-16 " + styling.hero.navBar[theme] + positioning.hero.navBar[navBarPosition]}>
            <div className="flex py-2">
                {/* descktop nav */}
                <nav className="hidden md:flex space-x-8  font-medium">
                    <a onClick={() => scrollToSection("about")} className=" hover:cursor-pointer">{locale == 'en' ? 'About Us' : translate['About Us']}</a>
                    <a onClick={() => scrollToSection("menu")} className=" hover:cursor-pointer">{locale == 'en' ? 'Menu' : translate['Menu']}</a>
                    <a onClick={() => scrollToSection("location")} className=" hover:cursor-pointer">{locale == 'en' ? 'Location' : translate['Location']}</a>
                    <a
                        href="https://wolt.com/sr/srb/belgrade/restaurant/giros-kod-talinog-tome?srsltid=AfmBOorq6ihDxvFWRydRms-W4XiAA-DQTbd7L224H8GSyRZBOyZTYGN3"
                        className=""
                    >
                        {locale == 'en' ? 'Online order' : translate['Online order']}
                    </a>
                </nav>
                <HamburgerButton className={'  absolute top-2 left-16 z-50  ' + styling.hamburgerButton[theme] } fcn={showMobileMenu} setFcn={setShowMobileMenu}/>
                {/* mobile nav */}
                {
                    showMobileMenu &&
                    <div className="md:hidden flex flex-col gap-2 items-start-ps-2 py-2 mt-4">
                        <a onClick={() => scrollToSection("about")} className=" hover:cursor-pointer">{locale == 'en' ? 'About Us' : translate['About Us']}</a>
                        <a onClick={() => scrollToSection("menu")} className=" hover:cursor-pointer">{locale == 'en' ? 'Menu' : translate['Menu']}</a>
                        <a onClick={() => scrollToSection("location")} className=" hover:cursor-pointer">{locale == 'en' ? 'Location' : translate['Location']}</a>
                        <a
                            href="https://wolt.com/sr/srb/belgrade/restaurant/giros-kod-talinog-tome?srsltid=AfmBOorq6ihDxvFWRydRms-W4XiAA-DQTbd7L224H8GSyRZBOyZTYGN3"
                            className=""
                        >
                            {locale == 'en' ? 'Online order' : translate['Online order']}
                        </a>
                    </div>
                }

            </div>

            <select className={styling.hero.select[theme] + ' hidden md:flex '} name="menuPosition" id="" onChange={e => setNavBarPosition(e.target.value)}>
                <option value="">{locale == 'en' ? 'Choose menu position' : translate['Choose menu position']}</option>
                <option value="center">{locale == 'en' ? 'center' : translate['center']}</option>
                <option value="left">{locale == 'en' ? 'left' : translate['left']}</option>
                <option value="right">{locale == 'en' ? 'right' : translate['right']}</option>
            </select>

        </div>
        <div className={"flex flex-col gap-4 rounded-sm  justify-center items-center md:w-2/3 z-10 " + styling.hero.titleSubTitleDiv.main[theme]}>
            <h3 className=" py-2 text-xl md:text-2xl " >
                {locale == 'en' ? 'Change background image' : translate['Change background image']}
            </h3>
            <input className={"py-2 flex justify-center " + styling.hero.titleSubTitleDiv.input[theme]} type="file" name="bgImage" id="bgImage" onChange={e => setHero({ ...hero, media: e.target.files[0] })} />
            <InputError message={locale == 'en' ? frontErrors.media : translate[frontErrors.media]} />

        </div>
        <div id="titleSubtitleDiv" className={"z-10  flex flex-col gap-4 py-8 p-4 w-full  md:w-2/3 rounded-sm shadow-[2px_0_10px_rgba(0,0,0,0.3)] " + styling.hero.titleSubTitleDiv.main[theme] + " " + positioning.hero.titleSubtitleDiv[hero.textBoxPosition]}>
            <h1 className={" font-bold w-full "}>
                <input className={"text-md sm:text-2xl md:text-4xl ps-2 rounded-sm w-full " + styling.hero.titleSubTitleDiv.input[theme] + " " + positioning.hero.titleSubtitleDiv.title[hero.textBoxPosition]} type="text" placeholder={locale == 'en' ? "Enter title" : translate["Enter title"]} value={hero.title} onChange={e => setHero({ ...hero, title: e.target.value })} />
            </h1>
            <InputError message={locale == 'en' ? frontErrors.title : translate[frontErrors.title]} />


            <h3>
                <textarea className={"text-md sm:text-xl md:text-2xl ps-2 rounded-sm w-full " + styling.hero.titleSubTitleDiv.textArea[theme] + " " + positioning.hero.titleSubtitleDiv.title[hero.textBoxPosition]} type="text" placeholder={locale == 'en' ? "Enter description" : translate["Enter description"]} value={hero.subtitle} onChange={e => setHero({ ...hero, subtitle: e.target.value })}></textarea>
            </h3>
            <InputError message={locale == 'en' ? frontErrors.subtitle : translate[frontErrors.subtitle]} />


            <select className={styling.hero.select[theme]} name="menuPosition" value={hero.textBoxPosition || ''}id="" onChange={e => setHero({...hero,textBoxPosition:e.target.value})}>
                <option value="">{locale == 'en' ? 'Choose box position' : translate['Choose box position']}</option>
                <option value="center">{locale == 'en' ? 'center' : translate['center']}</option>
                <option value="left">{locale == 'en' ? 'left' : translate['left']}</option>
                <option value="right">{locale == 'en' ? 'right' : translate['right']}</option>
            </select>
            <InputError message={locale == 'en' ? frontErrors.textBoxPosition : translate[frontErrors.textBoxPosition]} />

        </div>
        <div className="w-full absolute bottom-0 flex justify-center md:justify-end md:pe-4 pb-4 ">
            <CreateButton event={submitHero}>
                {locale == 'en' ? 'CREATE' : translate['CREATE']}
            </CreateButton>
        </div>

    </div >
}