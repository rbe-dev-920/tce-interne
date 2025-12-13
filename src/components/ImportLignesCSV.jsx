import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Box,
  Code,
  Divider,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { API_URL } from '../config';

const ImportLignesCSV = ({ isOpen, onClose, onSuccess }) => {
  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_URL}/api/import/lignes`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Erreur lors de l'import (${response.status})`);
      }

      toast({
        title: 'Import réussi',
        description: `${result.imported} ligne(s) importée(s) avec succès`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      console.error('Erreur import:', error);
      toast({
        title: 'Erreur lors de l\'import',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadTemplate = () => {
    const template = `numéro de ligne,Nom de la ligne,Jours de fonctionnement,type,premier départ,dernier arrivé au dépôt,Sens 1,Direction 1,Sens 2,Direction 2
4201,SEMAINE_4201,L; M; M; J; V,autobus,04h37,00h10,Aller,Gare SNCF → Centre Ville,Retour,Centre Ville → Gare SNCF
4202,SEMAINE_4202,L; M; M; J; V,autobus,05h00,01h00,Aller,Gare SNCF → Mairie`;

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/csv;charset=utf-8,' + encodeURIComponent(template)
    );
    element.setAttribute('download', 'template_lignes.csv');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Importer des lignes (CSV)</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={2}>
                Format attendu du CSV :
              </Text>
              <Code display="block" p={2} borderRadius="md" overflow="auto" fontSize="xs">
              {`numéro de ligne,Nom de la ligne,Jours de fonctionnement,type,premier départ,dernier arrivé au dépôt,Sens 1,Direction 1,Sens 2,Direction 2
4201,SEMAINE_4201,L; M; M; J; V,autobus,04h37,00h10,Aller,Gare → Centre,Retour,Centre → Gare`}
            </Code>
          </Box>

          <Box fontSize="sm" color="gray.600">
            <Text mb={1}>
              <strong>Colonnes requises :</strong> numéro de ligne, Nom de la ligne, Jours de fonctionnement, type, premier départ, dernier arrivé au dépôt
            </Text>
            <Text mb={1}>
              <strong>Colonnes optionnelles :</strong> Sens 1, Direction 1, Sens 2, Direction 2, etc. (tu peux ajouter autant de sens que tu veux)
            </Text>
              </Text>
              <Text>
                <strong>Type :</strong> autobus, minibus, autocar, van
              </Text>
            </Box>

            <Divider />

            <FormControl>
              <FormLabel htmlFor="csv-file">Sélectionner un fichier CSV</FormLabel>
              <Input
                id="csv-file"
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                p={1}
              />
            </FormControl>

            <Button
              leftIcon={<DownloadIcon />}
              colorScheme="blue"
              variant="outline"
              onClick={downloadTemplate}
              size="sm"
            >
              Télécharger le modèle
            </Button>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImportLignesCSV;
