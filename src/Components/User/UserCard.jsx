import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useUserStore from "./UserStore";

const UserCard = () => {
  const users = useUserStore((state) => state.users);
  const loading = useUserStore((state) => state.loading);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  return (
    <Card m={5} variant={"filled"}>
      <CardHeader>
        <Heading size="md">Users</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        {loading && (
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="4" />
        )}
        {!loading && users && <Text>{JSON.stringify(users)}</Text>}
        {!loading && !users && <Text>User details will be visible here.</Text>}
      </CardBody>
      <CardFooter>
        <Button colorScheme="teal" variant="outline" m={2} onClick={fetchUsers}>
          Fetch Users
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
