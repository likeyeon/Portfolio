import Header from "../components/Header";
import UserChat from "../components/UserChat";
import AiChat from "../components/AiChat";
import Slide from "../components/Slide";
import Footer from "../components/Footer";

import style from "../styles/project.module.scss";

const Project = () => {
  return (
    <>
      <Header title="💻 My side projects" />
      <main className={style.main}>
        <section>
          <UserChat
            strong="지금까지 만든 프로젝트들"
            plain="에 대해 소개해줘"
          />
          <AiChat>
            <Slide />
          </AiChat>
        </section>
      </main>
      <Footer layout="full" />
    </>
  );
};

export default Project;
