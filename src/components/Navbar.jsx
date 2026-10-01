import { NavLink } from 'react-router-dom';

export default function Navbar({ count }) {
  return (
    <header className="navbar">
      <h1 className="brand">Image Gallery <span className="badge">{count}</span></h1>
      <nav>
        <NavLink to="/" end>Gallery</NavLink>
        <NavLink to="/manage">Manage</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
}
