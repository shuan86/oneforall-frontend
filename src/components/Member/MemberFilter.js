import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../public/css/NewsCard.css";
const Filter = ({ setMemberFliter }) => {
  const isVistor = useSelector((state) => state.memberStatus.isVistor);
  const isReviewer = useSelector((state) => state.memberStatus.isReviewer);
  const isPublisher = useSelector((state) => state.memberStatus.isPublisher);
  const tmp = useSelector((state) => state.memberStatus);
  const [bgColor, setBgColor] = useState(["var(--navy-blue)", "", ""]);
  const [ftColor, setFtColor] = useState(["var(--white)", "", ""]);
  let reviewerFt = "";
  let publisherFt = "";
  useEffect(() => {
    if (!isReviewer) {
      reviewerFt = "var(--black-alpha-20)";
    }
    if (!isPublisher) {
      publisherFt = "var(--black-alpha-20)";
    }
    // isReviewer ? null : {reviewerBg="var(--black-alpha-40)",reviewerFt="var(--black-alpha-20)"};
    // isPublisher ? null : {publisherBg="var(--black-alpha-40)",publisherFt="var(--black-alpha-20)"};
    setFtColor(["var(--white)", reviewerFt, publisherFt]);
  }, [isReviewer, isPublisher]);

  const onClickFilter = (memberType) => {
    if (memberType == "vistor") {
      //vistor
      setMemberFliter([true, false, false]);
      if (!isReviewer) {
        if (!isPublisher) {
          setBgColor(["var(--navy-blue)", "", ""]);
          setFtColor([
            "var(--white)",
            "var(--black-alpha-20)",
            "var(--black-alpha-20)",
          ]);
          return;
        }
      }
      if (isReviewer) {
        if (!isPublisher) {
          setBgColor(["var(--navy-blue)", "", ""]);
          setFtColor(["var(--white)", "", "var(--black-alpha-20)"]);
          return;
        }
      }
      setBgColor(["var(--navy-blue)", "", ""]);
      setFtColor(["var(--white)", "", ""]);
    } else if (memberType == "reviewer") {
      //reviewer
      if (!isReviewer) return;
      if (!isPublisher) {
        setBgColor(["", "var(--navy-blue)", ""]);
        setFtColor(["", "var(--white)", "var(--black-alpha-20)"]);
        setMemberFliter([false, true, false]);
        return;
      }
      setMemberFliter([false, true, false]);
      setBgColor(["", "var(--navy-blue)", ""]);
      setFtColor(["", "var(--white)", ""]);
    } else {
      //publisher
      if (!isPublisher) return;
      setMemberFliter([false, false, true]);
      setBgColor(["", "", "var(--navy-blue)"]);
      setFtColor(["", "", "var(--white)"]);
    }
  };
  return (
    <div>
      <div className="filter">
        <button
          href="#"
          onClick={() => onClickFilter("vistor")}
          style={{
            backgroundColor: bgColor[0],
            color: ftColor[0],
          }}
        >
          觀看者
        </button>
        <button
          href="#"
          onClick={() => onClickFilter("reviewer")}
          style={{
            backgroundColor: bgColor[1],
            color: ftColor[1],
          }}
        >
          審核者
        </button>
        <button
          href="#"
          onClick={() => onClickFilter("publisher")}
          style={{
            backgroundColor: bgColor[2],
            color: ftColor[2],
          }}
        >
          發文者
        </button>
      </div>
    </div>
  );
};

export default Filter;
