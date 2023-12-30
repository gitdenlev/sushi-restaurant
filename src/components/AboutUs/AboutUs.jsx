import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        className={styles.AboutUsContainer}
      >
        <div className={styles.AboutUsImage}>
          <img src="/about-sushi.png" alt="" width={418} />
        </div>
        <div className={styles.AboutUsTextContent}>
          <h1>About Us</h1>
          <h2>We Provide Healthy Food</h2>
          <p>
            Food comes to us from our relatives whether they have wings or roots
            . This is how we consider food. It also has a culture. It has a
            history that passes from generation to genneration.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
