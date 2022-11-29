// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import "./style.css";
// import styled from "styled-components";

// // 소속, 체육관 전체 리스트
// const associationArray = [
//   "얼라이언스",
//   "호드",
//   "불타는 군단",
//   "고대 신",
//   "티탄",
//   "공허의 존재",
//   "어둠땅",
// ];
// const gymNameArray = [
//   "스톰윈드 체육관",
//   "오그리마 체육관",
//   "언더시티 체육관",
//   "썬더블러프 체육관",
//   "달라란 체육관",
//   "다르나서스 체육관",
//   "실버문 체육관",
//   "아이언포지 체육관",
// ];
// // ----------------
// function Contact(props) {
//   // 입금자명, 소속, 체육관명, 벨트, 성별, 나이, 종목, 체급, 동의사항 1, 2, 3의 기본값들
//   const [payee, setPayee] = useState("");
//   const [association, setAssociation] = useState("");
//   const [gymName, setGymName] = useState("");
//   const [belt, setBelt] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");
//   const [type, setType] = useState("");
//   const [bodyScale, setBodyScale] = useState("");
//   const [agreeOne, setAgreeOne] = useState(false);
//   const [agreeTwo, setAgreeTwo] = useState(false);
//   const [agreeThree, setAgreeThree] = useState(false);
//   // ---------------

//   // 자동완성기능 관련 1. 체육관, 소속명이 입력이 되어 있는가, 2. 체육관, 소속 드롭박스 리스트는 무엇을 참고하는가, 3. 드롭박스 스타팅 포인트가 어딘가
//   const [isGymName, setIsGymName] = useState(false);
//   const [gymNameList, setGymNameList] = useState(gymNameArray);
//   const [isAssociation, setIsAssociation] = useState(false);
//   const [associationList, setAssociationList] = useState(associationArray);
//   const [dropDownGymIndex, setDropDownGymIndex] = useState(-1);
//   const [dropDownAssociationIndex, setDropDownAssociationIndex] = useState(-1);

//   // ----------------

//   // 체육관과 소속 드롭박스에 무슨 리스트를 넣을지 결정해라
//   const showDropDownGymList = () => {
//     //만약 아무것도 입력이 되지 않았다면
//     if (gymName === "") {
//       //입력되어 있지 않은 상태이고, 드롭박스에 들어갈 리스트 또한 null이다.
//       setIsGymName(false);
//       setGymNameList([]);
//       //만약 무언가 값이 입력이 되었다면
//     } else {
//       // 전체 체육관 리스트에 필터 매소드와 인클루드 매소드를 적용해서
//       const choosenTextList = gymNameArray.filter((textItem) =>
//         textItem.includes(gymName)
//       );
//       //input값과 유사한 리스트의 요소를 가져와
//       setGymNameList(choosenTextList);
//     }
//   };
//   const showDropDownAssociationList = () => {
//     if (association === "") {
//       setIsAssociation(false);
//       setAssociationList([]);
//     } else {
//       const choosenTextList = associationArray.filter((textItem) =>
//         textItem.includes(association)
//       );
//       setAssociationList(choosenTextList);
//     }
//   };
//   //-----------------

//   //소속과 체육관의 input값이 변경(전부 삭제 제외)되면 이하를 실행
//   const changeGymValue = (e) => {
//     //체육관명을 입력값으로 바꾸고
//     setGymName(e.target.value);
//     //입력상태를 true로 바꾸자
//     setIsGymName(true);
//   };
//   const changeAssociationValue = (e) => {
//     setAssociation(e.target.value);
//     setIsAssociation(true);
//   };
//   //--------------------

//   //소속과 체육관의 input창에 무언가를 입력해 나온 자동완성 드롭박스의 요소를 클릭하면
//   const clickDropDownGymItem = (clickedItem) => {
//     //체육관명을 클릭한 요소의 value로 바꾸고
//     setGymName(clickedItem);
//     //드롭박스를 끄기 위해 입력상태만 false로 바꿔주자
//     setIsGymName(false);
//   };
//   //gymName이 변경될때마다 상단의 showDropDownGymList를 실행하라
//   useEffect(showDropDownGymList, [gymName]);

//   const clickDropDownAssociationItem = (clickedItem) => {
//     setAssociation(clickedItem);
//     setIsAssociation(false);
//   };
//   useEffect(showDropDownAssociationList, [association]);
//   //-----------------------

