import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Competition from './pages/Competition'
import Match from './pages/Match'
import Daejin from './pages/Daejin';
import Tournament from './pages/Tournament';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    {/* 공통적으로 적용되는 header는 여기에 추가 하면 됩니다 */}
      {/* 추가적인 페이지를 추가 */}
				<Routes>
          {/* 메인 */}
					<Route path="/" element={<Main />}></Route>
          {/* 대회페이지 */}
          {/* 동적으로 페이지를 추가 react-router-dom에서 useParams를 통해서 접근 가능 */}
					<Route path="/competition/:id" element={<Competition />}></Route>
          {/* 대회 마감 후 게임 삽입 */}
        <Route path="/match/finish/:id" element={<Daejin />}></Route>
        {/* 대회 분야별 대진표 */}
        <Route path="/tournament/:leagueSeq/:divisionSeq" element={<Tournament />}></Route>
        
          {/* 대회 개별 경기 페이지 */}
          <Route path="/match/:id" element={<Match />}></Route>
				</Routes>
			</BrowserRouter>
  );
}

export default App;
