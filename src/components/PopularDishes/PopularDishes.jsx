import styles from "./PopularDishes.module.scss";

const PopularDishes = () => {
    return (
        <>
            <div className={styles.PopularDishesContainer}>
                <h2>The Best Food</h2>
                <h1>Popular Dishes</h1>
                <ul className={styles.PopularDishesList}>
                    <li>Onigiri</li>
                    <li>Spring Roll</li>
                    <li>Sushi Roll</li>
                </ul>
            </div>
        </>
    )
};

export default PopularDishes;
