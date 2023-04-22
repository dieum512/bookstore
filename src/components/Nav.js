import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav className="nav">
      <h1 className="main-title">Bookstore CMS</h1>
      <ul className="links-container">
        <li className="books-link"><Link to="/">BOOKS</Link></li>
        <li className="categories-link"><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
  </>
);

export default Nav;
