import { PageProvider, usePageContext } from '@/Contexts/PageContext';
import { Head, Link, usePage,router } from '@inertiajs/react';
import { Globals } from '@/Globals';
import { useState, useEffect } from 'react';
import LocaleDiv from '@/Components/LocaleDiv';
import PrimaryButton from '@/Components/PrimaryButton';
import Tag from '@/Components/Tag';
import CreateButton from '@/Components/CreateButton';
import InputError from '@/Components/InputError';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const [locale, setLocale] = useState();
    const errors = usePage().props.errors;
    const user = usePage().props.auth.user;

    const [values,setValues]=useState({
        title:'',
        city:'Ada',
        theme:'light',
        fontFamily:'font-sans',
        tags:[],
        userId :user.id,

    });
    const [frontErrors, setFrontErrors] = useState({
        title:'',
        city:'',
        tags:''
    });

    const onSetLocaleClick = (value) => {
        setLocale(value);
        localStorage.setItem('locale', value);
    }
    useEffect(() => {
        if (localStorage.getItem('locale')) {
            setLocale(localStorage.getItem('locale'));
        } else {
            setLocale('sr');

        }

    }, []);
    const translate = Globals.translate;
    const cities = Globals.cities;
    const tagsEn = Globals.tagsEn;
    const tagsSr = Globals.tagsSr;
    const titleValidation = Globals.titleValidation;
    const cityValidation = Globals.cityValidation;
    const tagsValidation = Globals.tagsValidation;

    const [selectedTags, setSelectedTags] = useState([]);


    const addTag = (value) => {

        setSelectedTags([...selectedTags, value]);

    }
    const removeTag = (value) => {

        setSelectedTags((prevTags) => {
            return prevTags.filter((element) => element !== value);
        });
    }
    const onTagClicked = (value) => {
        let s = selectedTags;
        if (s.includes(value)) {
            removeTag(value);
        } else {
            addTag(value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errTitle = '';
        let errCity = '';
        let errTags = '';
       
        if ( !titleValidation(values.title)){
            errTitle = 'The value must be a non-empty string.';
        }else{
            errTitle = '';

        }
        if ( !cityValidation(values.city)){
            errCity= "The entered city is not on the list of allowed cities.";
        }else{
            errCity= "";


        }
        if ( !tagsValidation(values.tags)){
            errTags= "Selected tags are not valid.";
        }else{
            errTags= "";

        }
        setFrontErrors({
            title: errTitle,
            city: errCity,
            tags:errTags
        })
        if ( errTitle == '' && errCity == '' && errTags == ''){
            router.post('/store', values);
        }



    }

    useEffect(()=>{
        setValues({...values,tags:selectedTags});
    },[selectedTags]);
    return (
        <div>
            <div className="relative bg-cover bg-center bg-no-repeat min:h-screen text-white"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2022/06/23/17/13/ball-7280265_1280.jpg')" }}>

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className=" w-full h-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid gap-2 py-6 grid-cols-2 absolute top-0 left-0 right-10 ">
                            <div className="flex justify-start ps-4">
                                <LocaleDiv locale={locale} onSetLocaleClick={onSetLocaleClick} />
                            </div>
                            <div className="flex justify-end">
                                <nav className="-mx-3 flex flex-1 justify-end">

                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            {locale == 'en' ? 'Dashboard' : translate['Dashboard']}
                                        </Link>
                                    ) : (
                                        <>

                                            <Link
                                                href={route('login')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                {locale == 'en' ? 'Log in' : translate['Log in']}

                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                {locale == 'en' ? 'Register' : translate['Register']}

                                            </Link>
                                        </>
                                    )}
                                </nav>
                            </div>

                        </header>

                        <main className="mt-12">
                            <div className='relative z-10 flex flex-col gap-8 items-start justify-start h-full ps-4 lg:px-16   lg:text-2xl'>
                                <form className="flex flex-col w-full gap-2 items-center" action="" onSubmit={e => handleSubmit(e)}>
                                    <div className="py-4 w-full flex flex-col gap-4">
                                        <label htmlFor="vity" className='text-md md:text-xl'>{locale == 'en' ? 'Restaurant title' : translate['Restaurant title']}</label>
                                        <input type="text" name="" id="" className="p-4 text-gray-700  text-center focus:outline-none text-lg md:text-4xl focus:border-gray-500 focus:ring-1 focus:ring-gray-700 rounded-md focus:rounded-md w-full " placeholder={locale == 'en' ? 'Type Restaurant Title' : translate['Type Restaurant Title']} onChange={e => setValues({ ...values, title: e.target.value })} />
                                    </div>
                                    <InputError message={locale == 'en' ? frontErrors.title : translate[frontErrors.title]}>
                                    </InputError>
                                    
                                    {
                                        errors['title'] &&
                                        <div className="text-red-500 ps-2 py-4">{
                                            locale == 'en' ? errors['title'] : translate[errors['title']]
                                        }</div>
                                    }
                                    <div className=" w-full flex flex-col gap-4 ">
                                        <label className='text-md md:text-xl' htmlFor="vity">{locale == 'en' ? 'Choose city' : translate['Choose city']}</label>
                                        <select className="rounded-md w-full  text-gray-700 " name="city" id="" onChange={e => setValues({ ...values, city: e.target.value })}>
                                            {cities.map((city, ind) => (
                                                <option key={ind} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <InputError message={locale == 'en' ? frontErrors.city : translate[frontErrors.city]}>
                                    </InputError>

                                    {
                                        errors['city'] &&
                                        <div className="text-red-500 ps-2 py-4">{
                                            locale == 'en' ? errors['city'] : translate[errors['city']]
                                        }</div>
                                    }

                                    <div className="py-4 grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 w-full">
                                        {locale == 'en' ?
                                            tagsEn.map((tag, ind) => (<Tag key={ind} value={tag} title={tag} onTagClicked={onTagClicked} />))
                                            :
                                            tagsEn.map((tag, ind) => (<Tag key={ind} value={tag} title={translate[tag]} onTagClicked={onTagClicked} />))
                                        }

                                    </div>
                                    <InputError message={locale == 'en' ? frontErrors.tags : translate[frontErrors.tags]}>
                                    </InputError>

                                    {
                                        errors['tags'] &&
                                        <div className="text-red-500 ps-2 py-4">{
                                            locale == 'en' ? errors['tags'] : translate[errors['tags']]
                                        }</div>
                                    }
                                    <CreateButton>
                                        {locale == 'en' ? 'CREATE' : translate['CREATE']}
                                    </CreateButton>

                                </form>
                            </div>

                        </main>


                        <footer className=" flex justify-center items-center py-16 text-center text-sm text-black dark:text-white/70  ">

                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
