import { Link } from "react-router-dom";
import style from "../styles/profileWindow.module.scss";
import WindowBar from "../components/WindowBar";

const ProfileWindow = () => {
  return (
    <div className={style.container}>
      <WindowBar title="profile" />
      <div className={style.content}>
        <div className={style["content__left"]}>
          <span>{">"}</span> 안녕하세요 :)
          <br /> 신입 프론트엔드 개발자 조하연입니다.
        </div>
        <div className={style["content__right"]}>
          <span className={style.yellow}>const</span>{" "}
          <span className={style.blue}>profile</span> = {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=deukhye98@gmail.com"
            target="_blank"
          >
            <span className={style.purple}>email</span>
            <span className={style.white}> : </span>
            <span className={style.blue}>deukhye98@gmail.com</span>
            <span className={style.white}>,</span>
          </Link>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="https://github.com/likeyeon" target="_blank">
            <span className={style.purple}>github</span>
            <span className={style.white}> : </span>
            <span className={style.blue}>likeyeon</span>
            <span className={style.white}>,</span>
          </Link>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="https://velog.io/@likeyeon" target="_blank">
            <span className={style.purple}>blog</span>
            <span className={style.white}> : </span>
            <span className={style.blue}>likeyeon’s velog</span>
            <span className={style.white}>,</span>
          </Link>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="https://www.linkedin.com/in/%ED%95%98%EC%97%B0-%EC%A1%B0-313169273/"
            target="_blank"
          >
            <span className={style.purple}>linkedIn</span>
            <span className={style.white}> : </span>
            <span className={style.blue}>likeyeon’s linkedIn</span>
            <span className={style.white}>,</span>
          </Link>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="https://drive.google.com/file/d/1H4yZt2jBXm6cUeMhx-YTGA10U4DZ_CHc/view?usp=sharing"
            target="_blank"
          >
            <span className={style.purple}>resume</span>
            <span className={style.white}> : </span>
            <span className={style.blue}>chohayeon resume</span>
          </Link>
          <br />
          {"};"}
        </div>
      </div>
    </div>
  );
};

export default ProfileWindow;