//   //Select는 styledcomponents로 정의, 선택한 값이 바뀔 때마다 상단의 기본값들을 변경하라
//   const BeltSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setBelt(e.target.value);
//         }}
//         value={belt}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="white beginner">
//           White 비기너 (2그랄 이하) - 어덜트와 고등부만 가능합니다. 랭킹 및
//           촬영에서 제외되고, 앱솔 참가가 불가능합니다.
//         </option>
//         <option value="white">
//           White (무그랄 - 4그랄 모두 가능) - 해당 부문은 랭킹/촬영이 진행됩니다.
//         </option>
//         <option value="blue">Blue</option>
//         <option value="purple">Purple</option>
//         <option value="brown">Brown</option>
//         <option value="black">Black</option>
//       </Select>
//     );
//   };
//   const TypeSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setType(e.target.value);
//         }}
//         value={type}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="adlut">기 (gi)</option>
//         <option value="master1">기 앱솔 (gi-absol)</option>
//         <option value="master2">노기 (nogi)</option>
//         <option value="master3">노기 앱솔 (nogi-absol)</option>
//       </Select>
//     );
//   };
//   const BeginnerTypeSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setType(e.target.value);
//         }}
//         value={type}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="adlut">기 (gi)</option>
//         <option value="master2">노기 (nogi)</option>
//       </Select>
//     );
//   };

//   const GenderSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setGender(e.target.value);
//         }}
//         value={gender}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="male">남성부 (Male)</option>
//         <option value="female">여성부 (Female)</option>
//       </Select>
//     );
//   };
//   const AgeSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setAge(e.target.value);
//         }}
//         value={age}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="adult">Adult</option>
//         <option value="master1">Master 1 (만 30세부터)</option>
//         <option value="master2">Master 2 (만 35세부터)</option>
//         <option value="master3">Master 3 (만 40세부터)</option>
//         <option value="초등부">초등부 (Elementary)</option>
//         <option value="중등부">중등부 (Middle School)</option>
//         <option value="고등부">고등부 (High School)</option>
//       </Select>
//     );
//   };
//   const BeginnerAgeSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setAge(e.target.value);
//         }}
//         value={age}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="adult">Adult</option>
//         <option value="고등부">고등부 (High School)</option>
//       </Select>
//     );
//   };

//   const AdultMasterSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setBodyScale(e.target.value);
//         }}
//         value={bodyScale}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="-57.5kg">-57.5kg</option>
//         <option value="-64kg">-64kg</option>
//         <option value="-70kg">-70kg</option>
//         <option value="-76kg">-76kg</option>
//         <option value="-82.3kg">-82.3kg</option>
//         <option value="-88.3kg">-88.3kg</option>
//         <option value="-94.3kg">-94.3kg</option>
//         <option value="+94.3kg">+94.3kg</option>
//       </Select>
//     );
//   };

//   const FemaleMiddleHighSelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setBodyScale(e.target.value);
//         }}
//         value={bodyScale}
//       >
//         <option value="">선택하여 주세요</option>
//         <option value="-47.5kg">-47.5kg</option>
//         <option value="-53.5kg">-53.5kg</option>
//         <option value="-58.5kg">-58.5kg</option>
//         <option value="-64.0kg">-64.0kg</option>
//         <option value="-69.0kg">-69.0kg</option>
//         <option value="-74.0kg">-74.0kg</option>
//         <option value="-79.3kg">-79.3kg</option>
//         <option value="+79.3kg">+79.3kg</option>
//       </Select>
//     );
//   };
//   const ElemantarySelectBox = () => {
//     return (
//       <Select
//         onChange={(e) => {
//           setBodyScale(e.target.value);
//         }}
//         value={bodyScale}
//       >
//         <option value="">선택하여 주세요</option>

//         <option value="-30kg">-30kg</option>
//         <option value="-35kg">-35kg</option>
//         <option value="-40kg">-40kg</option>
//         <option value="-45kg">-45kg</option>
//         <option value="-50kg">-50kg</option>
//         <option value="-55kg">-55kg</option>
//         <option value="+55kg">+55kg</option>
//       </Select>
//     );
//   };
//   // ----------------------------------------------------------------

//   // 버튼을 누르면 이하를 실행
//   const message = function () {
//     // 이 요소들에 전부 값이 있다면
//     if (
//       payee &&
//       association &&
//       gymName &&
//       belt &&
//       gender &&
//       age &&
//       type &&
//       bodyScale
//     ) {
//       // 상단의 요소에 전부 값이 있고 동의체크를 전부 눌렀다면
//       if (agreeOne && agreeTwo && agreeThree) {
//         // pass
//         {
//           alert("pass");
//         }
//       } else {
//         alert("전부 동의해주세요");
//       }
//     } else {
//       alert("입력하지 않은 부분이 있습니다.");
//     }
//   };
//   // ---------------

