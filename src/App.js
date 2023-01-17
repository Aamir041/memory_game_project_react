import { Children, useEffect, useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';

const cardImages = [
  {"src":"/img/helmet-1.png"},
  {"src":"/img/potion-1.png"},
  {"src":"/img/ring-1.png"},
  {"src":"/img/scroll-1.png"},
  {"src":"/img/shield-1.png"},
  {"src":"/img/sword-1.png"}
]

/*
let l = cardImages.length;

let arr2 = [];
let arr3 = [];

cardImages.forEach((el) => {
  for (let i = 0; i < 2; i++) {
    let random1;
    random1 = Math.floor(Math.random() * cardImages.length * 2);
    if (arr3.includes(random1)) {
      i--;
      continue;
    }
    arr2[random1] = el;
    arr3.push(random1);
  }
});

console.log(arr2); 
*/


function App() {

  const [cards,setCards] = useState([]);
  const [turn,setTurn] = useState(0);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);


  const shuffleCards = () => {
    const shuffled_cards_array = [...cardImages,...cardImages]
    .sort(() => Math.random() - 0.5) // sort function takes two arguments, if Math.random() - 0.5 is less than 0 then cards remain in same order or else the order is changed
    .map((card) => ({...card,id:Math.random()}) ) // map returns a an object which contains image source and id, id is made using Math.random()

    setCards(shuffled_cards_array);
    setTurn(0);
  }


  const handleChoice  = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  const resetChoices = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn(prevTurn => prevTurn + 1);
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("Cards Match");
      }
      else{
        console.log("Cards do not match");
      }
      resetChoices();
    }
  },[choiceOne,choiceTwo])

  // console.log(cards);

  return (
    <div className="App">
        <h1>Magic Cards</h1>
        <button onClick={shuffleCards}>New Game</button>

        <div className='card-grid'>
        {
          cards.map(card => (
            <SingleCard
            handleChoice = {handleChoice} 
            key={card.id} 
            card={card} />
          ))
        }
        </div>

    </div>
  );
}

export default App;
