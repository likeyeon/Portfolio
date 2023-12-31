import { Link } from "react-router-dom";
import ThemeMode from "../components/ThemeMode";
import { ReactComponent as Send } from "../assets/icons/send.svg";
import style from "../styles/main.module.scss";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <ThemeMode />
      <main className={style.main}>
        <div className={style.main_inner}>
          <div className={style.title}>
            <h1 className={style.title__head}>Hayeon GPT</h1>
            <p className={style.title__sub}>FRONTEND-PORTFOLIO</p>
          </div>
          <div className={style["main-below"]}>
            <div className={style.menu}>
              <div className={style.menu_inner}>
                <ul className={style["item__group"]}>
                  <li className={style.item}>
                    <Link to="/about">
                      <h2 className={style.item__title}>💁‍♀️ About</h2>
                      <div className={style.item__description}>
                        제 소개를 하자면...
                      </div>
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link to="/project">
                      <h2 className={style.item__title}>💻 Projects</h2>
                      <div className={style.item__description}>
                        지금까지 진행한 프로젝트들을 모아 보았어요
                      </div>
                    </Link>
                  </li>
                </ul>
                <ul className={style["item__group"]}>
                  <li className={style.item}>
                    <Link to="/writing">
                      <h2 className={style.item__title}>✍️ Writing</h2>
                      <div className={style.item__description}>
                        배운 것을 잊어버리지 않기 위해 기록해왔어요
                      </div>
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link to="/contact">
                      <h2 className={style.item__title}>🤝 Contact</h2>
                      <div className={style.item__description}>
                        개인적인 대화를 하고 싶다면 메일을 보내주세요
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.input}>
              <div className={style.input__inner}>
                <div className={style["input--box"]} type="text" disabled />
                <span className={style["input--type"]}>
                  <Typewriter
                    words={["무엇이든 물어보세요 :)"]}
                    loop={0}
                    typeSpeed={70}
                    cursor={true}
                    cursorStyle="|"
                  />
                </span>
                <span className={style["input--icon"]}>
                  <Send />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
