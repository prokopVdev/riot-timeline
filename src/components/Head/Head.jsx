import img from '../../img/Riot-Games.png';
import s from './Head.module.css';

export default function Head() {
  return (
    <div>
      <img className={s.img} src={img} alt="clown" width={240} />
      <h1 className={s.title}>HISTORY TIMELINE</h1>
    </div>
  );
}
