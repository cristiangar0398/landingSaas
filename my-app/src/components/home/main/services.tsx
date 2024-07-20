"use client"

import { useState, useEffect } from 'react';
import servicesData from '../../../jsonFiles/services.json'
import { Scrolling } from '@/services/scrolling';
import { IsMobileDevice } from '@/services/isDevice';

interface Response {
    data: service[];
}

interface service {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
}

export default function ServicesSection() {
    const [isScroll, setAnimation] = useState(false);
    const [Response, setResponse] = useState<Response | null>(null);

    useEffect(() => {
        setResponse({ data: servicesData });
        IsMobileDevice() ?  Scrolling(20, setAnimation): Scrolling(120, setAnimation);
    }, []);

    return (
        <section className="servicesSection">
            <div className="headContainer">
                <h3>Nuestros <span>Servicios</span></h3>
                <p>
                Sumérgete en un mundo de innovación con nuestros servicios personalizados de desarrollo de software, aplicaciones móviles y páginas web, diseñados para hacer realidad tus visiones digitales. <br />
                Además, ofrecemos soluciones avanzadas en redes y telecomunicaciones, optimizando la conectividad y garantizando la eficiencia de su infraestructura tecnológica.
                </p>
            </div>
            <div className={isScroll ? "scroll gridContainer" : "gridContainer"}>
                {Response ? (
                    Response.data.map((service, index) => (
                        <div key={index} className="serviceItem" id={`product-${index + 1}`}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href={service.url} target="_blank">
                                Más información
                            </a>
                            <img src={service.imageUrl} alt={service.title} />
                        </div>
                    ))
                ) : (
                    <p>Cargando...</p>
                )}

            </div>
        </section>
    )
}