import Header from "../components/Header";
import UserChat from "../components/UserChat";
import AiChat from "../components/AiChat";
import ProfileWindow from "../components/ProfileWindow";
import SkillWindow from "../components/SkillWindow";

import style from "../styles/about.module.scss";

const About = () => {
  return (
    <>
      <Header title="💁‍♀️ I am.." />
      <main className={style.wrapper}>
        <div className={style.main_inner}>
          <section className={style.profile}>
            <UserChat strong="자기소개" plain="를 부탁해." />
            <AiChat>
              <ProfileWindow />
              <div className={style.profile__text}>
                <p>
                  <span className={style["profile__text--strong"]}>
                    Frontend
                  </span>
                  의 기본기를 탄탄히 다져나가고자 하는{" "}
                  <span className={style["profile__text--strong"]}>
                    주니어 개발자
                  </span>{" "}
                  조하연입니다.
                  <br />
                  이를 위해 브라우저의 동작 원리를 이해하고, 웹 표준성과
                  접근성을 고려하며 코드를 작성합니다.
                  <br />
                  <span className={style["profile__text--strong"]}>
                    코드의 재사용성과 효율성
                  </span>
                  을 위해 React Hook을 활용하여 컴포넌트를 개발하고, SCSS 문법에
                  기반한 CSS를 작성합니다.
                  <br />
                  또한 큰 임팩트는 혼자가 아닌 함께 만들 수 있다고 생각하기에
                  외부 활동에 적극적으로 참여하며 협업 경험을 쌓아왔습니다.
                  <br />매 프로젝트가 끝날 때마다 회고록을 작성하여{" "}
                  <span className={style["profile__text--strong"]}>
                    스스로 부족한 점을 보완하면서 발전
                  </span>
                  하고자 합니다.
                </p>
              </div>
            </AiChat>
          </section>
          <section className={style.profile}>
            <UserChat
              strong="사용할 줄 아는 기술"
              plain="에 대해 자세히 알려줘."
            />
            <AiChat>
              <SkillWindow />
            </AiChat>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
