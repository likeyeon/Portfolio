import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import dataList from "../data.json";
import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";
import style from "../styles/slide.module.scss";

const Slide = () => {
  const [currentNum, setCurrentNum] = useState(1);
  const moveSlide = (operation) => {
    if (operation === "left") {
      currentNum === 1
        ? setCurrentNum(dataList.projects.length)
        : setCurrentNum(currentNum - 1);
    } else {
      currentNum === dataList.projects.length
        ? setCurrentNum(1)
        : setCurrentNum(currentNum + 1);
    }
  };

  const selectSlide = (num) => {
    setCurrentNum(num);
  };

  const [display, setDisplay] = useState(false); // 화면 표시 상태를 관리하는 상태값

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true); // 1초 후에 화면 표시 상태를 true로 설정
    }, 500);

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 제거
    };
  }, []);

  return (
    <div className={`${style.wrapper} ${display ? "" : style.hidden}`}>
      <div className={style.top}>
        <button
          className={style["top__icon--prev"]}
          onClick={() => moveSlide("left")}
          aria-label="이전 버튼"
        >
          <LeftArrow />
        </button>
        <ProjectList projectList={dataList.projects} current={currentNum} />
        <button
          className={style["top__icon--next"]}
          onClick={() => moveSlide("right")}
          aria-label="다음 버튼"
        >
          <RightArrow />
        </button>
      </div>
      <div className={style.bottom}>
        <ul className={style["nav-wrapper"]}>
          {dataList.projects.map((project, index) => (
            <li
              key={index}
              className={`${style["nav__li"]} ${
                currentNum === project.id ? style.active : ""
              }`}
              onClick={() => selectSlide(project.id)}
              tabIndex={0}
              aria-label={`${project.id}번째 프로젝트로 이동`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
