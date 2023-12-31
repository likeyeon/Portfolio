import Header from "../components/Header";
import UserChat from "../components/UserChat";
import AiChat from "../components/AiChat";
import Form from "../components/Form";
import Footer from "../components/Footer";

import style from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <>
      <Header title="💌 Contact with me" />
      <main className={style.main}>
        <section>
          <UserChat plain="더 자세히 얘기를 나누고 싶어. 메일 주소를 알려줘!" />
          <AiChat>
            <p>
              아래 폼을 작성하여 메일을 보내주세요! 메일은 최대 24시간 이내로
              답장해드리고 있습니다 :)
            </p>
            <Form />
          </AiChat>
        </section>
      </main>
      <Footer layout="full" />
    </>
  );
};

export default Contact;
