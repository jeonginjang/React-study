
import{
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
//그러고 home을 import해줌

function App() {
 return (
 <Router>
   <Routes>
    <Route path="/movie/:id" element={<Detail/>} />
    <Route path="/" element={<Home/>} />
   </Routes>
 </Router>
 );
}
//switch: route를 찾는 일을 한다. Route는 url을 의미한다.
//switch를 사용함으로써 오류가 발생, Routes로 전부 변경
// 유저가 이 경로(/)에 있으면 home route를 렌더링해줌
//Link: 새로고침 없어도 유저를 다른 페이지로 이동시켜줌
//id 앞에 : 붙여주는거 아주 중요하다.안그러면 /id로 그냥 이동시켜버림
//:id를 사용하면 각 id의 정보에 해당되는 페이지로 이동시킬 수 있다.
//: 옆에 붙은 게 받게 되는 변수이다.

export default App;
