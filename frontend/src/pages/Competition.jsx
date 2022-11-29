import React from "react";
import { useParams } from "react-router-dom";

export default function Competition(){
    //하나의 대회에 대한 정보를 보여줍니다
    //그 대회 내의 개별 Division을 보여주고 클릭 할 시 해당 Division 의 대진표나 신청화면으로 이동하게 합니다.

    const params = useParams()

    return(
        <div>
            <div>{params.id}경기</div>
        </div>
    )
}

