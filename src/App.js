import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Card m={5} variant={"filled"}>
        <CardHeader>
          <Heading size="md">Counter</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Text fontSize="4xl">Count: 0</Text>
          <Button colorScheme="teal" variant="outline" m={2}>
            Add
          </Button>
          <Button colorScheme="teal" variant="outline" m={2}>
            Subtract
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
