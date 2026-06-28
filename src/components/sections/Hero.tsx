export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Zentric Technologies</p>

      <h1 className="hero__title">
        We Build <span className="hero__title-accent">Modern Websites</span> That
        Convert
      </h1>

      <p className="hero__subtitle">
        Helping businesses grow with premium digital solutions.
      </p>

      <div className="hero__actions">
        <button className="hero__btn hero__btn--primary">Get Started</button>
        <button className="hero__btn hero__btn--secondary">View Services</button>
      </div>
    </section>
  );
}
