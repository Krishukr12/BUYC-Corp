/* eslint-disable react/prop-types */

import { Box, Flex, Image, Text, IconButton, Tooltip } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const CarCard = ({ car, onEdit, onDelete }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding="4"
      marginBottom="4"
      boxShadow="md"
      width="300px"
      height={"475px"}
      transition="all 0.2s"
      _hover={{ transform: "scale(1.02)" }}
      _active={{ transform: "scale(0.98)" }}
    >
      <Image
        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        alt={"image"}
        borderRadius="md"
        boxShadow="lg"
        maxH={"250px"}
        margin="auto"
      />
      <Box mt="2">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {car.title}
        </Text>
        <Text fontWeight="bold" mb="2">
          Specifications:
        </Text>
        <ul
          style={{
            marginLeft: "15px",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          {car.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </Box>
      <Flex justifyContent="space-evenly" mt={"15px"}>
        <Tooltip label="Edit" placement="top">
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit"
            size="sm"
            colorScheme="blue"
            // onClick={handleEdit}
            mr="2"
          />
        </Tooltip>
        <Tooltip label="Delete" placement="top">
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Delete"
            size="sm"
            colorScheme="red"
            onClick={() => onDelete(car._id)}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default CarCard;
