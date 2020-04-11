import { h } from 'preact';
import style from './style';

const Home = () => (
  <div class={style.home}>
    <div class={style.breath}>
      <span class={style.breatheIn}>inspire</span>
      <span class={style.hold}>segure</span>
      <span class={style.breatheOut}>respire</span>
    </div>
  </div>
);

export default Home;
