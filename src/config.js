// frontend/src/config.js
// Config chargée au runtime (pas au build time)

// Déterminer l'URL API basée sur le domaine actuel
const getApiUrl = () => {
  const hostname = window.location.hostname;
  
  // Production
  if (hostname.includes('tce-interne.fr') || hostname.includes('vercel.app')) {
    return 'https://tce-serv-rbe-serveurs.up.railway.app';
  }
  
  // Développement
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:8081';
  }
  
  // Fallback
  return 'https://tce-serv-rbe-serveurs.up.railway.app';
};

export const API_URL = getApiUrl();

console.log('[CONFIG] API_URL:', API_URL);
console.log('[CONFIG] Hostname:', window.location.hostname);
