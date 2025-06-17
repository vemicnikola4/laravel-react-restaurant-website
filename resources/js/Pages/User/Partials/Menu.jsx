import { usePageContext } from "@/Contexts/PageContext";
import PrimaryButton from "@/Components/PrimaryButton";
import { useEffect, useState } from "react";
import MenuSectionImg from "./MenuSectionImg";
import MenuSectionNoImg from "./MenuSectionNoImg";
import { v4 as uuidv4 } from "uuid";
import CreateButton from "@/Components/CreateButton";

export default function Menu() {

    const [menu, setMenu] = useState([]);
    const { locale, translate, theme, styling, validateTitle, validateDescription, validateImage, validatePrice } = usePageContext();
    const [seeInstructions, setSeeInstructions] = useState(false);
    const [frontErrors, setFrontErrors] = useState({
        sectionTitleErrors: [],
        itemTitleErrors: [],
        itemDescriptionErrors: [],
        itemPriceErrors: [],
        itemMediaErrors: [],
    });
    const [hasErrors, setHasErrors] = useState(false);
    const mainDivOnClick = () => {
        if (seeInstructions) {
            setSeeInstructions(false);
        }
    }
    const addImgSection = () => {
        const newSection = {
            id: uuidv4(),
            type: 'img',
            title: '',
            items: [
                {
                    id: uuidv4(),
                    media: '',
                    itemTitle: '',
                    itemDescription: '',
                    itemPrice: 0,
                }
            ],
            note: '',
        }
        setMenu([...menu, newSection]);
    }
    const addNoImgSection = () => {
        const newSection = {
            id: uuidv4(),
            type: 'noImg',
            title: '',
            items: [
                {
                    id: uuidv4(),
                    itemTitle: '',
                    itemDescription: '',
                    itemPrice: 0,
                }
            ],
            note: '',
        }
        setMenu([...menu, newSection]);
    }
    const deliteMenuSection = (id) => {
        setMenu((prevItems) => {
            return prevItems.filter(item => item.id !== id);

        });



    }
    const updateMenu = (modal) => {
        let newSections = [];

        for (let i = 0; i < menu.length; i++) {
            if (menu[i].id !== modal.id) {
                newSections.push(menu[i]);
            } else {
                let modalItems = [];
                for (let i = 0; i < modal.items.length; i++) {
                    if (modal.items[i]) {
                        modalItems.push(modal.items[i]);
                    }
                }
                modal.items = modalItems;
                newSections.push(modal);
            }
        }

        setMenu(newSections);

    }
    const submitMenu = () => {
        let sectionTitleErrors = [];
        let itemTitleErrors = [];
        let itemDescriptionErrors = [];
        let itemPriceErrors = [];
        let itemMediaErrors = [];
        menu.forEach((section) => {
            sectionTitleErrors.push({ id: section.id, error: validateTitle(section.title) });

            section.items.forEach((item) => {
                itemTitleErrors.push({ id: item.id, error: validateTitle(item.itemTitle) });
                itemDescriptionErrors.push({ id: item.id, error: validateDescription(item.itemDescription) });
                itemPriceErrors.push({ id: item.id, error: validatePrice(item.itemPrice) });
                if (section.type == 'img') {
                    itemMediaErrors.push({ id: item.id, error: validateImage(item.media) });

                }

            });
            setFrontErrors({
                sectionTitleErrors: sectionTitleErrors,
                itemTitleErrors: itemTitleErrors,
                itemDescriptionErrors: itemDescriptionErrors,
                itemPriceErrors: itemPriceErrors,
                itemMediaErrors: itemMediaErrors,
            })

        })
        let hasFrontErrors = false;
        for (let i = 0; i < sectionTitleErrors.length; i++) {

            if (sectionTitleErrors[i].error.length > 1) {
                hasFrontErrors = true;
                break;
            }
        }

            if ( hasFrontErrors == false){
        for (let i = 0; i < itemTitleErrors.length; i++) {

            if (itemTitleErrors[i].error.length > 1) {
                hasFrontErrors = true;
                break;

            }
        }
        }
        if ( hasFrontErrors == false){
        for (let i = 0; i < itemDescriptionErrors.length; i++) {
            if (itemDescriptionErrors[i].error.length > 1) {
                hasFrontErrors = true;
                break;
                
            }
        }
        }
        if ( hasFrontErrors == false){
        for (let i = 0; i < itemPriceErrors.length; i++) {
            if (itemPriceErrors[i].error.length > 1) {
                hasFrontErrors = true;
                break;
                
            }
        }
        }
        if ( hasFrontErrors == false){
        for (let i = 0; i < itemMediaErrors.length; i++) {

            if (itemMediaErrors[i].error.length > 1) {
                hasFrontErrors = true;
                break;
                
            }
        }
        }
       if (hasFrontErrors) {
            console.log('Has errors');

        } else {
            //send request
            console.log('does not have errors');

        }
    }

    return <div className={"flex flex-col w-full py-6 px-4  h-fit " + styling.menu[theme]} onClick={e => mainDivOnClick()}>
        <div className={seeInstructions ? '  absolute left-0 md:left-2 m-0 md:m-0 w-full md:w-2/3   bg-gray-100 rounded-sm  p-2 text-gray-700 text-sm md:text-lg z-10 ' : '  hidden '}>
            {locale == 'en' ? "This section is intended for items on your menu. The Add Section button adds a menu section, and the Add Item button adds an individual item. In the Section Title field, you can enter names such as Starters, Main Courses, Desserts, etc." : translate["This section is intended for items on your menu. The Add Section button adds a menu section, and the Add Item button adds an individual item. In the Section Title field, you can enter names such as Starters, Main Courses, Desserts, etc."]}
        </div>
        <div className=" flex w-full justify-center md:justify-start gap-2 py-2 ">

            <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => setSeeInstructions(!seeInstructions)}>
                {locale == 'en' ? 'Click for instruction' : translate['Click for instruction']}
            </PrimaryButton>
        </div>

        <div className=" flex w-full justify-center md:justify-start gap-2 py-2 ">
            <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => addImgSection()}>
                {locale == 'en' ? 'Add a section with item images' : translate['Add a section with item images']}
            </PrimaryButton>
            <PrimaryButton className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline" onClick={e => addNoImgSection()} >
                {locale == 'en' ? 'Add a section with no item images' : translate['Add a section with no item images']}
            </PrimaryButton>
        </div>
        <div className="py-6 flex flex-col items-start  min-w-[300px] max-w-[300px] md:max-w-[1100px]">
            {
                menu.map((section) => (
                    <div key={section.id} >
                        {section.type == 'img' ?
                            <MenuSectionImg section={section} deliteMenuSection={deliteMenuSection} updateMenu={updateMenu} frontErrors={frontErrors} />
                            :
                            <MenuSectionNoImg section={section} deliteMenuSection={deliteMenuSection} updateMenu={updateMenu} frontErrors={frontErrors} />
                        }
                    </div>
                ))
            }
        </div>
        <div className="w-full  flex justify-center md:justify-end md:pe-4 p-4 ">
            <CreateButton event={submitMenu}>
                {locale == 'en' ? 'CREATE' : translate['CREATE']}
            </CreateButton>
        </div>
    </div>
}