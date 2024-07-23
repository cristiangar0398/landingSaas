"use client"

import { useState, useEffect } from 'react';
import imagesData from '../../../jsonFiles/homeImages.json'
import ContactForm from '@/components/shared/contacts/ContactForm';
import Image from 'next/image';


interface Images {
    webSiteimage: string;
    HtmlImage: string;
    CssImage: string;
    CImage: string;
    CloudImage: string;
    leaves: string;
    dev: string;
    red: string;
}

export default function HomeSection() {

    const [Images, setImages] = useState<Images | null>(null);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setImages(imagesData);
    }, []);

    return (
        <section className="home-section">
            <div className="gridContainer">
                <div className="textSection">
                    <h2>Alcancemos tu meta juntos</h2>
                    <p>
                        Acelera tu camino al éxito. Transforma tus metas en realidad con soluciones de calidad. Déjanos llevar tu idea al siguiente nivel.
                    </p>
                    <button onClick={() => setShowComponent(true)}>
                        Hagamos tu idea realidad
                    </button>
                </div>
                <div className="imageSection">
                    {Images ? (
                        <>
                            <Image src={Images.red} alt="" id="red" width={500} height={300} />
                            <Image src={Images.webSiteimage} alt="" className="webSite" width={500} height={300} />
                            <div className="developmentIdioms">
                                <Image src={Images.HtmlImage} alt="" id="HtmlImage" width={100} height={100} />
                                <Image src={Images.CssImage} alt="" id="CssImage" width={100} height={100} />
                                <Image src={Images.CImage} alt="" id="CImage" width={100} height={100} />
                                <Image src={Images.dev} alt="" id="dev" width={100} height={100} />
                            </div>
                            <div className='CloudImageContainer'>
                                <Image src={Images.CloudImage} alt="" id="cloud1" width={200} height={200} />
                                <Image src={Images.CloudImage} alt="" id="cloud2" width={200} height={200} />
                            </div>
                            <Image src={Images.leaves} alt="" id="leaves" width={300} height={300} />
                        </>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </div>
            {showComponent && (
                <ContactForm onClose={() => setShowComponent(false)} />
            )}
        </section>
    );
}