// src/pages/NotFound.jsx

import React from 'react';

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
    </div>
  );
}

export default NotFound; // ✅ C'est cette ligne qui manquait
