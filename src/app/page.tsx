import Image from 'next/image';

import styles from './page.module.scss';

const { main, hero } = styles;

export default function Home() {
  return (
    <main className={main}>
      <div className={hero}>
        <Image src={'/logo-full.png'} alt='band-hero with logo' fill />
      </div>
    </main>
  );
}
