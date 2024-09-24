import React from "react";
import { Box } from "@chakra-ui/react";

// Component to display a single domino card
const Domino = ({ domino, isSelected, onSelect }) => {
  return (
    <Box
      border="2px solid" 
      borderColor={isSelected ? "teal.500" : "gray.400"} 
      borderRadius="lg" 
      p={4} 
      display="inline-block" 
      textAlign="center" 
      bg={isSelected ? "teal.100" : "white"} 
      width="100px" 
      height="150px" 
      boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)" 
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)", 
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)", 
      }} 
      transition="background-color 0.3s, transform 0.3s, box-shadow 0.3s" 
      onClick={onSelect} 
    >
      <Box fontSize="3xl" fontWeight="bold" color="gray.800">
        {domino[0]} 
      </Box>
      <Box mt={3} mb={3} height="2px" bg="gray.600" /> 
      <Box fontSize="3xl" fontWeight="bold" color="gray.800">
        {domino[1]} 
      </Box>
    </Box>
  );
};

export default Domino;
