import { useEffect, useState } from "react";
import { usePageContext } from "@/Contexts/PageContext";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import CreateButton from "@/Components/CreateButton";
import InputError from "@/Components/InputError";

export default function AboutUs() {

    const [aboutUs, setAboutUs] = useState({
        title: '',
        description: '',
        media: '',
    });
    const [hasImage, setHasImage] = useState(true);
    const [seeInstructions,setSeeInstructions] = useState(false);
    const [frontErrors, setFrontErrors] = useState({
        title: '',
        description: '',
        media: '',
    })
    const { locale, setLocale, translate, fontFamily, theme, styling, positioning, isMobileMenuOpen, isString } = usePageContext();

    const mainDivOnClick = ()=>{
        if ( seeInstructions ){
            setSeeInstructions(false);
        }
    }
    const submitAboutUs = () => {
        let tError = '';
        let dError = '';
        let mError = '';

        if (!isString(aboutUs.title)) {
            tError = 'The title field must be a string.';

        } else if (aboutUs.title.length < 2) {
            tError = 'The title field must be at least 2 characters.';
        } else {
            tError = '';

        }
        if (!isString(aboutUs.description)) {
            dError = 'The description field must be a string.';

        } else if (aboutUs.description.length < 5) {
            dError = "The description field must be at least 5 characters.";
        } else {
            dError = '';

        }
        if (hasImage) {
            const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];


            if (aboutUs.media instanceof File) { // Check if it is an instance of File
                if (!allowedImageTypes.includes(aboutUs.media.type)) {
                    mError = 'Extentions allowed:jpg,jpeg,png,gif,webp.';
                }else{
                    mError = '';
                }
            } else {
                mError = 'The media field must be an image.';

            }
        }else{
            mError = '';
        }
        setFrontErrors({
            title: tError,
            description: dError,
            media: mError,


        })
        if (tError == '' && dError == '' && mError == '' ) {
            console.log(aboutUs);

        } else {
            console.log(aboutUs);
        }


    }
    useEffect(()=>{
        if ( !hasImage){
          setAboutUs({...aboutUs,media:''});  
        }
    },[hasImage]);

    return <div className={"flex flex-col py-6 px-4  h-fit  relative " + styling.aboutUs[theme]} onClick={e=>mainDivOnClick()}>
        <div className={seeInstructions ? '  absolute left-2 w-full md:w-2/3  bg-gray-100 rounded-sm  p-2 text-gray-700 text-sm md:text-lg z-10 ' : '  hidden '}>
            {locale == 'en' ? "This section is the About Us section. Enter a title, for example: About Us, Welcome on behalf of the business, etc. Enter a description with some basic information you'd like to highlight about your business. You can also choose whether or not to include an image in this section." : translate["This section is the About Us section. Enter a title, for example: About Us, Welcome on behalf of the business, etc. Enter a description with some basic information you'd like to highlight about your business. You can also choose whether or not to include an image in this section."]}
        </div>
        {
            hasImage ?

                <div className="flex flex-col w-full ">
                    <div className=" flex w-full justify-center md:justify-start gap-2 ">
                        <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => setHasImage(!hasImage)}>
                            {locale == 'en' ? 'With no image' : translate['With no image']}
                        </PrimaryButton>
                        <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => setSeeInstructions(!seeInstructions)}>
                            {locale == 'en' ? 'Click for instruction' : translate['Click for instruction']}
                        </PrimaryButton>
                    </div>
                    <div className="flex flex-col md:flex-row ">
                        <div className="p-4 flex md:basis-1/2 w-full  md:flex flex-col gap-2 ">
                            <TextInput placeholder={locale == 'en' ? 'Enter title' : translate['Enter title']} className={styling.input[theme] + " "} onChange={e =>setAboutUs({...aboutUs,title:e.target.value})} type='text' />
                            <InputError message={locale == 'en' ? frontErrors.title : translate[frontErrors.title]} />
                                
                            <textarea placeholder={locale == 'en' ? 'Enter description' : translate['Enter description']} className={styling.input[theme] + ' focus:border-indigo-500 focus:ring-indigo-500 rounded-sm  w-full  h-48 md:h-96 flex justify-start items-start ps-2 md:pe-6 text-md md:text-xl '} onChange={e =>setAboutUs({...aboutUs,description:e.target.value})}>

                            </textarea>
                            <InputError message={locale == 'en' ? frontErrors.description : translate[frontErrors.description]} />
                            
                        </div>
                        <div className="flex flex-col md:basis-1/2">
                            <div className="flex w-full h-96 md:h-full relative justify-center items-center ">
                                <img src='https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg' alt="" className="w-full h-full object-cover bg-center  absolute bottom-0 left-0 opacity-70  rounded-sm" />
                                <input
                                    className={" z-10 px-2 rounded-lg w-full focus:outline-none"} type="file" name="" 
                                    onChange={e =>setAboutUs({...aboutUs,media:e.target.files[0]})}
                                />

                            </div>
                        <InputError message={locale == 'en' ? frontErrors.media : translate[frontErrors.media]} />

                        </div>
                        
                        
                    </div>

                </div>

                :
                <div className="flex w-full flex-col w-full">
                    <div className=" flex w-full justify-center md:justify-start gap-2 ">
                        <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => setHasImage(!hasImage)}>
                            {locale == 'en' ? 'With image' : translate['With image']}
                        </PrimaryButton>
                         <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => setSeeInstructions(!seeInstructions)}>
                            {locale == 'en' ? 'Click for instruction' : translate['Click for instruction']}
                        </PrimaryButton>
                    </div>
                    <div className=" flex w-full justify-center  ">
                        <div className="p-4 flex md:basis-1/2 w-full  md:flex flex-col gap-2 ">
                            <TextInput placeholder={locale == 'en' ? 'Enter title' : translate['Enter title']} className={styling.input[theme] + " "} onChange={e =>setAboutUs({...aboutUs,title:e.target.value})}  type='text' />
                            <InputError message={locale == 'en' ? frontErrors.title : translate[frontErrors.title]} />

                            <textarea placeholder={locale == 'en' ? 'Enter description' : translate['Enter description']} className={styling.input[theme] + ' focus:border-indigo-500 focus:ring-indigo-500 rounded-sm w-full  h-48 md:h-96 flex justify-start items-start ps-2 md:pe-6 text-md md:text-xl '} onChange={e =>setAboutUs({...aboutUs,description:e.target.value})} >

                            </textarea>
                            <InputError message={locale == 'en' ? frontErrors.description : translate[frontErrors.description]} />

                        </div>
                    </div>


                </div>
        }
        <div className="w-full  flex justify-center md:justify-end md:pe-4 p-4 ">
            <CreateButton event={submitAboutUs}>
                {locale == 'en' ? 'CREATE' : translate['CREATE']}
            </CreateButton>
        </div>
    </div>
}