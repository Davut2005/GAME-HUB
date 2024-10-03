import genres from "./genres";
interface SelectGenre {
  SelectGenre: (genre: string) => void;
}

const GenresList = ({ SelectGenre }: SelectGenre) => {
  return (
    <div className="p-2">
      <h2 className="p-2">Genres</h2>
      {genres.map((genre) => (
        <button
          onClick={() => SelectGenre(genre.name)}
          className="d-flex flex-row genreList"
          key={genre.id}
        >
          <div className="imageGenre">
            <img src={genre.backgroundImage} />
          </div>
          <div className="mb-3 d-flex centeredPar">
            <p className="p-2">{genre.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default GenresList;
