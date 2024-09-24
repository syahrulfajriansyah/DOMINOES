import React, { useState } from "react";
import { Box, Button, Stack, Heading, Text, VStack, HStack, Input, FormControl, FormLabel } from "@chakra-ui/react";
import Domino from "./domino"; // Pastikan nama file Domino.js sesuai
import { dominoData } from "./utils"; // Mengimpor data domino dari utils.js

function App() {
  const [dominoes, setDominoes] = useState(dominoData);
  const [isAsc, setIsAsc] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [newNumber, setNewNumber] = useState("");

  const countDoubles = () => {
    return dominoes.filter(([a, b]) => a === b).length;
  };

  const sortDominoes = () => {
    const sorted = [...dominoes].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];

      if (isAsc) {
        return totalA - totalB || a[0] - b[0];
      } else {
        return totalB - totalA || b[0] - a[0];
      }
    });
    setDominoes(sorted);
    setIsAsc(!isAsc);
  };

  const flipDominoes = () => {
    const flipped = dominoes.map(([a, b]) => [b, a]);
    setDominoes(flipped);
  };

  const removeDuplicates = () => {
    const uniqueDominoes = dominoes.filter(
      (domino, index, self) =>
        index === self.findIndex(([a, b]) => (a === domino[0] && b === domino[1]) || (a === domino[1] && b === domino[0]))
    );
    setDominoes(uniqueDominoes);
  };

  const resetDominoes = () => {
    setDominoes(dominoData);
  };

  const removeNumber = (index) => {
    if (selectedIndex !== null) {
      const updatedDominoes = [...dominoes];
      updatedDominoes[selectedIndex][index] = null; 
      setDominoes(updatedDominoes);
      setSelectedIndex(null);
    }
  };

  const addNumber = () => {
    if (selectedIndex !== null && newNumber) {
      const numberToAdd = parseInt(newNumber);
      if (!isNaN(numberToAdd)) {
        const updatedDominoes = [...dominoes];
        updatedDominoes[selectedIndex][1] = numberToAdd; 
        setDominoes(updatedDominoes);
        setNewNumber(""); 
      }
    }
  };

  return (
    <Box p={4} bg="gray.50" minHeight="100vh">
      <Heading mb={4} textAlign="center" color="teal.600">
        Dominoes Application
      </Heading>

      <VStack spacing={4} mb={4}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} wrap="wrap" justify="center">
          {dominoes.map((domino, index) => (
            <Domino 
              key={index} 
              domino={domino} 
              isSelected={selectedIndex === index} // Menandai domino yang dipilih
              onSelect={() => setSelectedIndex(index)} 
            />
          ))}
        </Stack>
      </VStack>

      <Text mb={4} fontSize="lg" textAlign="center" fontWeight="semibold">
        Number of doubles: {countDoubles()}
      </Text>

      <HStack spacing={4} justify="center" mb={4}>
        <Button colorScheme="teal" onClick={sortDominoes}>
          Sort {isAsc ? "Descending" : "Ascending"}
        </Button>
        <Button colorScheme="teal" onClick={flipDominoes}>
          Flip Dominoes
        </Button>
        <Button colorScheme="teal" onClick={removeDuplicates}>
          Remove Duplicates
        </Button>
        <Button colorScheme="teal" onClick={resetDominoes}>
          Reset Dominoes
        </Button>
        <Button colorScheme="red" onClick={() => removeNumber(0)} isDisabled={selectedIndex === null}>
          Remove First Number
        </Button>
        <Button colorScheme="red" onClick={() => removeNumber(1)} isDisabled={selectedIndex === null}>
          Remove Second Number
        </Button>
      </HStack>

      <FormControl mb={4} isDisabled={selectedIndex === null}>
        <FormLabel>Add Number to Selected Domino</FormLabel>
        <HStack>
          <Input 
            placeholder="Enter number" 
            value={newNumber} 
            onChange={(e) => setNewNumber(e.target.value)} 
          />
          <Button colorScheme="teal" onClick={addNumber}>
            Add Number
          </Button>
        </HStack>
      </FormControl>
    </Box>
  );
}

export default App;
