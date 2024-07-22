"use client"

import { useState, useEffect } from 'react';
import imagesData from '../../../jsonFiles/homeImages.json'
import ContactForm from '@/components/shared/contacts/ContactForm';
import dynamic from 'next/dynamic';


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
                    <p>Acelera tu camino al éxito. Transforma tus metas en realidad con soluciones de calidad. Déjanos llevar tu idea al siguiente nivel.</p>
                    <button onClick={() => setShowComponent(true)}>
                        Hagamos tu idea realidad
                    </button>
                    {showComponent && (
                        <ContactForm onClose={() => setShowComponent(false)} />
                    )}
                </div>
                <div className="imageSection">
                    {Images ? <img src={Images.red} alt="" id="red" /> : <p>Cargando...</p>}
                    {Images ? <img src={Images.webSiteimage} alt="" className="webSite" /> : <p>Cargando...</p>}
                    <div className="developmentIdioms">
                        {Images ? <img src={Images.HtmlImage} alt="" id="HtmlImage" /> : <p>Cargando...</p>}
                        {Images ? <img src={Images.CssImage} alt="" id="CssImage" /> : <p>Cargando...</p>}
                        {Images ? <img src={Images.CImage} alt="" id="CImage" /> : <p>Cargando...</p>}
                        {Images ? <img src={Images.dev} alt="" id="dev" /> : <p>Cargando...</p>}
                    </div>
                    <div className='CloudImageContainer' >
                        {Images ? <img src={Images.CloudImage} alt="" id="cloud1" /> : <p>Cargando...</p>}
                        {Images ? <img src={Images.CloudImage} alt="" id="cloud2" /> : <p>Cargando...</p>}
                    </div>
                    {Images ? <img src={Images.leaves} alt="" id="leaves" /> : <p>Cargando...</p>}
                </div>
            </div>
        </section>

    );
}