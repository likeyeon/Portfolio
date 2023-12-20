import Header from "../components/Header";
import UserChat from "../components/UserChat";
import AiChat from "../components/AiChat";
import dataList from "../data.json";
import PostList from "../components/PostList";
import Footer from "../components/Footer";

import style from "../styles/postList.module.scss";

const Writing = () => {
  return (
    <>
      <Header title="✍️ Articles you may like" />
      <main className={style.main}>
        <section>
          <UserChat
            strong="새로 배운 지식이나 공유하고 싶은 경험"
            plain="을 담은 포스팅을 소개해줘."
          />
          <AiChat>
            <PostList postList={dataList.posts} />
          </AiChat>
        </section>
      </main>
      <Footer layout="full" />
    </>
  );
};

export default Writing;
