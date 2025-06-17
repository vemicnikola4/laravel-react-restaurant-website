import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { usePageContext } from "@/Contexts/PageContext";
import NoImgItem from "./NoImgItem";
import InputError from "@/Components/InputError";
export default function MenuSectionNoImg({ section, deliteMenuSection,updateMenu,frontErrors }) {


    const [menuSectionModal, setMenuSectionModal] = useState(section);
    const { locale, translate,styling,theme } = usePageContext();

    const addItem = () => {
        let newItems = menuSectionModal.items;
        let newItem = {
            id: uuidv4(),
            media: '',
            itemTitle: '',
            itemDescription: '',
            itemPrice: 0
        }
        newItems.push(newItem);
        setMenuSectionModal({ ...menuSectionModal, items: newItems });
    }


const deleteSectionItem = (id) => {
        // let newItems = [];
        // if (menuSectionModal.items.length == 1) {
        //     newItems = [];
        // } else {
        //     for (let i = 0; i < menuSectionModal.items.length; i++) {
        //         if (i !== index) {
        //             newItems[i] = menuSectionModal.items[i];
        //         }
        //     }


        // }
         let newItems = menuSectionModal.items.filter(item => item.id !== id);
        setMenuSectionModal({
            ...menuSectionModal, items: newItems
        });
         


    }

    const deleteSection = (id) => {
        deliteMenuSection(id);
    }
    const updateSection = (modal)=>{
        let newItems =[];
        for( let i = 0; i < menuSectionModal.items.length; i++){
            if ( menuSectionModal.items[i].id !== modal.id ){
                newItems[i]=menuSectionModal.items[i];
            }else{
                newItems[i]=modal;
            }
        }

        setMenuSectionModal({...menuSectionModal,items:newItems});



    }
 useEffect(()=>{
        updateMenu(menuSectionModal);
    },[menuSectionModal]);


    return (
        <div className="p-3 w-full border border-2 border-gray-500 mt-2 relative text-black">
            <div className="absolute top-0 right-0  px-2 bg-red-500 font-bold hover:cursor-pointer" onClick={e => deleteSection(menuSectionModal.id)}>
                x
            </div>
            <div className="w-64  self-center md:self-start mb-3">
                <h1>
                    <input className={"p-2 rounded-sm " + styling.input[theme]}type="text" placeholder={locale == 'en' ? "Set section Title" : "Unesite naslov sekcije"} value={menuSectionModal.title !== null ? menuSectionModal.title : ''} onChange={e => (setMenuSectionModal({ ...menuSectionModal, title: e.target.value }))} />
                </h1>
                {
                                    frontErrors.sectionTitleErrors.map((frontError) => (
                                        frontError.id == menuSectionModal.id ?
                                            <InputError message={locale == 'en' ? frontError.error : translate[frontError.error]} key={menuSectionModal.id} />
                                            :
                                            null
                
                                    ))
                                }

            </div>
            <input type="text" name="sectionNote" id="" className={"flex  w-full py-8 ps-4 " + styling.input[theme]} placeholder={locale == 'en' ? 'Enter note concerning this section. Optional.' : 'Unesite napomenu vezanu za ovu sekciju. Opciono.'} value={menuSectionModal.note !== null ? menuSectionModal.note : ''} onChange={e => setMenuSectionModal({ ...menuSectionModal, note: e.target.value })} />
            <div className="text-red-500">

            </div>
            <div className="flex overflow-x-auto space-x-4 p-4 relative items-center max-w-[250px] md:max-w-[1000px]">

                <div className="h-full sticky z-10 left-0 w-px bg-blue-500 px-3  min-h-[250px] flex items-center font-extrabold text-2xl rounded-sm hover:cursor-pointer  relative group">
                    <div className="flex justify-center items-center w-1/2 w-full h-full " onClick={addItem}>
                        +

                    </div>
                    <div className="z-10 absolute left-0 bottom-0 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md font-normal text-base " >
                        {locale == 'en' ? 'Add item' : translate['Add item']}

                    </div>

                </div>

                <div className="flex justify-start gap-2 ">
                    {
                        menuSectionModal.items.map((item) => (
                            <NoImgItem key={item.id} item={item} deleteSectionItem={deleteSectionItem} updateSection={updateSection} frontErrors={frontErrors}/>
                        ))
                    }

                </div>
            </div>



        </div>




    )
}