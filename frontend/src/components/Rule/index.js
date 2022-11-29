import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";

import "./style.css";

const Button = styled.button`
  width: 100%;
  text-align: left;
  color: white;
  background-color: transparent;
`;

const Number = styled.text`
  font-size: 40px;
  color: orange;
`;
const SNumber = styled.text`
  font-size: 33px;
  color: orange;
`;

const Text = styled.text`
  font-size: 22px;
  color: #dbdbdb;
`;
const SubText = styled.text`
  font-size: 17px;
  color: #dbdbdb;
`;

function ProductsDetails(props) {
  const [rule, setRule] = useState(true);
  const [participate, setParticipate] = useState(true);
  const [draw, setDraw] = useState(true);
  const [tOne, setTOne] = useState(true);
  const [tTwo, setTTwo] = useState(true);
  const [others, setOthers] = useState(true);
  return (
    <>
      <section className="fag-product-details section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="product-panel-list">
                <Tabs
                  defaultActiveKey="korean"
                  id="uncontrolled-tab-example"
                  className="product-tab"
                >
                  <Tab eventKey="korean" title={<h1>KOREAN</h1>}>
                    <br />
                    <div className="tab-gamess-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body">
                            <br />
                            <Button onClick={() => setRule(!rule)}>
                              <h2>
                                <Number>1.</Number>&nbsp;<span>대회 규칙</span>
                              </h2>
                            </Button>
                            <hr />
                            {rule && (
                              <h2>
                                <Text>
                                  *＜중요＞ 2021년 로얄 대회 규칙 일부 변경
                                  공지*
                                </Text>
                                <br />
                                <Text>
                                  로얄 대회는 IBJJF 규칙을 준수하되 2021년 일부
                                  수정 사항이 적용됨을 알려드립니다. 변경된
                                  규칙은 아래와 같습니다.
                                </Text>
                                <br />
                                <SubText>
                                  1. 어드벤티지 없는 도복 /노기 IBJJF 규칙으로
                                  진행됩니다
                                </SubText>
                                <br />
                                <SubText>
                                  2.로얄 노기 경기 규칙 또한 IBJJF 규칙을 따르되
                                  아래 규칙들을 금지하고, 사용할 시 즉시 실격
                                  처리됩니다.
                                </SubText>
                                <br />
                                <SubText>
                                  3. 니 리핑 (knee reaping) 은 허용되지 않으며,
                                  심각한 니 리핑은 즉시 실격 처리됩니다.
                                </SubText>
                                <br />
                                <SubText>
                                  4. 힐훅과 무릎을 비틀게 하는 공격은 즉시 실격
                                  처리됩니다.
                                </SubText>
                                <br />
                                <SubText>
                                  5. 어드가 없는 대회입니다 (홈페이지 규칙
                                  참고해주시기 바랍니다)
                                </SubText>
                                <br />
                                <br />
                                <Text>로얄 도복 + 노기 경기 규칙 변경</Text>
                                <br />
                                <SubText>
                                  1. 동점이 발생할 경우, 경기 퍼포먼스와 관계
                                  없이 가장 늦게 득점한 사람이 우승자로
                                  선언됩니다.
                                </SubText>
                                <br />
                                <SubText>
                                  2. 경기가 0-0으로 종료될 경우, 심판은 경기
                                  시간 동안 더 우세한 경기력을 보인 선수를
                                  우승자로 선언합니다. 무승부 경기에 대한 심사
                                  기준은 기존과 같으니 규칙 페이지 참고해주시기
                                  바랍니다
                                </SubText>
                                <br />
                                <SubText>
                                  3. 2019년 부터서 IBJJF 규칙에서 벗어나
                                  화이트벨트 부문에서 점핑가드를 금지할 것으로
                                  규칙을 변경하였습니다. 즉 화이트벨트 부문에서
                                  점핑가드를 사용할 시 패널티가 아닌 즉시
                                  DQ(실격) 처리 됩니다.
                                </SubText>
                              </h2>
                            )}
                            <br />
                            <Button
                              onClick={() => setParticipate(!participate)}
                            >
                              <h2>
                                <Number>2.</Number>&nbsp;
                                <span>참가자격 (선수 및 관람인원) 안내:</span>
                              </h2>
                            </Button>
                            <hr />
                            {participate && (
                              <h2>
                                <SubText>
                                  1. 코로나 백신 2차 접종(+2주) 완료자만 대회
                                  신청과 대회장 입장 가능합니다. (관람 인원도
                                  동일하게 접종완료+2주여야 입장 가능합니다.)
                                </SubText>
                                <br />
                                <SubText>
                                  2. 대회 당일 COOV 앱으로 접종 완료(+2주) 확인
                                  및 자가 문진표&체온 체크 후 입장 가능합니다.
                                </SubText>
                                <br />
                                <SubText>
                                  3. 성인부 및 고등부: *미접종완료자 일
                                  경우,48시간 전 실시한 PCR 테스트 음성 결과지
                                  지참 또는 문자통지서를 보여주시면 대회 신청 및
                                  대회장 입장 가능하십니다.
                                </SubText>
                                <br />
                                <SubText>
                                  4. 초/중등부: 백신 미접종완료자도 신청
                                  가능합니다.
                                </SubText>
                                <br />
                                <SubText>
                                  5. 대회장 내 음식물 반입 및 섭취 불가능합니다
                                  (식사는 체육관 밖에서 가능합니다)
                                </SubText>
                                <br />
                              </h2>
                            )}
                            <br />
                            <Button onClick={() => setDraw(!draw)}>
                              <h2>
                                <Number>3.</Number>&nbsp;
                                <span>무승부 경기에 대한 심사 기준</span>
                              </h2>
                            </Button>
                            <hr />
                            {draw && (
                              <h2>
                                <Text>
                                  승리 방식: 서브미션, 포인트, 심판 결정
                                </Text>
                                <br />
                                <SubText>
                                  리그로얄은 시합 규칙은 모든 선수들이 최대한
                                  역동적이고 흥미로운 방식으로 시합을 풀어나가는
                                  것에 포커스를 둔다. 심판은 아래 가이드라인을
                                  기준으로 무승부 경기의 승자를 판정한다. 아래
                                  카테고리 별은 높은 중요도 순서로 나열되어
                                  있으며, 따라서 (A)가 가장 중요한 기준이 된다.
                                </SubText>
                                <br />
                                <br />
                                <Button onClick={() => setTOne(!tOne)}>
                                  <h2>
                                    <SNumber>3.1</SNumber> 찬(For):
                                  </h2>
                                </Button>
                                <hr />
                                {tOne && (
                                  <h3>
                                    <Text>(A) 유효한 공격과 공격성</Text>
                                    <br />
                                    <SubText>
                                      1. 상대 선수의 Escape 노력을 유도하는
                                      유효한 서브미션 시도
                                    </SubText>
                                    <br />
                                    <SubText>
                                      2. 전반적인 경기 페이스의 주도권
                                    </SubText>
                                    <br />
                                    <SubText>
                                      3 테이크 다운, 유리한 포지션, 또는
                                      서브미션 시도를 위한 리스크 감수
                                    </SubText>
                                    <br />
                                    <Text>서브미션 시도에 대한 추가 설명:</Text>
                                    <br />
                                    <SubText>
                                      유효한 서브미션 시도는 상대 선수가
                                      노력해서 또는 리스크를 감수하면서라도
                                      이스케이프 하려는 상황을 뜻한다. 만약 한
                                      선수가 스톨링을 목적으로 서브미션 시도를
                                      한다면 (예를 들면 끝낼수 없는 서브미션을
                                      무한정 붙잡고 있을 때), 이와 같은 경우는
                                      유효한 서브미션 시도로 보지 않는다.
                                    </SubText>
                                    <br />
                                    <Text>(B) 득점에 가까운 포지션</Text>
                                    <br />
                                    <SubText>1. 테이크 다운</SubText>
                                    <br />
                                    <SubText>2. 스윕</SubText>
                                    <br />
                                    <SubText>3. 서브미션 세팅</SubText>
                                    <br />
                                    <Text>
                                      (C) 유효한 반격과 역동적인 이스케이프
                                    </Text>
                                    <br />
                                    <SubText>1. 테이크 다운 리버설</SubText>
                                    <br />
                                    <SubText>2. 극적인 이스케이프</SubText>
                                  </h3>
                                )}

                                <Button onClick={() => setTTwo(!tTwo)}>
                                  <h2>
                                    <SNumber>3.2</SNumber> 부(Against):
                                  </h2>
                                </Button>
                                <hr />
                                {tTwo && (
                                  <h3>
                                    <Text>
                                      (-A) 스톨링(공격적 움직임 부족)과 수동성
                                    </Text>
                                    <br />
                                    <SubText>
                                      1. 좋은 포지션을 활용하지 않을 경우
                                    </SubText>
                                    <br />
                                    <SubText>
                                      2. 거듭해서 뒤로 물러날 경우
                                    </SubText>
                                    <br />
                                    <SubText>
                                      3. 시합공간(경기 장) 밖으로 나갈 경우
                                    </SubText>
                                    <br />
                                    <SubText>
                                      4. 과도한 수비와 위험감수를 꺼릴 경우
                                    </SubText>
                                    <br />
                                    <SubText>5. 포지션 스톨링</SubText>
                                    <br />
                                    <Text>(-B) 불량한 스포츠맨십과 반칙</Text>
                                    <br />
                                    <SubText>
                                      1. 규칙에 어긋나는 서브미션 시도
                                    </SubText>
                                    <br />
                                    <SubText>2. 스트라이킹</SubText>
                                    <br />

                                    <SubText>3. 기타 규칙 위반</SubText>
                                    <br />
                                    <SubText>
                                      극단적인 경우, 심판 재량에 따라 선수를
                                      실격 처리할 수 있음(예를 들면, 침 뱉는
                                      등과 같은 행위)
                                    </SubText>
                                  </h3>
                                )}
                              </h2>
                            )}
                            <br />
                            <Button onClick={() => setOthers(!others)}>
                              <h2>
                                <Number>4.</Number>&nbsp;
                                <span>기타</span>
                              </h2>
                            </Button>
                            <hr />
                            {others && (
                              <h2>
                                <SubText>
                                  1. 심판은 경기의 주도권자/공격성이 높은 선수를
                                  우위시 한다.{" "}
                                </SubText>
                                <br />
                                <SubText>
                                  2.경기가 무승부로 끝날 경우, 심판은 상기
                                  언급된 가이드라인을 기준으로 승자를 판정한다.
                                </SubText>
                                <br />
                                <SubText>
                                  3. 선수들은 스톨링과 수동성을 적극 삼가주시고,
                                  경기 진행을 방해하는 스톨링과 같은 행위는 감점
                                  대상이다.
                                </SubText>
                                <br />
                                <SubText>
                                  4. 만약 서브미션 또는 점수의 차이가 없다면,
                                  경기 결과는 심판의 판정으로 결정된다.
                                </SubText>
                              </h2>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </Tab>
                  <Tab eventKey="english" title={<h1>ENGLISH</h1>}>
                    <br />
                    <div className="tab-gamess-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body">
                            <br />
                            <Button onClick={() => setRule(!rule)}>
                              <h2>
                                <Number>1.</Number>&nbsp;
                                <span>2021 Changes to Royale’s Rules</span>
                              </h2>
                            </Button>
                            <hr />
                            {rule && (
                              <h2>
                                <Text>
                                  ROYALE NOGI RULES follow the IBJJF rules
                                  except for the following:
                                </Text>
                                <br />
                                <Text>
                                  We follow the IBJJF rules with some
                                  modifications as of 2021. Please note the
                                  following changes to our ruleset:
                                </Text>
                                <br />
                                <SubText>
                                  1. No knee reaping is allowed and a
                                  disqualification may be given for severe knee
                                  reaping
                                </SubText>
                                <br />
                                <SubText>
                                  2. No heel hooks or any attacks that twist the
                                  knee are allowed and will result in
                                  disqualification
                                </SubText>
                                <br />
                                <SubText>
                                  3. There are no advantages in Royale and the
                                  victor of a tie match are decided by the
                                  criteria listed in the ruleset of the Royale
                                  home page.
                                </SubText>
                                <br />
                                <br />
                                <Text>ROYALE GI AND NOGI RULE CHANGE:</Text>
                                <br />
                                <SubText>
                                  1. In case of a tie in points, the last person
                                  to score shall be declared the winner
                                  regardless of the performance of the match.
                                </SubText>
                                <br />
                                <SubText>
                                  2. If a match ends 0-0, the winner will be
                                  declared by the referee as based upon the
                                  manner of which the competitor was able to
                                  display a dominant performance through a
                                  series of attacks.
                                </SubText>
                              </h2>
                            )}
                            <br />
                            <Button
                              onClick={() => setParticipate(!participate)}
                            >
                              <h2>
                                <Number>2.</Number>&nbsp;
                                <span>
                                  ENTRY REQUIREMENTS FOR SPECTATORS AND
                                  COMPETITORS:
                                </span>
                              </h2>
                            </Button>
                            <hr />
                            {participate && (
                              <h2>
                                <SubText>
                                  1. ・Spectators and competitors will need to
                                  present their COOV phone application pass to
                                  provide evidence of full vaccination
                                  (including the 14 days after the final
                                  vaccination).
                                </SubText>
                                <br />
                                <SubText>
                                  2. Spectators/competitors who are not fully
                                  vaccinated will be admitted only if they
                                  present a negative COVID test within 48 hours
                                  of entry (paper or text message will be
                                  required)
                                </SubText>
                                <br />
                                <SubText>
                                  3. Anyone who is unable to provide the
                                  necessary documentation will not be allowed
                                  entry into the venue. Anyone who provides a
                                  negative COVID test over the 48 hour window
                                  will not be admitted to the venue.
                                </SubText>
                                <br />
                                <SubText>
                                  4. No food is allowed within the stadium due
                                  to COVID-19 safety protocols (food can be
                                  eaten outside the stadium only)
                                </SubText>
                                <br />
                              </h2>
                            )}
                            <br />
                            <Button onClick={() => setDraw(!draw)}>
                              <h2>
                                <Number>3.</Number>&nbsp;
                                <span>A JUDGING SYSTEM FOR TIED MATCHES</span>
                              </h2>
                            </Button>
                            <hr />
                            {draw && (
                              <h2>
                                <Text>
                                  Methods of Victory: Submission, Points, or
                                  Judges’ Decision
                                </Text>
                                <br />
                                <SubText>
                                  The ruleset is designed to allow the athletes
                                  to use the skills they have obtained in their
                                  chosen grappling art, to bring excitement to
                                  the audience and showcase grappling in the
                                  most dynamic and interesting way possible, and
                                  to determine a winner in cases where there is
                                  no submission victory and the points of both
                                  competitors result in a draw. Judges decide
                                  the winner of the bout based on the following
                                  guidelines, positive and negative. The
                                  categories are in descending order of
                                  importance with A being the most important and
                                  carrying the most weight.
                                </SubText>
                                <br />
                                <br />
                                <Button onClick={() => setTOne(!tOne)}>
                                  <h2>
                                    <SNumber>3.1</SNumber> (For):
                                  </h2>
                                </Button>
                                <hr />
                                {tOne && (
                                  <h3>
                                    Effective Attacks and Aggression
                                    <br />
                                    <SubText>
                                      1. Legitimate submission attempts that
                                      cause the opponent to apply effort to
                                      escape
                                    </SubText>
                                    <br />
                                    <SubText>
                                      2. Pushing the pace of the bout
                                    </SubText>
                                    <br />
                                    <SubText>
                                      3 Taking risks in an attempt to gain a
                                      takedown, advantageous position or
                                      submission attempt
                                    </SubText>
                                    <br />
                                    <Text>Note on submission attempts :</Text>
                                    <br />
                                    <SubText>
                                      The definition of a legitimate hold is
                                      that the opponent has to apply effort or
                                      take a risk in order to escape. If a
                                      fighter uses a submission attempt as a
                                      positional stalling tactic (e.g. holding
                                      on indefinitely to a submission that they
                                      are not able to finish) then this would
                                      not be looked upon favourably.
                                    </SubText>
                                    <br />
                                    <Text>
                                      (B) Escalating Positional Control
                                    </Text>
                                    <br />
                                    <SubText>1. Takedowns</SubText>
                                    <br />
                                    <SubText>2. Sweeps</SubText>
                                    <br />
                                    <SubText>
                                      3. Improving position in order to set up a
                                      submission
                                    </SubText>
                                    <br />
                                    <Text>
                                      (C) Effective counter attacks and dynamic
                                      escapes
                                    </Text>
                                    <br />
                                    <SubText>
                                      1. Effectively countering takedowns,
                                      Reversal
                                    </SubText>
                                    <br />
                                    <SubText>2. Spectacular escapes</SubText>
                                  </h3>
                                )}

                                <Button onClick={() => setTTwo(!tTwo)}>
                                  <h2>
                                    <SNumber>3.2</SNumber> (Against):
                                  </h2>
                                </Button>
                                <hr />
                                {tTwo && (
                                  <h3>
                                    <Text>(-A) Stalling and Passivity:</Text>
                                    <br />
                                    <SubText>
                                      1. Not capitalising on good positions
                                    </SubText>
                                    <br />
                                    <SubText>
                                      2. Constantly moving backwards
                                    </SubText>
                                    <br />
                                    <SubText>
                                      3. Exiting the competition area
                                    </SubText>
                                    <br />
                                    <SubText>
                                      4. Being overly defensive and unwilling to
                                      take risks
                                    </SubText>
                                    <br />
                                    <SubText>
                                      5. Not attempting to advance position
                                    </SubText>
                                    <br />
                                    <Text>(-B) Poor sportsmanship / fouls</Text>
                                    <br />
                                    <SubText>
                                      1. Attempting illegal submissions or
                                      manoeuvres
                                    </SubText>
                                    <br />
                                    <SubText>2. Striking</SubText>
                                    <br />

                                    <SubText>
                                      3. Any other breach of the rules
                                    </SubText>
                                    <br />
                                    <SubText>
                                      In extreme cases the referee may
                                      disqualify or indicate that the judges are
                                      to mark a fighter down, at his discretion
                                    </SubText>
                                  </h3>
                                )}
                              </h2>
                            )}
                            <br />
                            <Button onClick={() => setOthers(!others)}>
                              <h2>
                                <Number>4.</Number>&nbsp;
                                <span>Notes</span>
                              </h2>
                            </Button>
                            <hr />
                            {others && (
                              <h2>
                                <SubText>
                                  1. The judge is encouraged to always look upon
                                  the aggressor / attacker more favourably than
                                  the defensive fighter.
                                </SubText>
                                <br />
                                <SubText>
                                  2. The judges are to base their opinion on the
                                  bout with consistent effort across all
                                  criteria required to swing the score in the
                                  direction of one of the fighters.
                                </SubText>
                                <br />
                                <SubText>
                                  3. Stalling and passivity are strongly
                                  discouraged and the judges should score
                                  appropriately, penalising any kind of stalling
                                  tactic that slows down the action.
                                </SubText>
                                <br />
                                <SubText>
                                  4. If there is no submission or lead on
                                  points, the bout will be decided by judges’
                                  decision.
                                </SubText>
                                <br />
                                <br />
                                <Text>The movement to remove advantages?</Text>
                                <br />
                                <SubText>
                                  {" "}
                                  You can see guys win entire tournaments
                                  without scoring one point in one match…
                                  without ever REALLY trying to win. We see this
                                  trend as detrimental to the development of the
                                  sport because it promotes a one-dimensional
                                  game bent on having the referee believe you
                                  almost got a sweep or submission, then to
                                  cling on for dear life until the end of the
                                  match. Our concern is that this kind of
                                  behavior is not only less of a crowd-pleaser
                                  but a poor way to develop your jiu jitsu as a
                                  competitor. By removing advantages, the
                                  competitors are given less ways to “almost”
                                  win and stall out for the remainder of the
                                  round. Matches that do not end in a submission
                                  and result in a stalemate in points will be
                                  determined by the following criteria:
                                </SubText>
                              </h2>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProductsDetails;
