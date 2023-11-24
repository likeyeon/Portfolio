import style from "../styles/chat.module.scss";
import { ReactComponent as Profile } from "../assets/imgs/profile.svg";

const UserChat = (props) => {
  return (
    <div className={style["user-wrapper"]}>
      <div className={style["user-inner"]}>
        <span>
          <Profile className={style["user-profile"]} />
        </span>
        <h2>
          <strong>{props.strong}</strong>
          {props.plain}
        </h2>
      </div>
    </div>
  );
};

export default UserChat;
