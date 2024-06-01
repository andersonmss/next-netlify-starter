import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ToComTempo - Automaccedil;atilde;o</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Seja Bem Vindo!" />
        <p className="description">
         Otimizando sua rotina de trabalho e proporcionando melhor rendimento no seu dia...!!!
        </p>
      </main>

      <Footer />
    </div>
  )
}
