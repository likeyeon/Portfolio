import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "../styles/contact.module.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t7l28nh",
        "template_7iqicka",
        form.current,
        "mWsSqKkjFFcAqC424"
      )
      .then(
        (result) => {
          alert("성공적으로 이메일이 전송되었습니다.");
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <div className={style["form__container"]}>
        <div className={style["form__left"]}>
          <div className={style["form__input"]}>
            <label className={style["form__input--label"]}>Name</label>
            <input
              className={style["form__input--input"]}
              type="text"
              name="name"
              onChange={handleNameChange}
              value={name}
              placeholder="성함을 입력해주세요."
              required
            />
          </div>
          <div className={style["form__input"]}>
            <label className={style["form__input--label"]}>Email</label>
            <input
              className={style["form__input--input"]}
              type="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              placeholder="이메일 주소를 입력해주세요."
              required
            />
          </div>
          <div className={style["form__input"]}>
            <label className={style["form__input--label"]}>Title</label>
            <input
              className={style["form__input--input"]}
              type="text"
              name="title"
              onChange={handleTitleChange}
              value={title}
              placeholder="제목을 입력해주세요."
              required
            />
          </div>
        </div>
        <div className={style["form__right"]}>
          <div className={style["form__textarea"]}>
            <label className={style["form__input--label"]}>Message</label>
            <textarea
              className={style["form__input--textarea"]}
              name="message"
              onChange={handleMessageChange}
              value={message}
              placeholder="내용을 작성해주세요."
              required
            />
          </div>
        </div>
      </div>
      <div className={style["form__button"]}>
        <input type="submit" value="메일 전송" />
      </div>
    </form>
  );
};

export default Form;
