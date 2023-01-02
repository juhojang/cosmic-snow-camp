import logo from './logo.svg';
import './Counter'
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
            <h1>생일 출력하기</h1>
            <h2>0.박정현, 1.복무창, 2.오민석, 3.한규원, 4.김도영, 5.김준호, 6.문희범</h2>

          <Counter/>
    </div>

  );
}

export default App;
