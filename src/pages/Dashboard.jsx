import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <>
      <Box p={6}>
        <Text>Bienvenue sur le tableau de bord WBM Transports.
          Bientôt, ce tableau de bord pourra afficher, selon votre compte, les statistiques mais aussi quelque fonctionnalités
          relativement interresantes.
        </Text>
        {/* Ici ton contenu spécifique dashboard */}
      </Box>
    </>
  );
};

export default Dashboard;