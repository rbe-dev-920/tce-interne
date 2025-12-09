export const vehiculesDynamiques = JSON.parse(localStorage.getItem('vehiculesDynamiques')) || [];

export function ajouterVehicule(nouveauVehicule) {
  vehiculesDynamiques.push(nouveauVehicule);
  localStorage.setItem('vehiculesDynamiques', JSON.stringify(vehiculesDynamiques));
}
