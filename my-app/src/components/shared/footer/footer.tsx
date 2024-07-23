"use client"

import { useEffect, useState } from "react";
import SocialData from '../../../jsonFiles/social.json'
import MenuList from "../header/menuList";
import Image from 'next/image';



interface ImagesData {
    socialImages: string[];
}

export default function Footer() {

    const [ImagesData, setResponse] = useState<ImagesData | null>(null);
    useEffect(() => {
        setResponse(SocialData);
    }, []);

    useEffect(() => {
        if (ImagesData) {
            ImagesData.socialImages.forEach(element => {
                console.log(element);
            });
        }
    }, [ImagesData]);

    return (
        <footer>
            <div className="gridContainer">
                <div className="navItem">
                    <MenuList />
                </div>
                <div className="mainSection">
                    <div className="social">
                        {ImagesData ? (
                            ImagesData.socialImages.map((service, index) => (
                                <Image src={service} alt="" id={`image-${index}`} key={index} width={50} height={50}/>
                            ))
                        ) : (
                            <p>cargando ...</p>
                        )}
                    </div>
                </div>
                <div className="credits">
                    <p>@2024 ecoret.com.co. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}