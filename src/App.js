import './styles/App.css';

function App() {
  return (
    <div className="container">
      <img src="/images/impactateste.png" alt="Logo Impacta" className="logo" width="150"/>
      <header className="catalog-header">
        <h1>Testando os produtos</h1>
        <ul className="product-list">
          <li className="product-item">1 - 50$ <img src="/images/teste1.png" alt="1" width="50" /></li>
          <li className="product-item">2 - 10$</li>
          <li className="product-item">3 - 15$</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
