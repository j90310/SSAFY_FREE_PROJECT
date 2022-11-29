// import { React, useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   SingleEliminationBracket,
//   Match,
// } from "@g-loot/react-tournament-brackets";

// import { axios } from "../api/axios";

// export default function Daejin(props) {
//   //대진표입니다 개별 경기의 왼쪽 위 값을 누르면 해당 경기의 상세페이지로 이동합니다
//   //이미 만들어진 대진표를 import 해와서 개별 태그에 접근할 수 없어서 class 이름을 통해서 구분하도록 해두었습니다.
//   //사람 이름을 누르면 console.log로 출력되도록 해놓았습니다
//   //이후에 선수 스왑같은 기능을 구현하려면 사용해 주세요

//   const params = useParams();
//   const navigate = useNavigate();

//   //matches에는 해당 Division에 속한 경기들이 객체의 형태로 배열에 담겨서 들어옵니다.
//   const [matches, setMatches] = useState("");
//   const URL = `game/finish/${params.id}/`;
//   // const URL = `http://localhost:8080/api/game?leagueSeq=${params.leagueSeq}&divisionSeq=${params.divisionSeq}`

//   //반복렌더링 연습
//   const [dom, setDom] = useState("");

//   useEffect(() => {
//     axios.get(URL).then((res) => {
//       setMatches(res.data);
//       console.log(res.data);
//     });
//   }, []);

//   //배열형태로 들어오는 정보 반복 렌더링하기
//   useEffect(() => {
//     //ex) 배열 matches
//     if (matches) {
//       //matches가 존재 할때
//       const tmp = matches.map((match, idx) => (
//         //개별 컨텐츠 match
//         //key idx
//         <div>
//           <div>아이디 번호 : {match.id}</div>
//           <div>이름 : {match.name}</div>
//           <div>참가자 1 : {match.participants[0].name}</div>
//           <div>참가자 2 : {match.participants[1].name}</div>
//         </div>
//       ));
//       //set 사용해서 변경
//       setDom(tmp);
//     }
//   }, [matches]); //matches가 변경 될때 마다 실행

//   function A(e) {
//     if (e.target.className === "sc-gswNZR bsxbPA") {
//       navigate(`../match/${e.target.innerText}`);
//       console.log(e.target.innerText);
//     } else if (e.target.className === "sc-eDvSVe") {
//       console.log(e.target.innerText);
//     }
//   }

//   return (
//     <div>
//       {/* <div>{params.leagueSeq}경기 {params.divisionSeq}부문 대진표</div> */}
//       {matches ? (
//         <div onClick={A}>
//           <SingleEliminationBracket matches={matches} matchComponent={Match} />
//         </div>
//       ) : (
//         ""
//       )}
//       {/* 반복렌더링 3항연산자 통해서 있을 때만 실행 */}
//       {dom ? dom : ""}
//     </div>
//   );
// }
