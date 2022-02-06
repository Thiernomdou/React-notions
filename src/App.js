// import { useState, UseEffect, useEffect } from 'react'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react/cjs/react.development';
import './App.css';
// import Video from './Video.mp4';
import useDimension from './useDimension';


function App() {

  const browserWidth = useDimension();
  // console.log(browserWidth);

  if(browserWidth > 772) {
    console.log("grand écran");
  } else {
    console.log("petit écran");
  }

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




  //useState toggle
  // const [toggle, setToggle] = useState([1, 2, 3]);

  //la reference qui permet de selectionner qui retourne un objet avec ce qu'on a selectionné
  // const ref = useRef([]);


  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.pause();
  //   }, 1500)
  // }, [])

  // useEffect(() => {
  //   //lancer une fonction qu'on resize notre fenêtre globale
  //   window.addEventListener('resize', actionResize);

  //   function actionResize() {
  //     console.log("Resizedddd!!!!!!!");
  //   }

  //   //exécution de cette fonction une fois que le composant est détruit
  //   return () => {
  //     window.removeEventListener('resize', actionResize);
  //   }
  // })



  // const toggleFunc = () => {
  //   //ne jamais modifier le state directement, il faut copier le state dans un nouveau tableau ou objet
  //   //pour ensuite changer le state avec le nouveau tableau ou objet crée
  //   //on copie tout ce qu'il y a dans le state
  //   const newArr = [...toggle];
  //   //on ajoute ce qu'on souhaite dans notre tableau copié
  //   newArr.push(4);
  //   //ensuite passer ce nouveau tableau  pour modifier le state
  //   setToggle(newArr);
  //   console.log(newArr);
  // }


  // const addToRef = el => {
  //   console.log(el);
  // }

  

  return (
    //appel API
    // cela renvoie une image si dataImg est true
    // <div className="App">
    //   {dataImg &&
    //     <img src={dataImg} alt={"catimage"}
    //       style={{ width: "500px" }}
    //     />}
    // </div>

    // <div className="App">
    //   <video ref={addToRef} width="750" height="500" autoPlay controls muted>
    //     <source src={Video} type='Video/mp4' />
    //   </video>

    //   <video ref={ref} width="750" height="500" autoPlay controls muted>
    //     <source src={Video} type='Video/mp4' />
    //   </video>

    //   <video ref={addToRef} width="750" height="500" autoPlay controls muted>
    //     <source src={Video} type='Video/mp4' />
    //   </video>

    //   <button onClick={toggleFunc}>Toggle</button>
    // </div>


    <div className="App">

    </div>
  );
}

export default App;
