import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id,coverImg,title, summary,genres}) {
    //Movie component는 이 properties를 다 부모 component로부터 받아온다.
    return (<div>
    <img src={coverImg} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>
        {title}
      </Link>
      </h2>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...`:summary}</p>
    <ul>
      {genres.map( g => <li>{g}</li>)}
    </ul>
    </div>);
    //if문의 축약문인가보다. 화살표함수처럼
    //summary의 길이가 235보다 길다면 무언가를 해줄 것이고 아니라면 summary를 그냥 보여준다.
    //무언가: 0에서 235까지 string자르기 - slice(,)
  }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
//props는 object일 뿐이고 우리는 그걸 열어서 item을 꺼내 쓴다.


export default Movie;
