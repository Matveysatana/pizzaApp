import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <div className="a">
        <Link to="/">Перейти в меню</Link>
        <Link to="/cart">Перейти в корзину</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
