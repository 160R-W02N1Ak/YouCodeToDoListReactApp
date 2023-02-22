import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <section className="section__header">
      <h2 className="section__header__title">{title}</h2>
      {extraHeaderContent}
    </section>
    <div className="section__body">
      {body}
    </div>
  </section>
);
export default Section;
