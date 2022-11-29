import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import styled from "styled-components";
import { divisionStore } from "../../store"

import { getDivisionSeqAPI } from "../../api/api";

function SearchDivision() {
  const { divisionSeq, setDivisionSeq } = divisionStore();
  const [divisionAge, setDivisionAge] = useState("");
  const [divisionBelt, setDivisionBelt] = useState("");
  const [divisionGender, setDivisionGender] = useState("");
  const [divisionType, setDivisionType] = useState("");
  const [divisionWeight, setDivisionWeight] = useState("");

  useEffect(() => {
    console.log("useEffect divisionSeq: ", divisionSeq);
  }, [divisionSeq]);

  async function getData(getLeagueSeqDto) {
    console.warn(getLeagueSeqDto);
    const data = await getDivisionSeqAPI(getLeagueSeqDto);
    setDivisionSeq(data.data);
    // setDivisionSeqState(data.data);
    // console.log("divisionSeq: ", divisionSeq, "divisionState: ", divisionSeqState);
    // divisionFunction(divisionSeqState);
  }

  // useEffect(() => {
  //   console.log("console: " + divisionSeq);
  // }, [divisionSeq])

  const handleSubmit = async (event) => {
    const getLeagueSeqDto = {
      divisionAge,
      divisionBelt,
      divisionGender,
      divisionType,
      divisionWeight,
    };

    await getData(getLeagueSeqDto);
    event.preventDefault();
  };

  // 벨트 선택 함수
  function selectBelt() {
    if (divisionAge === "HighSchool" || divisionAge === "Adult") {
      return <BeltSelectBox />;
    } else if (divisionAge === "Elementary" || divisionAge === "MiddleSchool") {
      return <ElementaryMiddleSchoolBeltSelectBox />;
    } else {
      return <NoBeginnerBeltSelectBox />;
    }
  }

  // 종목 선택 함수
  function selectType() {
    if (
      divisionBelt === "Beginner" ||
      divisionAge === "Beginner" ||
      divisionAge === "MiddleSchool"
    ) {
      return <NoAbsolTypeSelectBox />;
    } else {
      return <TypeSelectBox />;
    }
  }

  // 체중 선택 함수
  function selectWeight() {
    if (divisionType === "Gi-absol" || divisionType === "Nogi-absol") {
      // 앱솔
      return <AbsolWeightSelectBox />;
    } else if (
      divisionAge === "Adult" ||
      divisionAge === "Master1" ||
      divisionAge === "Master2" ||
      divisionAge === "Master3"
    ) {
      return <AdultMasterWeightSelectBox />; // 성인부
    } else if (
      setDivisionGender === "F" || // 여성부
      divisionAge === "MiddleSchool" || // 중등부
      divisionAge === "HighSchool" // 고등부
    ) {
      return <FemaleMiddleHighWeightSelectBox />;
    } else {
      // 초등부
      return <ElemantaryWeightSelectBox />;
    }
  }

  // 성별 선택
  const GenderSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionGender(e.target.value);
        }}
        value={divisionGender}
      >
        <option value="M">남성부 (Male)</option>
        <option value="F">여성부 (Female)</option>
      </Select>
    );
  };

  // 연령 선택
  const AgeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionAge(e.target.value);
        }}
        value={divisionAge}
      >
        <option value="Elementary">초등부 (Elementary)</option>
        <option value="MiddleSchool">중등부 (Middle School)</option>
        <option value="HighSchool">고등부 (High School)</option>
        <option value="Adult">Adult</option>
        <option value="Master1">Master 1 (만 30세부터)</option>
        <option value="Master2">Master 2 (만 35세부터)</option>
        <option value="Master3">Master 3 (만 40세부터)</option>
      </Select>
    );
  };

  // 벨트 선택
  const BeltSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionBelt(e.target.value);
        }}
        value={divisionBelt}
      >
        <option value="Beginner">White 비기너</option>
        <option value="White">White</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Brown">Brown</option>
        <option value="Black">Black</option>
      </Select>
    );
  };

  // 벨트 선택
  const NoBeginnerBeltSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionBelt(e.target.value);
        }}
        value={divisionBelt}
      >
        <option value="White">White</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Brown">Brown</option>
        <option value="Black">Black</option>
      </Select>
    );
  };

  // 벨트 선택
  const ElementaryMiddleSchoolBeltSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionBelt(e.target.value);
        }}
        value={divisionBelt}
      >
        <option value="White">White</option>
        <option value="Blue">Blue</option>
      </Select>
    );
  };

  // 종목 선택
  const TypeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionType(e.target.value);
        }}
        value={divisionType}
      >
        <option value="Gi">기 (gi)</option>
        <option value="Gi-absol">기 앱솔 (gi-absol)</option>
        <option value="Nogi">노기 (nogi)</option>
        <option value="Nogi-absol">노기 앱솔 (nogi-absol)</option>
      </Select>
    );
  };

  const NoAbsolTypeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionType(e.target.value);
        }}
        value={divisionType}
      >
        <option value="Gi">기 (gi)</option>
        <option value="Nogi">노기 (nogi)</option>
      </Select>
    );
  };

  const AbsolWeightSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionWeight(e.target.value);
        }}
        value={divisionWeight}
      >
        <option value="-absol">-absol</option>
        <option value="+absol">+absol</option>
      </Select>
    );
  };

  const AdultMasterWeightSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionWeight(e.target.value);
        }}
        value={divisionWeight}
      >
        <option value="-57.5kg">-57.5kg</option>
        <option value="-64kg">-64kg</option>
        <option value="-70kg">-70kg</option>
        <option value="-76kg">-76kg</option>
        <option value="-82.3kg">-82.3kg</option>
        <option value="-88.3kg">-88.3kg</option>
        <option value="-94.3kg">-94.3kg</option>
        <option value="+94.3kg">+94.3kg</option>
      </Select>
    );
  };

  const FemaleMiddleHighWeightSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionWeight(e.target.value);
        }}
        value={divisionWeight}
      >
        <option value="-47.5kg">-47.5kg</option>
        <option value="-53.5kg">-53.5kg</option>
        <option value="-58.5kg">-58.5kg</option>
        <option value="-64.0kg">-64.0kg</option>
        <option value="-69.0kg">-69.0kg</option>
        <option value="-74.0kg">-74.0kg</option>
        <option value="-79.3kg">-79.3kg</option>
        <option value="+79.3kg">+79.3kg</option>
      </Select>
    );
  };
  const ElemantaryWeightSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setDivisionWeight(e.target.value);
        }}
        value={divisionWeight}
      >
        <option value="-30kg">-30kg</option>
        <option value="-35kg">-35kg</option>
        <option value="-40kg">-40kg</option>
        <option value="-45kg">-45kg</option>
        <option value="-50kg">-50kg</option>
        <option value="-55kg">-55kg</option>
        <option value="+55kg">+55kg</option>
      </Select>
    );
  };

  return (
    <>
      <section className="checkout-pdivisionAge-area">
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={2}>
              <GenderSelectBox />
            </Col>
            <Col lg={2}>
              <AgeSelectBox />
            </Col>
            <Col lg={2}>{selectBelt()}</Col>
            <Col lg={2}>{selectType()}</Col>
            <Col lg={2}>{selectWeight()}</Col>
            <Col lg={2}>
            <button onClick={handleSubmit} style={{ backgroundColor: "#ff7a21", color:"white"}}> Select </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SearchDivision;

export const Label = styled.label`
  font-size: 10px;
`;

export const Select = styled.select`
  line-height: 1.5;
  background: black;
  color: white;
  border: 1px solid #ec7532;

  width: 12vw;
  text-indent: 0.5vw;

  option {
    color: white;
    background: black;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
