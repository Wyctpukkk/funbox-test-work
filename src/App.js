import './App.scss';
import info from './assets/info.json';

function App() {
  const cards = info;

  return (
    <div className="container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <section className="card-list">
        {cards.map((card, index) => {
          return (
            <div className="card-item">
              <div className="card-background">
                <div className="card">
                  <div className="text">
                    <p className="upper-text">{card.upper}</p>
                    <p className="productname">{card.productname}</p>
                    <p className="with">{card.with}</p>
                    <p className="count-case">{card.countCase}</p>
                  </div>
                  <img
                    className="image-cat"
                    src={card.imageUrl}
                    alt="cat"
                  ></img>
                  <div className="circle">
                    <p className="count">{card.count}</p>
                    <p className="weight">{card.weight}</p>
                  </div>
                </div>
              </div>
              <div className="description">
                <p className="description-text">{card.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
