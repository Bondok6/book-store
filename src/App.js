import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <>
      <MainHeader key="header" />

      <main className="container">
        <Routes>
          <Route path="/books" element={<Books key="books" />} />
          <Route path="/categories" element={<Categories key="categories" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
