import './App.scss';
import info from './assets/info.json';
import { Cards } from './components/Cards';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState(info);
  let arr = [];
  const changeAction = (id) => {
    if (cards[id].status === 'disabled') {
    } else {
      arr = [...cards];
      arr[id].style === 'card__background selected'
        ? (arr[id].style = 'card__background')
        : (arr[id].style = 'card__background selected');
      setCards(arr);
    }
    console.log(arr);
    console.log(cards[id].style);
  };
  return (
    <div className="container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <section className="card">
        <Cards cards={cards} changeAction={changeAction} />
      </section>
    </div>
  );
}

export default App;
