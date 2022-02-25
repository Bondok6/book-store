import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />

      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
