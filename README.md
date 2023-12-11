<div align="center">
  
<img width="573" alt="portfolio" src="https://github.com/likeyeon/Portfolio/assets/94125863/c8d802df-c01d-44aa-ac67-c808b20cc08c">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Flikeyeon%2FPortfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

# Portfolio
> <strong>프론트엔드 / 퍼블리셔 개인 포트폴리오 웹 사이트
> <br/> 개발기간 : 2023.11.01 ~ 2023.11.24</strong>

## 🔗 관련 링크
> <strong>웹 사이트 : https://hayeoncho.vercel.app/
> <br/> 회고록 : https://velog.io/@likeyeon/포트폴리오-제작-회고글</strong>

## 💁‍♀️ 포트폴리오 소개
개발 공부를 시작한 이후로 다양한 외부 활동과 프로젝트를 통해 지식을 쌓았습니다. 이제는 지금까지 쌓아온 것들을 바탕으로 실제 비즈니스 제품을 만들고 싶어 취업을 위한 포트폴리오를 준비하게 되었습니다.

한 번에 정보를 보여주기 좋은 싱글 페이지의 형식도 좋지만, 제 자신만의 개성이 반영된 포트폴리오를 만들고 싶어 레이아웃에 대한 고민을 많이 하였습니다. 그 과정에서 떠올린 것이 바로 '챗 지피티'였습니다. 어떤 질문에든 답변해주는 해결사같은 존재가 되고 싶은 마음을 담아, 챗 지피티 컨셉으로 포트폴리오를 제작하였습니다.

## 🛠 Stacks
### Environment
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=Git&logoColor=white">

### Config
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">

### Development
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">

## 🖥 화면 구성
<table>
  <tr>
    <td colspan="2" align="center"><strong>Main</strong></td>
  </tr>
  <tr>
    <td colspan="2"><img width="1459" alt="main" src="https://github.com/likeyeon/Portfolio/assets/94125863/73a8a8c0-1038-4f6b-aefc-a0eff5743ba0">
</td>
  </tr>
  <tr>
    <td align="center"><strong>About</strong></td>
    <td align="center"><strong>Project</strong</td>
  </tr>
  <tr>
    <td><img width="1143" alt="about" src="https://github.com/likeyeon/Portfolio/assets/94125863/dfffc8c1-cc3b-4b0d-877c-88d1f4a77299">
</td>
    <td><img width="1201" alt="project" src="https://github.com/likeyeon/Portfolio/assets/94125863/294f0f7f-f385-46d1-8ff9-1eed3ffdf260">
</td>
  </tr>
  <tr>
    <td align="center"><strong>Writing</strong</td>
    <td align="center"><strong>Contact</strong</td>
  </tr>
  <tr>
    <td><img width="1186" alt="writing" src="https://github.com/likeyeon/Portfolio/assets/94125863/b0f580ec-cc21-4a01-a2dc-9918a6148814">
</td>
    <td><img width="1181" alt="contact" src="https://github.com/likeyeon/Portfolio/assets/94125863/54812fb0-376a-4c3f-b9bc-835cd2b85873">
</td>
  </tr>
</table>

## 🕹 주요 기능
### ⭐️ Light & Dark 테마 모드
- `localStorage`에 키-값을 저장하여 페이지를 새로 고침하거나 브라우저를 껐다 켜도 테마값이 유지되도록 구현
### ⭐️ Router를 이용한 SPA 구현 및 조건별 레이아웃 교체
- `Link` 컴포넌트를 사용하여 페이지의 새로고침을 막아 탭을 클릭하는 듯한 효과 구현
- `Outlet` 컴포넌트의 중첩 라우팅을 통해 상위 컴포넌트를 레이아웃화
### ⭐️ 다수의 프로젝트, 게시글 컴포넌트 배치
- `map` 으로 json 객체 데이터를 가져와 레이아웃이 비슷한 다수의 컴포넌트 배치
### ⭐️ Contact 폼 작성 메일 전송 기능
- `EmailJS` 라이브러리를 사용해 Contact 페이지에 메일 폼을 생성하여 사용자 경험 향상
### ⭐️ 다양한 인터렉션
- CSS animation, keyframe 및 자바스크립트를 사용하여 다양한 인터렉션 구현

## 🗂 디렉토리 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┣ 📂imgs
 ┣ 📂components
 ┃ ┣ 📜AiChat.js
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜Form.js
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜NavBar.js
 ┃ ┣ 📜PostItem.js
 ┃ ┣ 📜PostList.js
 ┃ ┣ 📜ProfileWindow.js
 ┃ ┣ 📜ProjectItem.js
 ┃ ┣ 📜ProjectList.js
 ┃ ┣ 📜SkillWindow.js
 ┃ ┣ 📜Slide.js
 ┃ ┣ 📜ThemeMode.js
 ┃ ┣ 📜UserChat.js
 ┃ ┗ 📜WindowBar.js
 ┣ 📂layouts
 ┃ ┗ 📜Layout.js
 ┣ 📂pages
 ┃ ┣ 📜About.js
 ┃ ┣ 📜Contact.js
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜Project.js
 ┃ ┗ 📜Writing.js
 ┣ 📂styles
 ┃ ┣ 📜_color.scss
 ┃ ┣ 📜_mixin.scss
 ┃ ┣ 📜_util.scss
 ┃ ┣ 📜about.module.scss
 ┃ ┣ 📜chat.module.scss
 ┃ ┣ 📜contact.module.scss
 ┃ ┣ 📜footer.module.scss
 ┃ ┣ 📜global.scss
 ┃ ┣ 📜header.module.scss
 ┃ ┣ 📜layout.module.scss
 ┃ ┣ 📜main.module.scss
 ┃ ┣ 📜navBar.module.scss
 ┃ ┣ 📜postList.module.scss
 ┃ ┣ 📜profileWindow.module.scss
 ┃ ┣ 📜project.module.scss
 ┃ ┣ 📜reset.css
 ┃ ┣ 📜skillWindow.module.scss
 ┃ ┣ 📜slide.module.scss
 ┃ ┣ 📜themeMode.module.scss
 ┃ ┗ 📜windowBar.module.scss
 ┣ 📜App.js
 ┣ 📜data.json
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
