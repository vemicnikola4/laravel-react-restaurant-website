import { useState, useEffect } from "react";

const Footer = () => {



  


    return (
        <div className={"flex justify-center h-fit py-8 bg-gray-900 text-white "}>

            <div className="w-5/6 flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className={"text-md md:text-4xl text-center "}>
                            Giros kod Taličnog Tome
                        </h1>
                        <p className="text-sm text-gray-400">
                            Sva prava rezervisana

                        </p>

                    </div>
                    <div className="flex py-10 gap-2">
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={`tel:+38161 6493939`}><img className="h-full w-full rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" /></a>
                        </div>
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href="https://www.google.com/maps/place/Giros+Kod+Talicnog+Tome/@44.7733599,20.4724964,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7105733d1609:0x3fa6b4613d2882db!8m2!3d44.7733561!4d20.4750713!16s%2Fg%2F11t2_qt1_s?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"><img className="h-full w-full rounded-lg" src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="" /></a>
                        </div>
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href="https://wolt.com/sr/srb/belgrade/restaurant/giros-kod-talinog-tome?srsltid=AfmBOorq6ihDxvFWRydRms-W4XiAA-DQTbd7L224H8GSyRZBOyZTYGN3"><img className="h-full w-full rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" /></a>
                        </div>

                       



                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href="https://www.instagram.com/giros_kodtalicnogtome/"><img className="h-full w-full rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" /></a>
                        </div>

                        
                    </div>




                </div>



            </div>

        </div>
    )
}

export default Footer;