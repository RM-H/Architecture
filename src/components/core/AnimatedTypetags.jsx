import Typed from 'typed.js';
import {useEffect,useRef} from "react";

const Animatedtype = () => {



    const element =useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: [' #طراحی محوطه'," #طراحی پلان", ' #دکوراسیون و طراحی داخلی' , '# طراحی نما'],

            typeSpeed: 33,
            backSpeed: 0,
            fadeOut: true,
            loop: true,
            fadeOutDelay:1618,
            backDelay:3000,
            showCursor:false,

        });

        return () => {

            typed.destroy();
        };
    }, []);


    return (
        <>

            <p className='textclrseven px-3 has-text-weight-bold is-size-4 has-text-centered mt-6 is-hidden-mobile' ref={element} />



        </>

    )
}
export default Animatedtype;