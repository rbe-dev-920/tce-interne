import React, { useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";

const MonProfil = () => {
  const { matricule } = useContext(UserContext);

  return (
    <>
      <Header />
      <Menu />
      <div className="page-container">
        <h1>Mon Profil</h1>
        <p className="info">Bienvenue sur votre espace personnel, {matricule}.</p>
      </div>
    </>
  );
};

export default MonProfil;
