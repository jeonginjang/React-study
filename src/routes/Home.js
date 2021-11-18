import {useEffect, useState} from "react";
import Movie from "../components/Movie";
//..은 그 위의 파일에 있는 것을 찾는다는 것- component가 파일순서가 먼저인 것.

function Home(){
    const[loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async() => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(()=>{
      getMovies();
    }, []);
    //.then=async-await 후자를 더 자주 사용함.
    console.log(movies);
    return <div>
          {loading ? <h1>Loading...</h1>:<div>{movies.map(
            (movie) => (
            <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}
            />)
            )}
          </div>}
        </div>;
//loading중이 아니라면 movies.map을 보여주겠다.

        //map: array의 item들을 가져와서 자신이 원하는 대로 변형할 수 있음
        //기존 것들과 더할 수도 있고, 기존의 것들에 같은 값들을 곱하거나.. 가능.
    

}
export default Home;