//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       {/* Contact Area Start */}
//       <section>
//         <Container>
//           <Row>
//             <div className="container-box">
//               <label>
//                 <h2>• 입금자명 (Name of Payee)*</h2>
//                 <br />
//                 <input
//                   className="input-style"
//                   placeholder="이름-핸드폰 뒷자리 4자리(홍길동-1234)"
//                   // input창의 값이 바뀔 때마다 상단의 기본값을 input창의 값으로
//                   onChange={(e) => {
//                     setPayee(e.target.value);
//                   }}
//                 ></input>
//               </label>
//             </div>
//             <div className="container-box">
//               <label>
//                 <h2>• 소속 (Association)*</h2>
//                 <br />
//                 <div isAssociation={isAssociation}>
//                   <input
//                     type="text"
//                     value={association}
//                     className="input-style"
//                     placeholder="월드 오브 워크래프트 주짓수팀"
//                     // input창의 값이 바뀔 때마다 상단의 기본값을 input창의 값으로 하는 공식이 changeAssociationValue에 이미 포함
//                     onChange={changeAssociationValue}
//                   ></input>
//                 </div>
//                 {/* association에 값이 존재한다면 이하를 보여줘 */}
//                 {isAssociation && (
//                   // styledcomponents로 정의된 DropDownBox 요소
//                   <DropDownBox>
//                     {/* 리스트 중 입력한 input값이 include인 값이 없다면  */}
//                     {associationList.length === 0 && (
//                       <DropDownItem>해당하는 소속이 없습니다</DropDownItem>
//                     )}
//                     {/* 리스트 중 입력한 input값이 include인 값이 모인 리스트의 모든 요소에 이하를 실행 */}
//                     {associationList.map((dropDownItem, dropDownIndex) => {
//                       return (
//                         <DropDownItem
//                           key={dropDownIndex}
//                           //상단에 설명됨
//                           onClick={() =>
//                             clickDropDownAssociationItem(dropDownItem)
//                           }
//                           onMouseOver={() =>
//                             setDropDownAssociationIndex(dropDownIndex)
//                           }
//                         >
//                           {dropDownItem}
//                         </DropDownItem>
//                       );
//                     })}
//                   </DropDownBox>
//                 )}
//               </label>
//               <br />
//               <br />
//               <label>
//                 <h2>• 체육관명 (Gym Name)*</h2>
//                 <br />
//                 <div isGymName={isGymName}>
//                   <input
//                     type="text"
//                     value={gymName}
//                     className="input-style"
//                     placeholder="월드 오브 워크래프트 체육관"
//                     onChange={changeGymValue}
//                   ></input>
//                 </div>
//                 {isGymName && (
//                   <DropDownBox>
//                     {gymNameList.length === 0 && (
//                       <DropDownItem>해당하는 체육관이 없습니다</DropDownItem>
//                     )}
//                     {gymNameList.map((dropDownItem, dropDownIndex) => {
//                       return (
//                         <DropDownItem
//                           key={dropDownIndex}
//                           onClick={() => clickDropDownGymItem(dropDownItem)}
//                           onMouseOver={() => setDropDownGymIndex(dropDownIndex)}
//                         >
//                           {dropDownItem}
//                         </DropDownItem>
//                       );
//                     })}
//                   </DropDownBox>
//                 )}
//               </label>
//             </div>
//             <div className="container-box">
//               <h2>
//                 벨트, 성별과 나이를 선택해 주시면 참가하실 수 있는 종목이
//                 나옵니다.
//               </h2>
//               <br />
//               <label>
//                 <h2>• 벨트 (Belt)*</h2>
//                 <br />
//                 <BeltSelectBox></BeltSelectBox>
//               </label>
//               <br />
//               <br />
//               <label>
//                 <h2>• 종목 (Type)*</h2>
//                 <br />
//                 {/* 화이트비기너는 앱솔 불가, 고등부 성인부만 가능 */}
//                 {belt != "white beginner" && <TypeSelectBox></TypeSelectBox>}
//                 {belt === "white beginner" && (
//                   <BeginnerTypeSelectBox></BeginnerTypeSelectBox>
//                 )}
//               </label>
//               <br />
//               <br />
//               <label>
//                 <h2>• 성별 (Gender)*</h2>
//                 <br />
//                 <GenderSelectBox></GenderSelectBox>
//               </label>
//               <br />
//               <br />
//               <label>
//                 <h2>• 나이 (Age)*</h2>
//                 <br />
//                 {belt != "white beginner" && <AgeSelectBox></AgeSelectBox>}
//                 {belt === "white beginner" && (
//                   <BeginnerAgeSelectBox></BeginnerAgeSelectBox>
//                 )}
//               </label>
//             </div>
//             {age === "adult" && gender === "male" && (
//               <div className="container-box">
//                 <label>
//                   <h2>• 남성 성인부(Adult Class)*</h2>
//                   <br />
//                   <AdultMasterSelectBox></AdultMasterSelectBox>
//                 </label>
//                 <br />
//                 <br />
//               </div>
//             )}

