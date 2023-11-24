import { ReactComponent as AiProfile } from "../assets/imgs/ai-profile.svg";
import style from "../styles/chat.module.scss";

const AiChat = ({ children }) => {
  return (
    <div className={style["ai-wrapper"]}>
      <div className={style["ai-inner"]}>
        <span className={style["ai-profile"]}>
          <AiProfile />
        </span>
        <span className={style["ai-contents"]}>{children}</span>
      </div>
    </div>
  );
};

export default AiChat;
