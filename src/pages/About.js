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
      <main>
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
                  이를 위해 HTML을 시맨틱하게 작성하여 웹 구조를 견고히
                  설계하고, 웹 접근성과 표준성을 준수하며 개발합니다.
                  <br />
                  React에 SCSS를 적용하여{" "}
                  <span className={style["profile__text--strong"]}>
                    확장성과 유지 보수성
                  </span>
                  이 높은 코드를 작성하는 것을 지향합니다.
                  <br />
                  또한,{" "}
                  <span className={style["profile__text--strong"]}>
                    새로 배운 지식을 공유
                  </span>
                  하는 것을 좋아하여 지금까지 총 73개의 글을 블로그에
                  작성하였습니다.
                  <br />그 외에도 다양한 외부 활동과 프로젝트에 참여하여{" "}
                  <span className={style["profile__text--strong"]}>
                    지속적으로 발전
                  </span>
                  하고자 노력합니다.
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
