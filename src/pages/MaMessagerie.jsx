import React, { useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";

const MaMessagerie = () => {
  const { matricule } = useContext(UserContext);

  return (
    <>
      <Header />
      <Menu />
      <div className="page-container">
        <h1>Ma Messagerie</h1>
        <p className="info">Ici s’affichera votre messagerie personnelle, {matricule}.</p>
      </div>
    </>
  );
};

export default MaMessagerie;
