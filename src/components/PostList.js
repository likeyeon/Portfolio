import PostItem from "../components/PostItem";
import style from "../styles/postList.module.scss";

const PostList = ({ postList }) => {
  return (
    <div className={style.container}>
      {postList.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
