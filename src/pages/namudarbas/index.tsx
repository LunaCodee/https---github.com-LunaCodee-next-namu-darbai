import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const RandomCocktailPage = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [isDisplayName, setDisplayName] = useState(true);

  const fetchRandomCocktail = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    const data = await response.json();
    console.log(data.drinks[0]);
    setRandomCocktail(data.drinks[0]);   
  };

  useEffect(() => {
    console.log("Doing fech");
    fetchRandomCocktail();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {randomCocktail && (
          <>
            {/* @ts-ignore */}
            <div className={styles.name}>{randomCocktail.strDrink}</div>
             {/* @ts-ignore */}
             <img className={styles.img} src={randomCocktail.strDrinkThumb}/>
             {/* @ts-ignore */}
             {Object.keys(randomCocktail)
        .filter((key) => key.startsWith('strIngredient'))
        .map((key) => (
          <div className={styles.ingridients} key={key}>{randomCocktail[key]}</div>
        ))}
            {/* @ts-ignore */}
            <div>{randomCocktail.strInstructions}</div>
            {/* @ts-ignore */}
            <div>{randomCocktail.strAlcoholic}</div>
          </>
        )}
      </div>

      {/* {isDisplayName && <div>Tadas</div>} */}
    </>
  );
};

export default RandomCocktailPage;