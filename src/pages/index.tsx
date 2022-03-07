import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, bem vindo!</span>
          <h1>
            Novidades sobre o mundo <span>React.</span>
          </h1>
          <p>
            Garanta o acesso as publicações <br />
            <span>por R$9,90/mês</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  );
}
