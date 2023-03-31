import { table } from 'console';
import { useState } from 'react';
import data from '../../MovieData.json';
import styles from './Movies.module.css';

const MDS = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(MDS);

  const addMovie = () => {
    setListOMovies([
      ...MDS,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div className={styles.tablecontainer}>
        <table className={styles.mytable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>

          <tbody>
            {listOMovies.map((m) => (
              <tr className={styles.mytablerow}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
