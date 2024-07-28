import Typed from 'typed.js';
import {useEffect,useRef} from "react";

const Animatedtype = () => {



    const el =useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' ساختمانی'," دکوراسیون", ' معماری' , ' طراحی'],

            typeSpeed: 100,
            backSpeed: 0,
            fadeOut: true,
            loop: true,
            fadeOutDelay:500,
        });

        return () => {

            typed.destroy();
        };
    }, []);


    return (
        <>

            <span className='textclrseven px-3 has-text-weight-bold ' ref={el} />



        </>

    )
}
export default Animatedtype;