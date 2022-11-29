import { axios, MultipartFileAxios } from "./axios";
import { saveToken, saveRefreshToken } from "./JWT";

// 회원 가입 API
export const signUpApi = async (UserCreateRequest) => {
  try {
    const res = await axios.post(
      "/users/register.do",
      // JSON.stringify(UserCreateRequest)
      UserCreateRequest
    );
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 로그인 API
export const loginApi = async (UserLoginRequestDto) => {
  try {
    const res = await axios.post("/users/login.do", UserLoginRequestDto);
    const {
      data: { accessToken, refreshToken },
    } = res;
    saveToken(accessToken);
    saveRefreshToken(refreshToken);
    console.log("로그인 성공");
    return res;
  } catch (err) {
    return err.response; //err안에 response로 담겨있음
  }
};

// 이메일 중복 체크
export const emailCheck = async (userEmail) => {
  try {
    const res = await axios.get(`/users/email-check.do/${userEmail}`);
    // console.log(res);
    return res;
  } catch (err) {
    return err.response; //err안에 response로 담겨있음
  }
};

// 경기 로그 초기화 API
export const gameLogInit = async (gameSeq) => {
  try {
    console.log("기록 초기화");
    return await axios.post(`/game-log/${gameSeq}`);
  } catch (err) {
    return err.response;
  }
};

// 경기 로그 업데이트 API
export const gameLogUpdate = async (GameLogUpdateRequestDto) => {
  try {
    console.log("기록 업데이트");
    console.log(GameLogUpdateRequestDto);
    const res = await axios.patch("/game-log", GameLogUpdateRequestDto);
    console.log(res);
    return res;
    // return await axios.patch('/game-log', GameLogUpdateRequestDto);
  } catch (err) {
    return err.response;
  }
};

// 경기 로그 조회 API
export const gameLogGet = async (gameSeq) => {
  try {
    console.log("기록 조회");
    const res = await axios.get(`/game-log/${gameSeq}`);
    console.log(res.data);
    return res.data;
    // return await axios.get(`/game-log/${gameSeq}`);
  } catch (err) {
    return err.response;
  }
};

// 리그 생성 API
export const createLeagueApi = async (createLeagueRequestDto) => {
  try {
    const res = await axios.post("/leagues", createLeagueRequestDto);
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 리그 포스터 추가 API
export const updateLeaguePosterApi = async (leagueSeq, leaguePoster) => {
  const formData = new FormData();
  formData.append("poster", leaguePoster);
  try {
    const res = await MultipartFileAxios.post(
      `/leagues/updatePoster/${leagueSeq}`,
      formData
    );
    // console.log("리그 포스터 추가");
    console.warn(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 페이지별 리그 리스트 호출 API
export const getLeagueListApi = async (page) => {
  try {
    // console.log("페이지별 리그 리스트 호출");
    const res = await axios.get(`/leagues/pages/${page}`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// 리그 정보 조회
export const getLeagueApi = async (leagueSeq) => {
  try {
    const res = await axios.get(`/leagues/${leagueSeq}`);
    console.log(res);
    return res;
  } catch (err) {}
};

// 게임 정보 조회
export const gameGet = async (gameSeq) => {
  try {
    console.log("게임 정보 조회");
    const res = await axios.get(`/game/${gameSeq}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// Division 조회 API
export const getDivisionSeqAPI = async (divisionRequestDto) => {
  try {
    const res = await axios.post("/division", divisionRequestDto);
    console.warn(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 선수 검색 API
export const getSearchResultApi = async (keyword) => {
  try {
    const res = await axios.get(`/applies/${keyword}`)
    return res;
  } catch (err) {
    return err.response;
  }
}
// 선수 개체 통과 버튼
export const changeWeightCheck = async (userSeq) => {
  try {
    const res = await axios.patch(`/applies/${userSeq}`)
    
  } catch (err) {
    return err.response;
  }
}

// 끝난 게임 정보 저장
export const endGameApi = async (gameScoreRequestDto) => {
  try {
    console.log("끝난 게임 정보 저장");
    console.log(gameScoreRequestDto);
    const res = await axios.post("/game/score.do", gameScoreRequestDto);
    console.log(res);
  } catch (err) {
    return err.response;
  }
};

//토너먼트 데이터 조회
export const getTournament = async (leagueSeq, divisionSeq) => {
  try {
    const res = await axios.get(`game?leagueSeq=${leagueSeq}&divisionSeq=${divisionSeq}`);

    return res;
  } catch (err) {
    return err.response;
  }
}

// 리그 신청 API
export const createApplyApi = async (CreateApplyRequestDto) => {
  try {
    console.log("리그 신청 API");
    console.log(CreateApplyRequestDto);
    const res = await axios.post("/applies", CreateApplyRequestDto);
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 리그 마감 후 게임 생성 API
export const createGameApi = async (leagueSeq) => {
  try {
    const res = await axios.get(`/game/finish/${leagueSeq}`);
    console.log(res);
    return res;
  } catch (err) {}
};

// 리그 신청 마감 API
export const closeApplyApi = async (leagueSeq) => {
  try {
    const res = await axios.patch(`/leagues/close/${leagueSeq}`);
    console.log(res);
    return res;
  } catch (err) {}
};

// 최근 경기 8개 불러오기
export const lastGameApi = async (leagueSeq) => {
  try {
    const res = await axios.get(`/game/last-game.do/${leagueSeq}`);
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
}

// 리그 신청 마감 여부 조회 API
export const getApplyClosedApi = async (leagueSeq) => {
  try {
    const res = await axios.get(`/leagues/close/${leagueSeq}`);
    console.warn(res);
    return res;
  } catch (err) {}
};