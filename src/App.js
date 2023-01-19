import './App.scss';
import info from './assets/info.json';
import { Cards } from './components/Cards';

function App() {
  return (
    <div className="container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <section className="card">
        <Cards cards={info} />
      </section>
    </div>
  );
}

export default App;
