import Head from 'next/head'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Moodi</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <h1 className="title">
          Welcome to <a>Moodi.js!</a>
        </h1>

        <p className="description">
          Get started by <a href='/create'><b>creating an account</b></a>
        </p>
        <p className="description">
          or just go to the <a href='/diagrams'><b>diagraming tool</b></a>
        </p>

        <div className="grid">
          <a target='blank' href="" className="card">
            <h3>Documentation &rarr;</h3>
            <p>See a dead simple description of moodi usages.</p>
          </a>

          <a target='blank' href="https://github.com/merschermat/moodi" className="card">
            <h3>GitHub &rarr;</h3>
            <p>See the source code, moodi is a open source project ;)</p>
          </a>

          <a  target='blank'
            href=""
            className="card"
          >
            <h3>Templates &rarr;</h3>
            <p>Discover templates for commum MongoDB usage.</p>
          </a>

          <a  target='blank'
            href=""
            className="card"
          >
            <h3>About &rarr;</h3>
            <p>
              Learn about the developers and the project.
            </p>
          </a>
        </div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        b {
          color: #5add80;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #13aa52;
          text-decoration: none;
        }

        .title a {
          color: #13aa52;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #5add80;
          border-color: #13aa52;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
