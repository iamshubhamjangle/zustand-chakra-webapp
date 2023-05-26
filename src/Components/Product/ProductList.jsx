import React from "react";
import { Box, Grid, Image, Text, Badge, Flex, Spacer } from "@chakra-ui/react";

// Dummy products array
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/200/200.jpg",
    price: 29.99,
    ratings: 4.5,
    reviews: 10,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/200/200.jpg",
    price: 39.99,
    ratings: 4.8,
    reviews: 15,
  },
  {
    id: 3,
    name: "Product 1",
    image: "https://picsum.photos/200/200.jpg",
    price: 29.99,
    ratings: 4.5,
    reviews: 10,
  },
  {
    id: 4,
    name: "Product 2",
    image: "https://picsum.photos/200/200.jpg",
    price: 39.99,
    ratings: 4.8,
    reviews: 15,
  },
  {
    id: 5,
    name: "Product 1",
    image: "https://picsum.photos/200/200.jpg",
    price: 29.99,
    ratings: 4.5,
    reviews: 10,
  },
  {
    id: 6,
    name: "Product 2",
    image: "https://picsum.photos/200/200.jpg",
    price: 39.99,
    ratings: 4.8,
    reviews: 15,
  },
  {
    id: 7,
    name: "Product 1",
    image: "https://picsum.photos/200/200.jpg",
    price: 29.99,
    ratings: 4.5,
    reviews: 10,
  },
  {
    id: 8,
    name: "Product 2",
    image: "https://picsum.photos/200/200.jpg",
    price: 39.99,
    ratings: 4.8,
    reviews: 15,
  },
  // Add more product objects as needed
];

function ProductList() {
  return (
    <div className="center">
      <div className="container">
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Image
                src={product.image}
                alt={product.name}
                h={200}
                objectFit="contain"
              />

              <Box p={4}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {product.name}
                </Text>

                <Flex align="center" mb={2}>
                  <Text fontSize="md" color="gray.600">
                    Price: ${product.price}
                  </Text>
                  <Spacer />
                  <Badge colorScheme="teal" ml={2}>
                    {product.ratings} / 5
                  </Badge>
                  <Text color="gray.600" ml={2}>
                    ({product.reviews} reviews)
                  </Text>
                </Flex>

                {/* Add any other product details you want to display */}
              </Box>
            </Box>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ProductList;
