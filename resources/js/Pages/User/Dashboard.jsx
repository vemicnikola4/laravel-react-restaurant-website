import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePageContext } from '@/Contexts/PageContext';
import SideBar from './Partials/SideBar';
import { useEffect, useState } from 'react';
import Hero from './Partials/Hero';
import HamburgerButton from '@/Components/HamburgerButton';
export default function Dashboard({ page }) {
    const { locale, setLocale, translate, fontFamily, theme, styling, isMobileMenuOpen,setIsMobileMenuOpen } = usePageContext();
    const [isOpen, setIsOpen] = useState(false);
    const [showMobileSideBar, setShowMobileSedeBar] = useState(false);
    const hero = {
        title: 'Hero title',
        subtitle: 'Hero subtitle',
        media: 'https://cdn.pixabay.com/photo/2018/03/07/17/15/chinese-lanterns-3206530_1280.jpg'
    }

    useEffect(() => {
        setIsMobileMenuOpen(false);

    }, []);

    return (
        <div className={fontFamily + " " + styling.mainDiv[theme]}>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {locale == 'en' ? 'Dashboard' : translate['Dashboard']}
                    </h2>
                }
            >
                <div className={"flex min-h-screen relative m-0 "} >
                    <Head title="Dashboard" />
                    {/* toggle side menu mobile button */}
                    <HamburgerButton className={'  absolute top-2 left-4 z-50  ' + styling.hamburgerButton[theme] } fcn={showMobileSideBar} setFcn={setShowMobileSedeBar} />
                    {showMobileSideBar && 
                        <div className={'md:hidden absolute top-0 bottom-0 left-0 right-0 shadow-[2px_0_10px_rgba(0,0,0,0.3)] z-20'}>
                            <SideBar />
                        </div>
                    }
                    <div className="hidden md:flex basis-1/4 shadow-[2px_0_10px_rgba(0,0,0,0.3)] ">
                        <SideBar />

                    </div>
                    <div className="flex flex-col w-full relative md:basis-3/4">
                        <Hero hero={hero} />
                    </div>
                </div>

            </AuthenticatedLayout>
        </div>

    );
}
