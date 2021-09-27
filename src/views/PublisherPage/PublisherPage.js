import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MemberCard,
  VistorRight,
  ReviewerRight,
} from "../../components/Member/MemberCard";
import { ArticleTagKind } from "../../modules/article";
import "../../public/css/PublicerPage.css";
import BackupRoundedIcon from "@material-ui/icons/BackupRounded";
import { postNews } from "../../modules/article";
import {
  paidArticleDeposit,
  checkContractIsOpen,
} from "../../modules/smartcontract";
import { useHistory } from "react-router-dom";

const PublisherPage = () => {
  const [titleState, setTitleState] = useState("");
  const [authorNameState, setAuthorNameState] = useState("");

  const [contentState, setContentState] = useState("");
  const [depositState, setDepositState] = useState(0);

  const [tagsState, setTags] = useState([]);
  const [imageUrlState, setImageUrlState] = useState("");

  const [imageState, setImageState] = useState("");
  const [imageBlob, setImageBlob] = useState("");

  let imgArrayBuffter;
  const tagsNameArray = Object.keys(ArticleTagKind);
  const history = useHistory();
  useEffect(() => {
    return () => { };
  }, []);

  const onClickPostNews = async (e) => {
    e.preventDefault();
    const time = "";
    const deposit = 0;

    const data = await postNews(
      titleState,
      authorNameState,
      contentState,
      time,
      deposit,
      imageBlob,
      imageUrlState,
      tagsState
    );
    if (data.articleId && checkContractIsOpen()) {
      await paidArticleDeposit(data.articleId);
    }
    // history.push('/Index')
  };
  return (
    <div className="container">
      <form action="" className="postArticleForm">
        <div className="publisherPersonalData">
          <div className="formInput">
            <label htmlFor="">新聞來源</label>
            <input type="text" />
          </div>
          <div className="formInput">
            <label htmlFor="">署名作者</label>
            <input
              type="text"
              name="author"
              value={authorNameState}
              onChange={(event) => {
                const value = event.target.value;
                setAuthorNameState(value);
              }}
            />
          </div>
        </div>
        <div className="formInput">
          <label htmlFor="">新聞標題</label>
          <input
            type="text"
            name="title"
            value={titleState}
            onChange={(event) => {
              const value = event.target.value;
              setTitleState(value);
            }}
          />
        </div>
        <div className="formInput">
          <label htmlFor="">分類標籤</label>
          <div className="formHashtagList">
            {tagsNameArray.map((value, index) => {
              return (
                <div key={`div${index}`} className="formHashtag">
                  <input
                    type="checkbox"
                    value={value}
                    id={index}
                    onChange={(event) => {
                      const value = event.target.value;
                      setTags((preArray) => {
                        if (preArray.includes(value)) {
                          for (let i = 0; i < preArray.length; i++) {
                            if (value == preArray[i]) {
                              preArray.splice(i, 1);
                              break;
                            }
                          }
                        } else {
                          preArray.push(value);
                        }
                        return preArray;
                      });
                    }}
                  ></input>
                  <label htmlFor={index}> {value}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="formInput">
          <label htmlFor="">文章內容</label>
          <textarea
            value={contentState}
            onChange={(event) => {
              const value = event.target.value;
              setContentState(value);
            }}
            rows="指定輸入框的高度/列數，一個整數"
            cols="指定輸入框的寬度/行數，一個整數"
          >
            輸入欄位中的預設文字內容
          </textarea>
        </div>
        <div className="formInput">
          <label htmlFor="">圖片網址</label>
          <input
            type="text"
            name="title"
            value={imageUrlState}
            onChange={(event) => {
              const value = event.target.value;
              setImageUrlState(value);
            }}
          />
        </div>

        <label htmlFor="file" className="formInput formInputUploadPhoto">
          <BackupRoundedIcon size="small" />
          <label htmlFor="file" className="uploadPhoto">
            上傳照片
          </label>

          <input
            id="file"
            type="file"
            accept=".png"
            onChange={(e) => {
              let file = e.target.files[0];
              if (file.size > 120000) {
                alert("圖片太大(最大100k)");
                return;
              }
              if (file) {
                const reader = new FileReader();
                reader.onload = (readerEvent) => {
                  let data = readerEvent.target.result;
                  setImageState(data);
                };
                reader.readAsDataURL(file);
              }
              if (file) {
                const reader = new FileReader();
                reader.readAsArrayBuffer(file);
                reader.onload = (readerEvent) => {
                  const data = readerEvent.target.result;
                  const blob = new Blob([data]);
                  setImageBlob(blob);
                };
              }
            }}
          />
        </label>
        {imageState.length > 0 ? <img src={`${imageState}`} /> : null}
        {imageUrlState.length > 10 ? <img src={`${imageUrlState}`} /> : null}

        <div className="formTotal">
          <div className="currencyTotal">
            <span>發文押金 共</span>
            <span>0.005</span>
            <span>ETH</span>
          </div>
          <input type="submit" value="確認送出" onClick={onClickPostNews} />
        </div>
      </form>
    </div>
    // <div>
    //     deposit:
    //     <input
    //       type="number"
    //       name="deposit"
    //       value={depositState}
    //       onChange={(event) => {
    //         const value = event.target.value;
    //         setDepositState(value);
    //       }}
    //     />
    //   </div>刪除自訂押金功能
  );
};

export default PublisherPage;
