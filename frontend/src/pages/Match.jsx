import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Match(props) {
  // 개별경기 컴포넌트 입니다
  // 개별경기의 정보를 받아오고 점수표를 출력합니다
  // 점수표는 점수와 타이머로 이루어 져 있으며 socket.io를 통해서 실시간으로 보고있는 모든 사람들에게 남은 경기시간을 공유합니다
  // 만약 로그인 된 사용자가 경기의 심판이라면 점수표에 점수와 타이머를 조작 할 수 있는 기능이 보이도록 합니다.
  // 경기완료 후 확인 버튼을 누르면 해당경기의 정보를 업데이트 하고
  // 해당경기 정보에 담겨 있는 다음경기 ID를 통해서 다음경기의 정보 또한 업데이트 합니다

  const params = useParams();

  //경기정보
  const [info, setInfo] = useState();

  const URL1 = "경기 정보를 받아올 URL";
  const URL2 = "경기 데이터를 수정 할 URL";

  useEffect(() => {
    // 경기정보를 받아옵니다
    // useState를 통해서 경기 정보를 받아옵니다
    //axios.get()
    //.then()
    //setInfo(res.data)
  }, []);

  function F() {
    alert("버튼 눌림");
  }

  return (
    <div>
      <div>{params.id}경기</div>
      <div>점수표</div>
      <button onClick={F}>보내기</button>
    </div>
  );
}