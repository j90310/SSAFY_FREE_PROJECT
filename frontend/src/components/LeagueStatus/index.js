import { React, useEffect, useState } from "react";
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

import "./style.css";
import { lastGameApi } from "../../api/api";

function LeagueStatus(props) {
  let { leagueSeq } = useParams();

  const [lastGames, setLastGames] = useState(null);

  useEffect(() => {

    async function getData() {
      const { data } = await lastGameApi(leagueSeq);
      console.log(data)
      setLastGames(data);
    }
    
    getData();

  }, []);

  return (
    <>
    { lastGames &&
      <div className="tab-body">
        {lastGames.map(
          (gameData) => (
            <>
              <p>{gameData.gameSeq}</p>
              <p>{gameData.division.divisionAge} / 
                {gameData.division.divisionBelt} / 
                {gameData.division.divisionGender} /
                {gameData.division.divisionType} / 
                {gameData.division.divisionWeight}
              </p>
              <p>{gameData.apply1name} {gameData.apply1score} : {gameData.apply2score} {gameData.apply2name}</p>
              <hr></hr>
            </>
          )
        )}  
      </div>
    }
    </>
  );
}

export default LeagueStatus;
