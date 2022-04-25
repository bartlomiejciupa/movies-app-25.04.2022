// Gdy użytkownik nie jest zalogowany

import { Link } from 'react-router-dom';
import Movie from './Movie';

const Home = () => {

    return (
        <div id='home'>
            Nie jesteś zalogowany, musisz się zalogować, aby móc dodawać filmy.
            <div>
                <Link to="/login">Zaloguj</Link>
            </div>
            <div>
                <Link to="/register">Zarejestruj się</Link>
            </div>
            <div>
                <Link to="/forgot-password">Resetuj hasło</Link>
                <Movie/>
            </div>

        </div>
    )
}

export default Home;