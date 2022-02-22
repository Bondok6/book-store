import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <>
      <MainHeader />

      <main className="container">
        <Routes>
          <Route path="/bookstore/books" element={<Books />} />
          <Route path="/bookstore/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
