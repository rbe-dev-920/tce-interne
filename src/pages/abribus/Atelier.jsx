import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Collapse,
  IconButton,
  Divider
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const getStatusColor = (statut) => {
  switch (statut) {
    case 'Disponible':
      return '#e67e22';
    case 'Indisponible':
    case 'Aux Ateliers':
      return '#e74c3c';
    case 'Affecté':
      return '#7f8c8d';
    case 'Au CT':
      return '#9265ca';
    case 'Réformé':
      return '#292c3b';
    default:
      return '#7f8c8d';
  }
};

const Atelier = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <Box>
      <Box p={8} fontFamily="Montserrat">
        {/* Titre principal */}
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
          Véhicules en Ateliers
        </Text>

        {/* Résumé des catégories */}
        <Flex
          direction="row"
          justify="space-around"
          align="center"
          bg="gray.100"
          p={4}
          borderRadius="md"
          mb={8}
          flexWrap="wrap"
        >
          <Text><strong>TCP - Bus :</strong> 2</Text>
          <Text><strong>TCP - Cars :</strong> 0</Text>
          <Text><strong>VTC - Van :</strong> 0</Text>
          <Text><strong>VTC - LuxTr :</strong> 0</Text>
          <Text><strong>DIV : Collection :</strong> 0</Text>
        </Flex>

        {/* Séparateur pour liste des véhicules */}
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Véhicule(s) en atelier :
        </Text>

        {/* Encadré véhicule en atelier */}
        <Box bg="gray.200" borderRadius="md" p={4} mb={6}>
          <Flex justify="space-between" align="center" flexWrap="wrap">
            <Text><strong>Parc :</strong> 920</Text>
            <Text><strong>Type :</strong> TCP - Bus</Text>
            <Text><strong>Plaque :</strong> FG-920-RE</Text>
            <Text><strong>État technique :</strong> 88%</Text>
            <Text><strong>État :</strong> Aux Ateliers</Text>
            <IconButton
              icon={showHistory ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onClick={() => setShowHistory(!showHistory)}
              variant="ghost"
              aria-label="Afficher l'historique"
            />
          </Flex>

          {/* Historique avec rectangles de couleur */}
          <Collapse in={showHistory} animateOpacity>
            <Box mt={4} bg="white" p={4} borderRadius="md" boxShadow="sm">
              <Text fontWeight="bold" mb={2}>Historique :</Text>
              <Divider mb={2} />
              {[
                { date: '4 juin', statut: 'Affecté', desc: 'retour en service' },
                { date: '4 juin', statut: 'Aux Ateliers', desc: 'pose' },
                { date: '3 juin', statut: 'Indisponible', desc: 'commande de la pièce (Bras de rétroviseur AVD)' },
                { date: '30 mai', statut: 'Aux Ateliers', desc: 'Validation atelier : acc sur parc rétro AVD cassé' },
                { date: '29 mai', statut: 'Indisponible', desc: 'accident sur parc' },
              ].map((item, index) => (
                <Flex key={index} align="center" mb={2}>
                  <Box
                    bg={getStatusColor(item.statut)}
                    color="white"
                    fontSize="xs"
                    fontWeight="bold"
                    px={2}
                    py={1}
                    borderRadius="md"
                    mr={3}
                    minW="120px"
                    textAlign="center"
                  >
                    {item.statut}
                  </Box>
                  <Text fontSize="sm">
                    <strong>{item.date}</strong> : {item.desc}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Collapse>
        </Box>

        {/* Futurs passages */}
        <Box mt={10}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Véhicules indisponibles / Futurs passages
          </Text>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Flex justify="space-between" align="center" flexWrap="wrap">
            <Text><strong>Parc :</strong> 426</Text>
            <Text><strong>Type :</strong> TCP - Bus</Text>
            <Text><strong>Plaque :</strong> AG-280-XY</Text>
            <Text><strong>État technique :</strong> 65%</Text>
            <Text><strong>État :</strong> Immobilisé</Text>
            <IconButton
              icon={showHistory ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onClick={() => setShowHistory(!showHistory)}
              variant="ghost"
              aria-label="Afficher l'historique"
            />
          </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Atelier;
