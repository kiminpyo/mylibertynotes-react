## 프로젝트 요약

```
- CRA로 만든 react(redux, redux-saga)와 express.js(sequelisze + mysql)를 이용한 나의 해방일지 사이트 입니다.
-  로그인 시 사람들과 공유할 수 있는 글쓰기를 만들어, 드라마 나의 해방일지와 같은 사람들의 애환을 나눌 수 있는 공간을 만들고 싶었습니다. 
- 이 페이지에서는 본인의 감정만 쓸수있고, 댓글이나 공감은 할 수 없습니다.
```

---

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
    <img src="https://img.shields.io/badge/REDUX-764ABC?style=for-the-badge&logo=REDUX&logoColor=black"/>  
    <img src="https://img.shields.io/badge/MUI-DB7093?style=for-the-badge&logo=MUI&logoColor=black"/>   
 <img src="https://img.shields.io/badge/Redux_Saga-999999?style=for-the-badge&logo=Redux-Saga&logoColor=black"/>   
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=black"/>   
 
</div>

---

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

3. /server 폴더에서 
```
 npm run dev
```
<br/>

## 프로젝트 설명

<details>
<summary>  📂 디렉토리 구조</summary>
<div markdown="1">

```
🗂 server
  ...
🗂 src
 ┣ 📁 components
 	┣ AppLayout.js
    ┣ Footer.js
    ┣ Introduce.js
    ┣ LibertyDetail.js
    ┣ LibertyEdit.js
    ┣ LibertyItem.js
    ┣ MainContent.js
    ┣ Random.js
    ┣ Script.js
    ┣ Time.js
    ┗ ScrollRestoration.js 
 ┣ 📁 HOC
    ┗ Auth.js
 ┣ 📁 reducers
    ┣ index.js
    ┣ news.js
    ┣ post.js
    ┗ user.js    
 ┣ 📁 sagas
    ┣ index.js
    ┣ post.js
    ┗ user.js 
 ┣ 📂 pages
    ┣ intro.js
    ┣ Liberty.js
    ┣ Main.js
    ┣ MyPage.js
    ┣ Signup.js
    ┗ Login.js
 ┣ 📂 store
   ┣ configureStore.js
   ┗ dummyScript.js
 ┣ 📂 utils
   ┣ backToTop.js
   ┗ scrollEvent.js
 ┣ animation.css
 ┣ App.js
 ┣ App.css
 ┣ index.js
 
```

</div>
</details>

<details>
<summary>🗔 클라이언트</summary>
<div markdown="1">

```
 -로그인 및 회원가입 
클라이언트에서 HOC로 각 페이지 라우팅시에 로그인이 필요한 페이지인지 아닌지를 판단할 수 있게 권한을 옵션으로 설정했습니다.
redux-thunk를 이용해 로그인/로그아웃/회원가입에 대한 상태관리를 했습니다.

-소개글 및 헤더 
animation과 timer함수를 만들어 적절히 배치했습니다. 헤더쪽은 script를 더미 데이터로 만들어 렌더 시 랜덤으로 글이 나오게끔 구현했습니다.

-상태관리
redux-saga와 redux를 이용해서 상태관리를 진행했습니다. 기능별로 상태를 분리했고, 로그인한 글에 대한 생성 및 수정, 삭제가 가능합니다.

-기타
페이지 이동 시, 헤더가 있는 위치로 이동하게끔 restoration 컴포넌트를 따로 만들었습니다. 
마이페이지 접근 시, fullcalender라이브러리를 사용해 내가 이때까지 적은 정보에 대한 제목을 보여줍니다.

```
</div>
</details>
<details>
<summary>🗔 서버(express + sequelizeDB)</summary>
<div markdown="1">

```
-모델 생성
게시글/유저/해시태그 총 3개의 모델을 생성해 sequlizeDB와 연동시켰습니다. 
게시글에는 컨텐츠 내용/행복도 유저에는 이메일/패스워드, 해시태그는 해시태그에 대한 스키마를 생성했습니다.

- 로그인
local-passport 전략을 사용해, 이메일과 패스워드를 받고, 유저의 정보를 확인합니다.

- 미들웨어
게시글을 작성하거나 유저가 로그인 한 상태인지 판별하기 위해 local-passport에서 받아온 정보로 유저를 판별 후,
필요한 정보만을 보내줍니다.

- CRUD
로그인 정보를 판별 후, api에 맞게 필요한 정보들을 보내줍니다. 
```
</div>
</details>

---


### 사용한 라이브러리 및 API, CDN 등

- axios
- react-router-dom
- MUI
- redux-saga
- styled-components

---






