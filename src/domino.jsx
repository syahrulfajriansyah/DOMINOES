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
      bg="white" // Latar belakang putih untuk tampilan lebih bersih
      width="100px" // Menambah sedikit lebar kartu domino
      height="150px" // Tinggi kartu domino untuk proporsi yang baik
      boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)" // Bayangan yang lebih dalam untuk tampilan lebih nyata
      _hover={{
        bg: "teal.100", // Perubahan warna latar belakang saat hover
        cursor: "pointer",
        transform: "scale(1.05)", // Meningkatkan ukuran saat hover
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)", // Efek bayangan lebih dalam saat hover
      }} 
      transition="background-color 0.3s, transform 0.3s, box-shadow 0.3s" // Efek transisi halus saat hover
      onClick={() => alert(`Kartu Domino: [${domino[0]}, ${domino[1]}]`)} // Menambahkan interaksi saat kartu domino diklik
    >
      <Box fontSize="3xl" fontWeight="bold" color="gray.800">
        {domino[0]} {/* Menampilkan angka sisi atas */}
      </Box>
      <Box mt={3} mb={3} height="2px" bg="gray.600" /> {/* Garis pemisah */}
      <Box fontSize="3xl" fontWeight="bold" color="gray.800">
        {domino[1]} {/* Menampilkan angka sisi bawah */}
      </Box>
    </Box>
  );
};

export default Domino;
