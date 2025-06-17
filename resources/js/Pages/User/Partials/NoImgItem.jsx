import { usePageContext } from "@/Contexts/PageContext";
import { useState, useEffect } from "react";
import InputError from "@/Components/InputError";

export default function NoImgItem({ item, deleteSectionItem, updateSection, frontErrors }) {

    const [modal, setModal] = useState(item)
    const { locale, translate, styling, theme } = usePageContext();
    const deleteItem = (id) => {
        deleteSectionItem(id);

    }
    useEffect(() => {
        updateSection(modal);
    }, [modal]);

    return (
        <div className=" flex flex-col gap-2 min-w-[250px] max-w-[250px] justify-center items-center  shadow-lg shadow-black rounded-md p-4 relative overflow-hidden">
            <button className="py-2 px-4 bg-red-500 absolute top-0 right-0" onClick={e => deleteItem(item.id)}>
                x
            </button>




            <div className="flex w-full ">
                <input type="text" className={" font-bold text-center border-b-2 w-full" + styling.input[theme]} placeholder={locale == 'en' ? "Enter title" : translate['Enter title']} value={modal.itemTitle} onChange={e => setModal({ ...modal, itemTitle: e.target.value })} />
               
            </div>
            <div className="flex items-center text-center">
{
                    frontErrors.itemTitleErrors.map((frontError) => (
                        frontError.id == modal.id ?
                            <InputError message={locale == 'en' ? frontError.error : translate[frontError.error]} key={modal.id} />
                            :
                            null

                    ))
                }
            </div>
 




            <div className="flex flex-col w-full">
                <textarea name="" placeholder={locale == 'en' ? "Enter item descriptiom" : 'Unesite opis proizvoda'} className={" text-center border-b-2 w-full " + styling.input[theme]} id="" onChange={e => setModal({ ...modal, itemDescription: e.target.value })} value={modal.itemDescription}></textarea>
                <div className="flex text-center">
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

            <div className="flex basis-1/4 justify-center">
                <div className="flex flex-col gap-1 items-center">
                    <div>
                        <p>
                            <input type="number" className={" text-center border-b-2 " + styling.input[theme]} placeholder={locale == 'en' ? "Enter item price" : translate["Enter item price"]} value={modal.itemPrice} onChange={e => setModal({ ...modal, itemPrice: e.target.value })} />
                        </p>
                    </div>
                    <div className="flex items-center text-center ">
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
    )
}