//             {belt != "white beginner" &&
//               age === "master1" &&
//               gender === "male" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 남성 마스터 1(Master 1 Class)*</h2>
//                     <br />
//                     <AdultMasterSelectBox></AdultMasterSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" &&
//               age === "master2" &&
//               gender === "male" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 남성 마스터 2(Master 2 Class)*</h2>
//                     <br />
//                     <AdultMasterSelectBox></AdultMasterSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" &&
//               age === "master3" &&
//               gender === "male" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 남성 마스터 3(Master 3 Class)*</h2>
//                     <br />
//                     <AdultMasterSelectBox></AdultMasterSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" && age === "초등부" && gender === "male" && (
//               <div className="container-box">
//                 <label>
//                   <h2>• 남성 초등부(Elementary Class)*</h2>
//                   <br />
//                   <ElemantarySelectBox></ElemantarySelectBox>
//                 </label>
//                 <br />
//                 <br />
//               </div>
//             )}
//             {belt != "white beginner" && age === "중등부" && gender === "male" && (
//               <div className="container-box">
//                 <label>
//                   <h2>• 남성 중등부(Middle Student Class)*</h2>
//                   <br />
//                   <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                 </label>
//                 <br />
//                 <br />
//               </div>
//             )}
//             {age === "고등부" && gender === "male" && (
//               <div className="container-box">
//                 <label>
//                   <h2>• 남성 고등부(High Student Class)*</h2>
//                   <br />
//                   <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                 </label>
//                 <br />
//                 <br />
//               </div>
//             )}
//             {age === "adult" && gender === "female" && (
//               <div className="container-box">
//                 <label>
//                   <h2>• 여성 성인부(Adult Class)*</h2>
//                   <br />
//                   <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                 </label>
//                 <br />
//                 <br />
//               </div>
//             )}

//             {belt != "white beginner" &&
//               age === "master1" &&
//               gender === "female" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 여성 마스터 1(Master 1 Class)*</h2>
//                     <br />
//                     <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" &&
//               age === "master2" &&
//               gender === "female" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 여성 마스터 2(Master 2 Class)*</h2>
//                     <br />
//                     <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" &&
//               age === "master3" &&
//               gender === "female" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 여성 마스터 3(Master 3 Class)*</h2>
//                     <br />
//                     <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" &&
//               age === "초등부" &&
//               gender === "female" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 여성 초등부(Elementary Class)*</h2>
//                     <br />
//                     <ElemantarySelectBox></ElemantarySelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {belt != "white beginner" &&
//               age === "중등부" &&
//               gender === "female" && (
//                 <div className="container-box">
//                   <label>
//                     <h2>• 여성 중등부(Middle Student Class)*</h2>
//                     <br />
//                     <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                   </label>
//                   <br />
//                   <br />
//                 </div>
//               )}
//             {age === "고등부" && gender === "female" && (
//               <div className="container-box">
//                 <label>
//                   <h2>• 여성 고등부(High Student Class)*</h2>
//                   <br />
//                   <FemaleMiddleHighSelectBox></FemaleMiddleHighSelectBox>
//                 </label>
//                 <br />
//                 <br />
//               </div>
//             )}

