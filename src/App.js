import Nav from "./components/Nav";
import DisplayBooks from "./components/books/DisplayBooks";
import Categories from "./components/Categories";
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<DisplayBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
