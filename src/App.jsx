// Import statement Chakra UI dan React
import React, { useState } from "react";
import { Box, Button, Stack, Heading, Text, VStack, HStack, Input, FormControl, FormLabel } from "@chakra-ui/react";
import Domino from "./domino"; // Pastikan nama file Domino.js sesuai
import { dominoData } from "./utils"; // Mengimpor data domino dari utils.js

// Fungsi utama aplikasi
function App() {
  const [dominoes, setDominoes] = useState(dominoData); // Menyimpan data domino
  const [isAsc, setIsAsc] = useState(true); // Menyimpan state sorting (asc atau desc)
  const [selectedIndex, setSelectedIndex] = useState(null); // Menyimpan indeks domino yang dipilih untuk penghapusan
  const [newNumber, setNewNumber] = useState(""); // Menyimpan angka baru untuk ditambahkan

  // Menghitung jumlah kartu dengan angka ganda (double numbers)
  const countDoubles = () => {
    return dominoes.filter(([a, b]) => a === b).length;
  };

  // Fungsi untuk mengurutkan data (asc atau desc)
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
    setIsAsc(!isAsc); // Toggle urutan
  };

  // Fungsi untuk membalik urutan semua domino
  const flipDominoes = () => {
    const flipped = dominoes.map(([a, b]) => [b, a]);
    setDominoes(flipped);
  };

  // Fungsi untuk menghapus domino duplikat
  const removeDuplicates = () => {
    const uniqueDominoes = dominoes.filter(
      (domino, index, self) =>
        index === self.findIndex(([a, b]) => (a === domino[0] && b === domino[1]) || (a === domino[1] && b === domino[0]))
    );
    setDominoes(uniqueDominoes);
  };

  // Fungsi untuk mereset data ke default
  const resetDominoes = () => {
    setDominoes(dominoData);
  };

  // Fungsi untuk menghapus angka dari domino yang dipilih
  const removeNumber = () => {
    if (selectedIndex !== null) {
      const updatedDominoes = dominoes.filter((_, index) => index !== selectedIndex);
      setDominoes(updatedDominoes);
      setSelectedIndex(null); // Reset pilihan
    }
  };

  // Fungsi untuk menambah angka ke domino yang dipilih
  const addNumber = () => {
    if (selectedIndex !== null && newNumber) {
      const numberToAdd = parseInt(newNumber);
      if (!isNaN(numberToAdd)) {
        const updatedDominoes = [...dominoes];
        updatedDominoes[selectedIndex] = [updatedDominoes[selectedIndex][0], numberToAdd]; // Menambah angka pada bagian kedua
        setDominoes(updatedDominoes);
        setNewNumber(""); // Reset input
      }
    }
  };

  return (
    <Box p={4} bg="gray.50" minHeight="100vh">
      <Heading mb={4} textAlign="center" color="teal.600">
        Dominoes Application
      </Heading>

      {/* Menampilkan semua kartu domino */}
      <VStack spacing={4} mb={4}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} wrap="wrap" justify="center">
          {dominoes.map((domino, index) => (
            <Domino 
              key={index} 
              domino={domino} 
              onSelect={() => setSelectedIndex(index)} // Menetapkan indeks saat domino dipilih
            />
          ))}
        </Stack>
      </VStack>

      {/* Menampilkan jumlah double numbers */}
      <Text mb={4} fontSize="lg" textAlign="center" fontWeight="semibold">
        Number of doubles: {countDoubles()}
      </Text>

      {/* Tombol untuk fitur tambahan */}
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
        <Button colorScheme="red" onClick={removeNumber} isDisabled={selectedIndex === null}>
          Remove Selected Number
        </Button>
      </HStack>

      {/* Input untuk menambah angka */}
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
