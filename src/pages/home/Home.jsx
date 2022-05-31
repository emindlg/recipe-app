
import axios from 'axios';
import React, {useState} from 'react'
import Header from "../../components/header/Header";
import homeSvg from "../../assets/home.svg";
import { ImgDiv, HomeImg, MainContainer } from "./HomeStyles";
import RecipeCardComp from "./RecipeCardComp";


const APP_ID = "2fe816c1";
const APP_KEY = "1b4c82f23090780e132115cfad3fe202";
/*kendi id ve key imizi yaziyoruz*/


const Home = () => {
const [query, setQuery]=useState("");
const[food, setFood]=useState();
const mealTypes=["Breakfast", "Lunch","Dinner","Snack","Teatime"]
const [meal,setMeal]=useState(mealTypes[0].toLowerCase());
  
const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  
  const getData = async () => {
    if(query){ 
      const result = await axios.get(url);
    setFood(result.data.hits)
  
  
  
  }else {
    console.log("please fill the form");
  }
      


  }
  
  return (
    <div>
<Header  setQuery={setQuery}
getData={getData}
mealTypes={mealTypes}
setMeal={setMeal}

/>

{food ? (
        // api den gelen datanın tümü, (bir yiyecek ismi girildiğinde)
        <MainContainer>
          {/* arama sonucu yiyecek kartlarının kutusu */}
          {food.map((liste, index) => (
            <RecipeCardComp key={index} recipe1={liste.recipe} />
            // sadece liste yollarsak apı deki gibi  gidiyor. liste.recipe= json formatında key value. kısaca{recipe}.hits in içinde recipe var, liste hits e kadar gelir ben içindeki recipe'yi istiyorum
            // veriler direk bu sayfaya geliyor ,RecipeCardComp deki gibi navigate state e gerek yok
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />

          {/* ekrandaki aşçı resmi */}
        </ImgDiv>
      )}
    </div>
  );
}

export default Home;









