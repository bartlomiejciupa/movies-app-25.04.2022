// Renderuje jeden film

const Movie = ({movie, rate, year, watched, comments}) => {
return(
    <>
    <div> Film: {movie}</div>
    <div> Ocena: {rate}</div>
    <div> Rok prod: {year}</div>
    <div> Komentarz: {comments}</div>
    </>
)

}
export default Movie