import { PageProvider, usePageContext } from '@/Contexts/PageContext';
import { Head, Link } from '@inertiajs/react';
import { Globals } from '@/Globals';
import { useState, useEffect } from 'react';
import LocaleDiv from '@/Components/LocaleDiv';
import PrimaryButton from '@/Components/PrimaryButton';
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

    return (
        <div>
            <div className="relative bg-cover bg-center bg-no-repeat h-screen text-white"
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
                                <h4 className='text-4xl  font-thin mb-4'>
                                    {
                                        locale == 'en' ?
                                            'Are you looking for a place for your next meal or do you want to list your restaurant so everyone can see it?' :
                                            translate['Are you looking for a place for your next meal or do you want to list your restaurant so everyone can see it?']
                                    }
                                </h4>
                                <p className='text-xl'>
                                    {
                                        locale == 'en' ?
                                            'You’re in the right place!'
                                            :

                                            translate['You’re in the right place!']
                                    }
                                </p>
                                <div>
                                    <button></button>
                                </div>


                            </div>
                            <div className="lg:px-16 flex flex-col md:flex-row gap-4 ">
                                <a href="">
                                    <PrimaryButton className='py-4 bg-transparent border bg-blue-500 '>

                                        {
                                            locale == 'en' ? 'Browse restaurants' : translate['Browse restaurants']
                                        }


                                    </PrimaryButton>

                                </a>
                                <a href={route('register')}>
                                    <PrimaryButton className='py-4 bg-transparent border bg-blue-500  '>

                                        {
                                            locale == 'en' ? 'Post your restaurant' : translate['Post your restaurant']
                                        }

                                    </PrimaryButton>
                                </a>
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
