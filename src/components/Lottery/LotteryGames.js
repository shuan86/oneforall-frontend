import React, { useState, useEffect } from "react";
import {
  getLotteryStatus,
  sendLottery,
  LotteryNumber,
} from "../../modules/member";
import "../../public/css/LotteryGames.css";
import redNormal from "../../public/images/red_normal.png";
import redBad from "../../public/images/red_bad.png";
import snowNormal from "../../public/images/snow_normal.png";
import snowBad from "../../public/images/snow_bad.png";

const LotteryTalbe = (props, { lotteryTableFlag, onClickLotteryTableFlag }) => {
  return (
    <div className="lotteryTable">
      <h2 onClick={onClickLotteryTableFlag}>抽獎遊戲</h2>
      <button className="lotteryStartButton">積分抽獎</button>
      <div className={lotteryTableFlag ? "dialog" : "none"}>
        <div className="background"></div>
        {/* <div className="front">
                </div> */}
        {props.children}
      </div>
    </div>
  );
};

const LotteryCard = ({
  shuffle,
  onClickFlippedCard,
  flipped,
  id,
  cardResult,
  onClickRecesive,
}) => {
  return (
    <div
      className={shuffle ? "lotteryCard  shuffleCard" : "lotteryCard"}
      onClick={() => onClickFlippedCard(id)}
    >
      <div
        className={
          flipped[id] ? "lotteryCardInner flipped" : "lotteryCardInner"
        }
      >
        <div className="lotteryCardFace cardFront">
          <img src={cardResult.lotteryCardImg} alt="red" />
          <div className="lotteryCardDescription">
            {cardResult.lotteryCardDescription}
          </div>
          <button className="lotteryCardButton" onClick={onClickRecesive}>
            領取
          </button>
        </div>
        <div className="lotteryCardFace cardBack"></div>
      </div>
    </div>
  );
};

const GameChance = ({ onClickShuffleCard, mission }) => {
  return (
    <div className="gameChance">
      <span className="gameChanceDepiction">本日{mission}次數任務 1 / 1</span>
      <button className="gameChanceButton" onClick={onClickShuffleCard}>
        抽卡
      </button>
      {/* <button className="gameChanceButton" disabled="disabled" onClick={onClickDrawCard}>抽卡</button> */}
    </div>
  );
};
export const LotteryDrawCardGame = () => {
  const [shuffle, setShuffle] = useState(false);
  const [flipped, setFlipped] = useState([false, false, false]);
  const [flippedFlag, setFlippedFlag] = useState(false);
  const [cardResult, setCardResult] = useState({
    lotteryCardImg: snowNormal,
    lotteryCardDescription: "恭喜獲得ETH 0.0001",
  });
  const [lotteryTableFlag, setLotteryTableFlag] = useState(false);
  const [canJoinLottery, setCanJoinLottery] = useState(false);
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await getLotteryStatus();
      setCanJoinLottery((pre) => {
        if (result != null) {
          return result;
        }
        return pre;
      });
    };
    asyncFunc();
    return () => { };
  }, []);
  const onClickShuffleCard = async () => {
    setShuffle(!shuffle);
    setFlipped([false, false, false]);
    setFlippedFlag(false);
    const lotteryNumber = await sendLottery();
    setCardResult((pre) => {
      let result = {
        lotteryCardImg: snowNormal,
        lotteryCardDescription: "恭喜獲得ETH 0.0001",
      };
      if (lotteryNumber == LotteryNumber.snowNormal) {
        result.lotteryCardImg = snowNormal;
        result.lotteryCardDescription = "恭喜獲得ETH 0.000001";
      } else if (lotteryNumber == LotteryNumber.snowBad) {
        result.lotteryCardImg = snowBad;
        result.lotteryCardDescription = "恭喜獲得ETH 0.000002";
      } else if (lotteryNumber == LotteryNumber.redBad) {
        result.lotteryCardImg = redBad;
        result.lotteryCardDescription = "恭喜獲得ETH 0.000003";
      } else if (lotteryNumber == LotteryNumber.redNormal) {
        result.lotteryCardImg = redNormal;
        result.lotteryCardDescription = "恭喜獲得ETH 0.000004";
      }
      return result;
    });
  };
  const onClickFlippedCard = (id) => {
    let flip = flipped;
    let flag = flippedFlag; //偵測是否第一次
    if (flip[0] || flip[1] || flip[2]) return;
    if (!flippedFlag && shuffle) {
      switch (id) {
        case 0:
          flip = [true, false, false];
          break;
        case 1:
          flip = [false, true, false];
          break;
        case 2:
          flip = [false, false, true];
          break;
      }
      flag = true;
    }
    setFlippedFlag(flag); //偵測是否第一次
    setFlipped(flip);
  };
  const onClickRecesive = async () => {
    onClickShuffleCard();
    setCanJoinLottery(false);
  };

  const onClickLotteryTableFlag = () => {
    setLotteryTableFlag((pre) => !pre);
  };
  return (
    <div className="lotteryTable">
      {canJoinLottery && (
        <div>
          <h2>抽獎遊戲</h2>
          <button
            className="lotteryStartButton"
            onClick={onClickLotteryTableFlag}
          >
            積分抽獎
          </button>
        </div>
      )}
      <div className={lotteryTableFlag ? "dialog" : "none"}>
        {canJoinLottery && (
          <div className="background" onClick={onClickLotteryTableFlag}></div>
        )}
        <div className="front">
          {canJoinLottery && (
            <div className="gameArea">
              {flipped.map((value, index) => {
                return (
                  <LotteryCard
                    shuffle={shuffle}
                    onClickFlippedCard={onClickFlippedCard}
                    flipped={flipped}
                    id={index}
                    cardResult={cardResult}
                    onClickRecesive={onClickRecesive}
                  />
                );
              })}
            </div>
          )}
          {canJoinLottery && (
            <div className="gameRequest">
              <GameChance
                onClickShuffleCard={onClickShuffleCard}
                mission={"留言"}
              />
              <GameChance
                onClickShuffleCard={onClickShuffleCard}
                mission={"檢舉"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
