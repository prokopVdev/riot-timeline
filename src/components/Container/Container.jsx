import s from './Container.module.css';

export default function Container({ title, children }) {
  return <div className={s.container}>{children}</div>;
}
