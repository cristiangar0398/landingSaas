import { Dispatch, SetStateAction } from "react";

export async function Scrolling<T>(param: number , setAnimation: Dispatch<SetStateAction<boolean>>){

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > param) {
            setAnimation(true);
        } else {
            setAnimation(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

}
