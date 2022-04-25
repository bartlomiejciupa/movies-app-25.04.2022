// Gdy użytkownik jest zalogowany
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../db";
import Movie from "./Movie";
import InputMovie from "./InputMovie";

const Dashboard = ({ user }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const moviesCollection = collection(db, "movies-app");
    const movieDocuments = await getDocs(moviesCollection);

    const moviesList = movieDocuments.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    setMovies(moviesList);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const renderMovies = () =>
    movies.map((e) => (
      <Movie
        key={e.id}
        id={e.id}
        movie={e.data.movie}
        rate={e.data.rate}
        year={e.data.year}
        watched={e.data.true}
        comments={e.data.comments}
        refreshList={getMovies}
      />
    ));

  const signoutUser = () => {
    signOut(auth);
  };
  const editMovies = () => {
    movies.map((e) => {
      <InputMovie 
      refreshList={getMovies} />;
      console.log("działam");
    });
  };
  return (
    <div>
      <h1>Movies App</h1>
      <div>
        <h2>Najciekawsze filmy wg: {user}</h2>
      </div>
      {renderMovies()}
      <button onClick={editMovies}>Edytuj komentarz</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={signoutUser}>Wyloguj</button>
    </div>
  );
};

export default Dashboard;
