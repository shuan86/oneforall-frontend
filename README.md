# starbusker-frontend-v2
## Introduction
該專案立志於召集有意打擊假新聞的群眾，一同努力並提供經過驗證的新聞訊息，為
新聞品質盡一份心力，名為ONE FOR ALL ，ONE FOR ALL利用群眾外包以達成快速審核；遊戲化與虛擬貨幣獎勵增加
審核群眾的黏著度與動機，營造參與者的使命感與成就感；區塊鏈公開透明的特質可以確保金流的
公正性。此外ONE FOR ALL 選擇以太坊作為區塊鏈平台，其專用以太幣(ETH) 是目前主流虛擬貨
幣之一，擁有去中心化(decentralization) 的特色，也可以將開發的程式部屬至平台，建立智能
合約，協助和驗證新聞審核發布合約的簽訂與執行，並有穩定性高以及交易效率高的優點。

ONE FOR ALL介紹影片


[youtube](https://www.youtube.com/watch?v=C08xUTg3xN4)



以下為one for all 後端source code

[github](https://github.com/shuan86/oneforall-backend)
## Tech Stack

**Front-end:**  React.js,Web3.js




## Running App

### Download frontend need packages
```
yarn install
```
### Start App

```
yarn start
```
### 如果要進入審查者審核頁面，請在瀏覽器端輸入以下網址
```
http://localhost:3000/#/root/reviewer
```
### 如果要進入發文者審核頁面，請在瀏覽器端輸入以下網址
```
http://localhost:3000/#/root/publisher
```
## Account structure

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E7%99%BC%E6%96%87%E8%80%85%E5%92%8C%E5%AF%A9%E6%A0%B8%E8%80%85%E8%88%87%E8%A7%80%E7%9C%8B%E8%80%85%E9%97%9C%E4%BF%82%E5%9C%96.png)
### Web Structure
![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E7%B6%B2%E6%9E%B6%E6%9E%B6%E6%A7%8B%E5%9C%96.png)
## User Interface
* /註冊頁: 註冊頁為蒐集使用者之背景資訊，提供帳號、密碼、真實姓名、工作職稱、年齡、性別、教育程度和科系等，給受試者填寫基本資料。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E8%A8%BB%E5%86%8A%E9%A0%81.png)

* /登入頁: 登入頁提供帳號、密碼，給受試者登入，經由帳號辨識受測者身分。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E7%99%BB%E5%85%A5%E9%A0%81.png)

* /未審核新聞頁: 此頁面為未審核新聞頁面，左側區域為新聞卡區域，提供給觀看者看未審核新聞，觀看者可以對新聞評論、按讚或透過檢舉按鈕，檢舉覺得有問題的新聞，平台則會記錄所有人的行為到智能合約上，經由智能合約將被檢舉新聞隨機分發給審查者進行審查，右側區域為平台排行榜，顯示前等級三高的使用者，點擊排行榜上的使用者，可顯示該使用者的個人資訊。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E6%9C%AA%E5%AF%A9%E6%A0%B8%E6%96%B0%E8%81%9E%E9%A0%81.png)

* /審核中新聞頁: 此頁面為審核中新聞頁面，左側區域為審核中新聞卡區域，提供給使用者觀看審核者對該則新聞的審核結果，並開放評論，除了有未審核新聞卡的功能外，該新聞卡多了投票功能，使用者可依據審核結果進行投票，若同意假新聞票數或不同意假新聞票數在期間內達標並與審核者結果相同，該則新聞則會被認定為假新聞或真實新聞，如果投票結果與審核者結果不同，該則新聞則會重新分發給新的審核者進行審查；智能合約會記錄審核中新聞的所有歷程，例如：使用者投票記錄和審核者的審核記錄等，以及規範需要審核新聞如何分發給審核者。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E5%AF%A9%E6%A0%B8%E4%B8%AD%E6%96%B0%E8%81%9E%E9%A0%81.png)

* /已審核新聞頁: 此頁面為已審核新聞頁面，左側區域為已審核新聞卡區域，提供給使用者觀看經平台使用者審核後的結果；智能合約會透過合約規則自動發放遊戲經驗值等獎勵和虛擬貨幣給參與群眾外包的使用者，藉此以滿足八角框架中所有權與佔有慾，提供使用者完成平台任務的動力。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E5%B7%B2%E5%AF%A9%E6%A0%B8%E6%96%B0%E8%81%9E%E9%A0%81.png)

* /觀看者頁面: 此頁面為觀看者頁面，左側區域為使用者資料，右側區域為觀看者資訊欄，觀看者可以從資訊欄上方得知目前的積分與追隨者人數，以及使用發文按鈕發佈文章，資訊欄下方則是對新聞的投票記錄，投票記錄會記載在智能合約上，確保資料公開透明，不會被竄改，達到新聞溯源的效果。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E8%A7%80%E7%9C%8B%E8%80%85%E9%A0%81%E9%9D%A2.png)

* /審核者頁面: 此頁面為審核者頁面，左側區域為使用者資料，右側區域為審核者資訊欄，使用者可以得知目前的積分與追隨者人數，使用者可以經由審查文章按鈕，審查經由智能合約分發的新聞進行審查。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E5%AF%A9%E6%A0%B8%E8%80%85%E9%A0%81%E9%9D%A2.png)

* /發文者頁面: 此頁面為發文者頁面，左側區域為使用者資料，右側區域為發文者資訊欄，使用者可以從資訊欄得知發文記錄；發文記錄會記載在智能合約上，確保資料公開透明，不會被竄改。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E7%99%BC%E6%96%87%E8%80%85%E9%A0%81%E9%9D%A2.png)

* /繪圖遊戲頁面: 此頁面為繪圖遊戲頁面，提供40*40像素的畫布，給平台上的所有會員在同一畫布上進行塗鴉共同創作，會員可以在任一格像素上填色，像素上的顏色每秒都有可能被覆蓋，讓會員可以一起討論協調戰術和圖案設計，在畫布內畫出心目中的圖案，最後的成品就像百家布，此遊戲會根據會員經驗值給予每日可點擊像素數量，藉此以滿足八角框架中發展與成就和社會影響力與同理心，提供會員滿足感和讓彼此產生關聯感。

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/%E7%B9%AA%E5%9C%96%E9%81%8A%E6%88%B2%E9%A0%81%E9%9D%A2.png)

---
## Contributors 
[shuan86(backend+frontend)](https://github.com/shuan86)
[s490607(frontend)](https://github.com/s490607)
[yaya75315(frontend)](https://github.com/yaya75315)

## Awards
放視大賞-行動應用類-軟體內容組 入圍

![image](https://github.com/shuan86/oneforall-frontend/blob/main/readme-image/award/certificate.png)


## License
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
