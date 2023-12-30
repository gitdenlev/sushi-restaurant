import styles from "./Delicious.module.scss";
import { FaArrowRight } from "react-icons/fa";
const Delicious = () => {
  return (
    <>
      <div data-aos="fade-down" className={styles.DeliciousContainer}>
        <div style={{ position: "absolute", left: -40, top: -40 }}>
          <img src="/leaf.png" alt="" width={100} />
        </div>
        <div className={styles.DeliciousContent}>
          <h1>Enjoiy Delicious</h1>
          <div className={styles.DeliciousText}>
            <img
              className="animate__animated animate__swing animate__fast"
              src="/sushi-home.png"
              alt=""
            />
            <h2>Sushi Food</h2>
          </div>
          <p>
            Enjoy a good dinner with the best dishes in the restourant and
            improve your day.
          </p>
          <button>
            Order Now <FaArrowRight style={{ marginLeft: "21px" }} size={16} />
          </button>
        </div>
        <img
          src="/popular-sushi-rolls.png"
          alt=""
          width={700}
        />
        <div style={{ position: "absolute", right: -40, top: 300 }}>
          <img src="/leaf-2.png" alt="" width={100} />
        </div>
      </div>
    </>
  );
};

export default Delicious;
