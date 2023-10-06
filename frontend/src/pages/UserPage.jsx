import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

function UserPage() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }

        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      }
    };

    getUser();
  }, [username, showToast]);

  if (!user) return null;

  return (
    <>
      <UserHeader user={user} />
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
