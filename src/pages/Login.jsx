import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import users from "../data/users"; // ✅ Import des utilisateurs

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Image,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext); // ✅ Pour stocker l'utilisateur
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const utilisateur = users.find(
        (u) => u.matricule === matricule && u.password === password
      );

      if (utilisateur) {
        setSuccess(true);
        setUser(utilisateur); // ✅ Stocker dans le contexte
        setTimeout(() => {
          navigate("/dashboard");
        }, 4000);
      } else {
        setError("Êtes-vous sûr de votre saisie ? L'un des champs comporte une erreur.");
      }
    }, 1000);
  };

  return (
    <Flex minHeight="100vh" flexDirection="column" bg="#2d2d2d" fontFamily="'Montserrat', sans-serif">
      <Flex
        bg="white"
        height="80px"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
      >
        <Image
          src="/wbm_connexion.png"
          alt="Logo Connexion"
          height="110px"
          objectFit="contain"
          userSelect="none"
          pointerEvents="none"
        />
      </Flex>

      <Flex flex="1" justify="center" align="center" px={4}>
        <Box
          bg="#393939"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          width="100%"
          maxWidth="400px"
          color="white"
        >
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Portail de Connexion
          </Heading>

          {success && (
            <HStack
              mb={6}
              spacing={2}
              color="green.400"
              bg="green.900"
              p={3}
              borderRadius="md"
              alignItems="center"
              fontWeight="semibold"
            >
              <Icon as={CheckCircleIcon} w={6} h={6} />
              <Text>Connexion réussie. Redirection en cours...</Text>
            </HStack>
          )}

          {error && (
            <HStack
              mb={6}
              spacing={2}
              color="red.400"
              bg="red.900"
              p={3}
              borderRadius="md"
              alignItems="center"
              fontWeight="semibold"
            >
              <Icon as={WarningIcon} w={6} h={6} />
              <Text>{error}</Text>
            </HStack>
          )}

          <form onSubmit={handleSubmit}>
            <FormControl id="matricule" mb={4} isRequired>
              <FormLabel>Matricule</FormLabel>
              <Input
                type="text"
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
                bg="#555"
                border="none"
                color="white"
                _focus={{ bg: "#666", boxShadow: "0 0 0 2px #3182CE" }}
                height="40px"
              />
            </FormControl>

            <FormControl id="password" mb={6} isRequired>
              <FormLabel>Mot de passe</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="#555"
                border="none"
                color="white"
                _focus={{ bg: "#666", boxShadow: "0 0 0 2px #3182CE" }}
                height="40px"
              />
            </FormControl>

            <Button
              type="submit"
              bg="#3182CE"
              _hover={{ bg: "#2b6cb0" }}
              color="white"
              width="100%"
              height="44px"
              fontSize="md"
              isLoading={loading}
            >
              Se connecter
            </Button>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
