import { Link, Outlet } from "react-router";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img
            className={styles["avatar"]}
            src="/avatar.png"
            alt="Иконка аватара"
          />
          <div className={styles["name"]}>Сатановский Матвей</div>
          <div className={styles["email"]}>satanovskijmatvej8@gmail.ru</div>
        </div>

        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src="/menu-icon.svg" alt="Иконка меню" />
            Перейти в меню
          </Link>

          <Link to="/cart" className={styles["link"]}>
            <img src="/cart-icon.svg" alt="Иконка корзины" />
            Перейти в корзину
          </Link>
        </div>
        <Button className={styles["exit"]}>
          <img src="/exit-icon.svg" alt="Иконка выхода" />
          Выход
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
