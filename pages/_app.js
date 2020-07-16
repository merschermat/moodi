import App from 'next/app'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Header from '../components/header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <main>
    <Head>
      <title>Moodi</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header />
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  </main>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp