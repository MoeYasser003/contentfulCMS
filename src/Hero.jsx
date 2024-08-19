import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
            illo. Suscipit eius recusandae eum! Placeat, ipsum. Laudantium,
            quaerat itaque! Possimus, asperiores ea quis neque quia, eos rerum
            iure placeat itaque maxime aspernatur! Consequatur nulla consectetur
            fugiat quam. Fugiat laborum, perspiciatis vitae nostrum quas
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman with a browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
