import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import styled from "styled-components";
import { getSearchResultApi } from "../../api/api";
import { changeWeightCheck } from "../../api/api";
import SearchIcon from '@mui/icons-material/Search'



const StyledButton = styled.button`
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "orange"};
  height: 66px;
  width: 300px;
  font-size: 2rem;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 50px;
`;

const SearchBox = styled.div`
  width: 96%;
  position: relative;
  padding: 2%;
`

const Label = styled.label`
  position: relative;

  input {
    border: none;
    padding: 0 15px;
    height: 55px;
  }
  button {
    position: absolute;
    top: 35px;
  }
`;

const SearchIconBox = styled.div`
  position: absolute;
  top: 1.7rem;
  right: 3.0rem;
  height: calc(100% - 2rem);
  aspect-ratio: 1/1;
  cursor: pointer;
`

const SearchIcon1 = styled(SearchIcon)`
  width: 75% !important;
  height: 75% !important;
  padding: 5%;
  color: #ffffff;
`


function Index() {

    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState('');
    const [yesOrNo, setYesOrNo] = useState([]);
    const [renderingCheck, setRenderingCheck] = useState(false);
    const Rerendering = (idx) => { 
        console.log(idx)
        console.log(yesOrNo[0])
        let temp = yesOrNo;
        temp[idx] = !temp[idx]
        setYesOrNo(temp);
};


    const searchClick = async () => {
        const result  = await getSearchResultApi(keyword);
        setResult(result.data);
        let temp = []
        for (let i = 0; i < result.data.length; i++) {
            temp.push(result.data[i].bodyMeasurements)
        }
        setYesOrNo(temp)
    }

    const weightCheck = async (userSeq) => {
        await changeWeightCheck(userSeq);
    }

    useEffect(() => {
        if (keyword) searchClick()
    }, [])
    return (
        <Container className="fag-contact-details-area">
            <div className="button-area">
                <SearchBox className="container-style">
                    <input className="input-style" placeholder='???????????? ???????????????'
                        value={keyword}
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if (e.code === "Enter") {
                                searchClick();
                            }
                        }}
                    />
                    <SearchIconBox>
                        <SearchIcon1 onClick={searchClick} />
                    </SearchIconBox>
                </SearchBox>

                <table className="table-style">
                    <tr className="th-style">
                        <th className="th-subject-style">??????</th>
                        <th className="th-subject-style">??????</th>
                        <th className="th-subject-style">????????? (e-Mail)</th>
                        <th className="th-subject-style">?????? ??????</th>
                    </tr>
                    {/* searchInput??? True?????? ????????? ????????? */}
                    {result && result.map((key, idx) => (
                        <tr key={idx} className="th-style">
                            <th className="th-style">{key.applySeq}</th>
                            <th className="th-style">{key.name}</th>
                            <th className="th-style">{key.phoneNumber}</th>
                            <th className="th-style">
                                {yesOrNo[idx] ===true ? <button className="button-style-second" onClick={() => {
                                    weightCheck(key.userSeq)
                                    Rerendering(idx);
                                    setRenderingCheck(!renderingCheck)
                                }} value={yesOrNo[idx]}> ?????? ??????</button>
                                    : <button className="button-style-third" onClick={() => {
                                        weightCheck(key.userSeq)
                                        Rerendering(idx);
                                        setRenderingCheck(!renderingCheck)
                                    }} value={yesOrNo[idx]}> ?????? ?????????</button>}
                            </th>
                            {/* ?????? ???????????? ?????? ?????? ?????? ????????? ??? ??? ?????? */}
                              
                        </tr>
                     ))}
                </table>
            </div>
        </Container>
    )
}

export default Index