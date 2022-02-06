// import { useState, UseEffect, useEffect } from 'react'
import { useState, useEffect } from 'react';


function Timer() {

    //l'Effect qui se lance quand l'application se monte
    //la première fois
    /*on peut par exple vouloir appeler une API seulement
    lors du premier affichage, pas tout le temps que
    le composant se relance*/
    //on peut l'utiliser pour surveiller le state
    /*ce qui est dans le tableau est à surveiller, si on me 
    met rien, cela veut dire qu'on ne veut rien surveiller
    et useEffect se lance qu'au premier lancement du composant*/

    //state
    // const [dataImg, setDataImg] = useState();

    // //Effect
    // useEffect(() => {
    //   //Appel API on utlise la méthode fetch(qui veut dire aller chercher)
    //   fetch('https://api.thecatapi.com/v1/images/search')
    //     .then(response => {
    //       /*on retourne les données http en json 
    //       qui contiennent un tableau et  un objet de dans*/
    //       return response.json();
    //     })
    //     .then(data => {
    //       //affichage de notre tableau json
    //       setDataImg(data[0].url)
    //     })
    // }, [])

    //useState permet de mettre dans setTimer la méthode qui est retourné par useState pour changer le state.
    //on peut mettre une vouvelle valeur pour changer le state mais on peut aussi mettre une fonction 


    //useState timer
    const [timer, setTimer] = useState(1);




    //Effect
    useEffect(() => {

        //setInterval qui permet d'incrémenter une méthode de Xfois, et on la lance une seule fois dans le Effect
        const intervalID = setInterval(() => {

            setTimer(timer => timer + 1);
        }, 1000)

        return () => {
            //pour empecher l'exécution de l'interval indefiniment quand le composant se supprime
            alert('composant détruit');
            clearInterval(intervalID);
        }

    }, [])





    return (
        //appel API
        // cela renvoie une image si dataImg est true
        // <div className="App">
        //   {dataImg &&
        //     <img src={dataImg} alt={"catimage"}
        //       style={{ width: "500px" }}
        //     />}
        // </div>
        <>
            <h1>{timer}</h1>
        </>
    );
}

export default Timer;
