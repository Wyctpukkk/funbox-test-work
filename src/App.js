import './App.scss';

function App() {
  return (
    <div className="container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <section className="card-list">
        <div className="card-item">
          <div className="card">
            <p className="upper-text"></p>
            <p className="productname"></p>
            <p className="with what"></p>
            <p className="count-case"></p>
            <p className="count-present"></p>
            <img className="cat"></img>
            <div className="circle">
              <p className="count"></p>
              <p className="weight"></p>
            </div>
          </div>
          <div className="description">
            <p>Чего сидишь? Порадуй котэ, купи.</p>
          </div>
        </div>
        <div className="card-item">
          <div className="card">
            <p className="upper-text"></p>
            <p className="productname"></p>
            <p className="with what"></p>
            <p className="count-case"></p>
            <p className="count-present"></p>
            <img className="cat"></img>
            <div className="circle">
              <p className="count"></p>
              <p className="weight"></p>
            </div>
          </div>
          <div className="description">
            <p>Чего сидишь? Порадуй котэ, купи.</p>
          </div>
        </div>
        <div className="card-item">
          <div className="card">
            <p className="upper-text"></p>
            <p className="productname"></p>
            <p className="with what"></p>
            <p className="count-case"></p>
            <p className="count-present"></p>
            <img className="cat"></img>
            <div className="circle">
              <p className="count"></p>
              <p className="weight"></p>
            </div>
          </div>
          <div className="description">
            <p>Чего сидишь? Порадуй котэ, купи.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