//             <div className="container-box">
//               <p>
//                 <Label>
//                   •＜중요＞로얄 대회 규칙 일부 변경 공지*로얄 대회는 IBJJF
//                   규칙을 준수하되 2021년 일부 수정 사항이 적용됨을 알려드립니다.
//                   변경된 규칙은 아래와 같습니다.로얄 노기 경기 규칙 또한 IBJJF
//                   규칙을 따르되 아래 규칙들을 금지하고, 사용할 시 즉시 실격
//                   처리됩니다.1. 니 리핑 (knee reaping) 은 허용되지 않으며,
//                   심각한 니 리핑은 즉시 실격 처리됩니다.2. 힐훅과 무릎을 비틀게
//                   하는 공격은 즉시 실격 처리됩니다.3. 어드가 없는 대회입니다
//                   (홈페이지 규칙 참고해주시기 바랍니다)로얄 도복 + 노기 경기
//                   규칙 변경:동점이 발생할 경우, 경기 퍼포먼스와 관계 없이 가장
//                   늦게 득점한 사람이 우승자로 선언됩니다.경기가 0-0으로 종료될
//                   경우, 심판은 경기 시간 동안 더 우세한 경기력을 보인 선수를
//                   우승자로 선언합니다. 무승부 경기에 대한 심사 기준은 기존과
//                   같으니 아래를 참고해주시기 바랍니다. Changes to Royale's
//                   Rules. We follow the IBJJF rules with some modifications as of
//                   2021. Please note the following changes to our ruleset:ROYALE
//                   NOGI RULES follow the IBJJF rules except for the following: No
//                   knee reaping is allowed and a disqualification may be given
//                   for severe knee reaping. No heel hooks or any attacks that
//                   twist the knee are allowed and will result in
//                   disqualification. There are no advantages in Royale and the
//                   victor of a tie match are decided by the criteria listed in
//                   the ruleset of the Royale home page. ROYALE GI AND NOGI RULE
//                   CHANGE: In case of a tie in points, the last person to score
//                   shall be declared the winner regardless of the performance of
//                   the match. If a match ends 0-0, the winner will be declared by
//                   the referee as based upon the criteria listed on our rules
//                   page.*
//                   <br />
//                   <input
//                     className="checkbox-style"
//                     type="checkbox"
//                     onChange={() => setAgreeOne(!agreeOne)}
//                   />
//                   &nbsp;&nbsp; 예, 동의합니다
//                 </Label>
//               </p>
//               <p>
//                 <Label>
//                   •대회장 내 음식물 반입 및 섭취 불가능합니다 (식사는 체육관
//                   밖에서 가능합니다) * No food is allowed within the stadium due
//                   to COVID-19 safety protocols (food can be eaten outside the
//                   stadium only)*
//                   <br />
//                   <input
//                     className="checkbox-style"
//                     type="checkbox"
//                     onChange={() => setAgreeTwo(!agreeTwo)}
//                   />
//                   &nbsp;&nbsp; 예, 동의합니다
//                 </Label>
//               </p>
//               <p>
//                 <Label>
//                   (필수) 본인은 영상촬영에 있어 개인정보 (나이, 성별, 이름,
//                   거주지) 및 초상권, 방송권, 배포권, 영상에 대한 저작권에 대하여
//                   어떠한 이의도 없으며, 촬영된 후의 결과물에 대해서는 제작사에게
//                   저작권이 있음을 동의합니다. (경기 동영상은 리그로얄 website와
//                   youtube로 업로드 됩니다) I understand that all matches at this
//                   event will be filmed and that footage will be released on
//                   youtube. I consent to being filmed and for the material to be
//                   put up for public viewing.*
//                   <br />
//                   <input
//                     className="checkbox-style"
//                     type="checkbox"
//                     onChange={() => setAgreeThree(!agreeThree)}
//                   />
//                   &nbsp;&nbsp; 예, 동의합니다
//                 </Label>
//               </p>
//             </div>
//             <StyledButton onClick={message}>SUBMIT NOW</StyledButton>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default Contact;

// export const Label = styled.label`
//   font-size: 20px;
// `;

// const StyledButton = styled.button`
//   color: ${(props) => props.color || "white"};
//   background: ${(props) => props.background || "orange"};
//   height: 66px;
//   width: 300px;
//   font-size: 2rem;
//   border-top-right-radius: 30px;
//   border-bottom-left-radius: 30px;
//   cursor: pointer;
//   font-weight: bold;
// `;
// export const Select = styled.select`
//   width: 1000px;
//   height: 63px;
//   font-size: 1.77rem;
//   line-height: 1.5;
//   background: black;
//   color: white;
//   border: 2px solid;

//   option {
//     color: white;
//     background: black;
//     padding-top: 10px;
//     padding-bottom: 10px;
//   }
// `;
// const DropDownBox = styled.ul`
//   width: 700px;
//   font-size: 1.77rem;
//   color: #ffffff;
//   background-color: #251414;
//   padding: 16 16px;
// `;

// const DropDownItem = styled.li`
//   padding: 16 16px;
//   margin-bottom: 10px;
//   margin-top: 10px;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-left: 20px;
// `;
