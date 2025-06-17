import { useState, useEffect } from "react";
import { usePageContext } from "@/Contexts/PageContext";
import InputError from "@/Components/InputError";

export default function Item({ item, deleteSectionItem, updateSection, frontErrors }) {

    const [modal, setModal] = useState(item);
    const { locale, translate, styling, theme } = usePageContext();


    const deleteItem = (id) => {
        deleteSectionItem(id);

    }
    useEffect(() => {
        updateSection(modal);
    }, [modal]);

    return (
        <div className="min-w-[250px] max-w-[250px] block bg-transparent shadow-lg shadow-black rounded-md min-h-[350px] pb-6 relative overflow-hidden">
            <button className="py-2 px-4 bg-red-500 absolute top-0 right-0" onClick={e => deleteItem(item.id)}>
                x
            </button>
            <div className="w-full">
                <img src='https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg' alt="" className="w-full object-cover  rounded-t-md h-48" />
            </div>
            <div>
                <div className="p-2 text-ellipsis overflow-hidden ...  hover:text-clip text-center ">
                    <input
                        className={" z-40 "} type="file" name=""
                        onChange={e => setModal({ ...modal, media: e.target.files[0] })}

                    />
                    {
                        frontErrors.itemMediaErrors.map((frontError) => (
                            frontError.id == modal.id ?
                                <InputError message={locale == 'en' ? frontError.error : translate[frontError.error]} key={modal.id} />
                                :
                                null

                        ))
                    }

                </div>


                <div className="flex justify-center w-full">
                    <div className="flex flex-col gap-1 items-center text-center">
                        <div>
                            <h2 className="font-bold text-2xl">
                                <input type="text" className={" text-center border-b-2 w-full " + styling.input[theme]} placeholder={locale == 'en' ? "Enter title" : translate['Enter title']} value={modal.itemTitle} onChange={e => setModal({ ...modal, itemTitle: e.target.value })} />
                            </h2>
                        </div>
                        <div>
 {
                            frontErrors.itemTitleErrors.map((frontError) => (
                                frontError.id == modal.id ?
                                    <InputError message={locale == 'en' ? frontError.error : translate[frontError.error]} key={modal.id} />
                                    :
                                    null

                            ))
                        }
                        </div>
                       
                    </div>


                </div>


                <div className="mt-2 px-2">
                    <textarea name="" placeholder={locale == 'en' ? "Enter item description" : 'Unesite opis proizvoda'} className={" text-center border-b-2 w-full " + styling.input[theme]} id="" onChange={e => setModal({ ...modal, itemDescription: e.target.value })} value={modal.itemDescription}></textarea>
                     <div className="flex text-center ">
                            {
                            frontErrors.itemDescriptionErrors.map((frontError) => (
                                frontError.id == modal.id ?
                                    <InputError message={locale == 'en' ? frontError.error : translate[frontError.error]} key={modal.id} />
                                    :
                                    null

                            ))
                        }

                        </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col gap-1 items-center">
                        <div>
                            <p>
                                <input type="number" className={"text-center border-b-2 " + styling.input[theme]} placeholder={locale == 'en' ? "Enter item price" : translate["Enter item price"]} value={modal.itemPrice} onChange={e => setModal({ ...modal, itemPrice: e.target.value })} />
                                
                            </p>
                            
                        </div>
                        <div className="flex text-center ">
                            {
                            frontErrors.itemPriceErrors.map((frontError) => (
                                frontError.id == modal.id ?
                                    <InputError message={locale == 'en' ? frontError.error : translate[frontError.error]} key={modal.id} />
                                    :
                                    null

                            ))
                        }

                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}
