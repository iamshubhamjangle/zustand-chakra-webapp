import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import useStore from "./CounterStore";

const CounterCard = () => {
  const count = useStore((state) => state.count);
  const incrementCount = useStore((state) => state.incrementCount);
  const decrementCount = useStore((state) => state.decrementCount);

  return (
    <Card m={5} variant={"filled"}>
      <CardHeader>
        <Heading size="md">Counter</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Text fontSize="4xl">Count: {count}</Text>
        <Button
          colorScheme="teal"
          variant="outline"
          m={2}
          onClick={incrementCount}
        >
          Add
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          m={2}
          onClick={decrementCount}
        >
          Subtract
        </Button>
      </CardBody>
    </Card>
  );
};

export default CounterCard;
