function Header() {
  return (
    <header>
      <h1>UMCine</h1>
    </header>
  );
}

function MovieCard() {
  return (
    <article>
      <h2>극장판 짱구는 못말려</h2>
      <p>2017.07.20</p>
    </article>
  );
}

function MovieList() {
  return (
    <section>
      <MovieCard />
      <MovieCard />
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <MovieList />
    </main>
  );
}