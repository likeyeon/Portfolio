import WindowBar from "../components/WindowBar";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg";
import style from "../styles/postList.module.scss";

const PostItem = ({ post }) => {
  return (
    <article className={style["post"]}>
      <Link to="/" className={style["post-contents-link"]}>
        <WindowBar />
        <div className={style["post-contents-wrapper"]}>
          <div className={style["post-contents"]}>
            <h3 className={style["post-contents__title"]}>
              <span>{post.title}</span>
            </h3>
            <div className={style["post-contents__bottom"]}>
              <p>{post.content}</p>
              <div className={style["post-contents__info"]}>
                <span className={style["post-contents__info--text"]}>
                  {post.topic}
                </span>
                <span className={style["post-contents__info--text"]}>
                  <span>Read post</span>
                  <span className={style["post-contents__info--icon"]}>
                    <Arrow />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
