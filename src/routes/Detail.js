import { useEffect } from "react";
import { useParams }from "react-router-dom";
function Detail(){
    const {id} =useParams();
    // useparams 함수를 사용하면 react router는 바로 이 변수의 값을 넘겨준다.
    // useparams를 이용해 id와 라우트를 매치해준다고..
    // 이것을 사용하면 app.js에 있는 movie:id의 id값을 위 함수의 id에 넘겨주는 것.
    
    const getMovie = async() => {
        const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
};
     
    useEffect(() => {
       getMovie();
    },[]);
    return <h1>Detail</h1>;
}
export default Detail;
//함수를 사용하면 ReactRouter는 바로 이 변수의 값을 넘겨준다.
//const id는 app.js의 movie 옆의 id변수를 가져오는 것. 
// 따라서 두 쪽 중 한쪽이라도 이름이 다르면 오류 생김
// await는 async함수 내부에 있지 않으면 사용할 수 없다.