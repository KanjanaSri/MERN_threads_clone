import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={121}
        replies={64}
        postImg="/post1.png"
        postTitle="Creating Your Dream Space with Art of Interior Design."
      />
      <UserPost
        likes={831}
        replies={284}
        postImg="/post2.png"
        postTitle="Exploring the Endless Possibilities in the Interior Design Field."
      />
      <UserPost
        likes={245}
        replies={78}
        postImg="/post3.png"
        postTitle="Epic Volleyball Match!"
      />
      <UserPost
        likes={73}
        replies={24}
        postTitle="A Journey Beyond the Clock."
      />
    </>
  );
}

export default UserPage;
