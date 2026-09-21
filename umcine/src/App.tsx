export default function App() {
  const movieTitle = "극장판 짱구는 못말려: 습격!! 외계인 덩덩이";
  const genre = "애니메이션";
  const releaseDate = "2017.07.20";

  return (
    <article className="movie-card">
      <h1>{movieTitle}</h1>
      <p>장르: {genre}</p>
      <p>개봉일: {releaseDate}</p>
    </article>
  );
}