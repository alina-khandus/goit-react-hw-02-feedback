import s from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={s.title}>{title}</h2>
    {children}
  </>
);

export default Section;
