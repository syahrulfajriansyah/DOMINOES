import React from "react";
import { Box } from "@chakra-ui/react";

// Komponen untuk menampilkan satu kartu domino
const Domino = ({ domino }) => {
  return (
    <Box
      border="2px solid" // Memberikan border 2px agar lebih tegas
      borderColor="gray.400" // Warna border abu-abu lebih gelap
      borderRadius="lg" // Border dengan ukuran large untuk tampilan lebih rounded
      p={4} // Padding sebesar 4 (standar dari Chakra UI)
      display="inline-block" // Agar tampilan domino inline
      textAlign="center" // Memusatkan teks di dalam kotak
      bg="gray.200" // Latar belakang warna abu-abu muda
      width="80px" // Menambah sedikit lebar kartu domino
      height="120px" // Tinggi kartu domino untuk proporsi yang baik
      boxShadow="lg" // Memberikan bayangan agar terlihat lebih menonjol
      _hover={{ bg: "teal.200", cursor: "pointer", transform: "scale(1.05)" }} // Animasi hover dengan perubahan warna latar belakang
      transition="background-color 0.3s, transform 0.3s" // Efek transisi halus saat hover
      onClick={() => alert(`Kartu Domino: [${domino[0]}, ${domino[1]}]`)} // Menambahkan interaksi saat kartu domino diklik
    >
      <Box fontSize="2xl" fontWeight="bold" color="gray.800">
        {domino[0]} {/* Menampilkan angka sisi atas */}
      </Box>
      <Box mt={2} mb={2} height="1px" bg="gray.600" /> {/* Garis pemisah */}
      <Box fontSize="2xl" fontWeight="bold" color="gray.800">
        {domino[1]} {/* Menampilkan angka sisi bawah */}
      </Box>
    </Box>
  );
};

export default Domino;
