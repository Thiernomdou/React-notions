import { useState, useEffect } from 'react';


//création de notre propre hook qui permet de resize automatiquement le navigateur
export default function useDimension() {

    //c'est comme un composant classique, sauf au lieu de retourner de jsx, il va retourner
    //soit une fonction, soit une valeur 
    const [dimension, setDimension] = useState();

    useEffect(() => {
        window.addEventListener('resize', resizeFunc);


        function resizeFunc() {
            //window.innerwidth prend la largeur à l'intérieur du navigateur
            setDimension(window.innerWidth);
        }
        resizeFunc();
    
        //ce qui s'affiche après destruction du composant
        return () => {
            window.addEventListener('resize', resizeFunc);
        }

    }, []);


    //retourner le state
    return dimension;

}