import style from "../styles/skillWindow.module.scss";
import WindowBar from "../components/WindowBar";

const SkillWindow = () => {
  return (
    <div className={style.container}>
      <WindowBar title="skill" />
      <div className={style.content}>
        <p>
          <h2>HTML/CSS</h2>
          • 시맨틱하게 HTML을 작성하여 웹표준을 지키려고 합니다. <br />
          • SCSS 문법에 익숙합니다. <br />
          • 미디어 쿼리를 사용하여 전 기종에 적용되도록 반응형 작업을 합니다.
          <br />
          • BEM 방법론에 기반하여 클래스 명을 짓습니다. <br />
          • Tailwind, Bootstrap CSS 라이브러리를 사용할 수 있습니다.
          <br />
        </p>
        <p>
          <h2>Javascript</h2>
          • ES6+ 문법에 익숙합니다. <br />
          • javascript의 동작 원리를 이해하며 코드를 작성합니다. <br />
          • axios 라이브러리를 사용하여 비동기 통신을 할 수 있습니다.
          <br />
          • jQuery를 사용하여 html 요소에 접근하고 조작할 수 있습니다.
          <br />
        </p>
        <p>
          <h2>React</h2>
          • React 컴포넌트를 block 단위로 분리하여 개발하는 것을 좋아하고,
          재사용성과 확장성을 고려합니다. <br />
          • 각종 Hooks를 상황에 맞게 사용할 수 있습니다. <br />
          • 컴포넌트의 불필요한 렌더링이 발생하지 않도록 useCallback,
          useEffect를 적절히 사용합니다.
          <br />
          • Redux 라이브러리를 사용하여 전역으로 상태 관리를 할 수 있습니다.
          <br />
        </p>
        <p>
          <h2>Etc</h2>
          • Etc git, github를 사용하여 코드의 이력을 관리하고 협업하는데
          익숙합니다. <br />
          • AWS EC2를 이용한 배포경험, S3을 이용한 파일 관리 경험이 있습니다.
          <br />
          • figma를 사용하여 와이어프레임을 설계하고 UI 디자인을 하는 것을
          좋아합니다.
          <br />
        </p>
      </div>
    </div>
  );
};

export default SkillWindow;
