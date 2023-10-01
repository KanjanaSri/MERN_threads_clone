import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";

function PostPage() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/avatar.png" size={"md"} name="Alex Mitchell" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Alex Mitchell
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Creating Your Dream Space with Art of Interior Design.</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center "}>
        <Text color={"gray.light"} fontSize={"sm"}>
          234 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {193 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      <Comment
        comment="Looks really good"
        createdAt="2d"
        likes={34}
        username="John Doe"
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="Hey this looks amazing!"
        createdAt="1d"
        likes={20}
        username="Taylor"
        userAvatar="https://bit.ly/ryan-florence"
      />
      <Comment
        comment="Looks really good"
        createdAt="2d"
        likes={12}
        username="William"
        userAvatar="https://bit.ly/prosper-baba"
      />
    </>
  );
}

export default PostPage;
