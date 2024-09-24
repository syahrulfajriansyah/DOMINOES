// Import statement Chakra UI dan React
import React, { useState } from "react";
import { Box, Button, Stack, Heading, Text } from "@chakra-ui/react";
import Domino from "./domino";
import { dominoData } from "./utils"; // Mengimpor data domino dari utils.js

// Fungsi utama aplikasi
function App() {
  const [dominoes, setDominoes] = useState(dominoData); // Menyimpan data domino
  const [isAsc, setIsAsc] = useState(true); // Menyimpan state sorting (asc atau desc)

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

  return (
    <Box p={4}>
      <Heading mb={4}>Dominoes Application</Heading>

      {/* Menampilkan semua kartu domino */}
      <Stack spacing={2} mb={4}>
        {dominoes.map((domino, index) => (
          <Domino key={index} domino={domino} />
        ))}
      </Stack>

      {/* Menampilkan jumlah double numbers */}
      <Text mb={4}>Number of doubles: {countDoubles()}</Text>

      {/* Tombol untuk fitur tambahan */}
      <Button onClick={sortDominoes} mb={2}>
        Sort {isAsc ? "Descending" : "Ascending"}
      </Button>
      <Button onClick={flipDominoes} mb={2} ml={2}>
        Flip Dominoes
      </Button>
      <Button onClick={removeDuplicates} mb={2} ml={2}>
        Remove Duplicates
      </Button>
      <Button onClick={resetDominoes} ml={2}>
        Reset Dominoes
      </Button>
    </Box>
  );
}

export default App;
