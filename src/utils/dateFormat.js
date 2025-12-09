/**
 * Format date to French format (DD MM AAAA)
 * Example: "2025-12-06" → "06 décembre 2025"
 */
export const formatDateFr = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const jour = String(date.getDate()).padStart(2, '0');
  const mois = String(date.getMonth() + 1).padStart(2, '0');
  const annee = date.getFullYear();
  
  return `${jour} ${mois} ${annee}`;
};

/**
 * Format date to French format with day name (e.g., "lundi 06 décembre 2025")
 */
export const formatDateFrLong = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const moisArray = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  
  const nomJour = jours[date.getDay()];
  const jour = String(date.getDate()).padStart(2, '0');
  const mois = moisArray[date.getMonth()];
  const annee = date.getFullYear();
  
  return `${nomJour} ${jour} ${mois} ${annee}`;
};

/**
 * Format time to HH:mm format
 */
export const formatTime = (timeString) => {
  if (!timeString) return '';
  const [h, m] = timeString.split(':');
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

/**
 * Get day name in French (lun, mar, mer, jeu, ven, sam, dim)
 */
export const getDayNameFr = (dateString) => {
  const date = new Date(dateString);
  const jours = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
  return jours[date.getDay()];
};

/**
 * Get full day name in French (lundi, mardi, etc.)
 */
export const getFullDayNameFr = (dateString) => {
  const date = new Date(dateString);
  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  return jours[date.getDay()];
};

/**
 * Get month name in French
 */
export const getMonthNameFr = (dateString) => {
  const date = new Date(dateString);
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return mois[date.getMonth()];
};
