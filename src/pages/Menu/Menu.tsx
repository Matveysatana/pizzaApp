import Headling from "../../components/Headling/Headling";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          image="/demo.png"
          price={300}
          rating={4.5}
        />
      </div>
    </>
  );
};

export default Menu;
