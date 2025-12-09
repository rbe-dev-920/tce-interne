import React, { useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";

const MonCasier = () => {
  const { matricule } = useContext(UserContext);

  return (
    <>
      <Header />
      <Menu />
      <div className="page-container">
        <h1>Mon Casier</h1>
        <p className="info">Consultez ici les documents qui vous concernent, {matricule}.</p>
      </div>
    </>
  );
};

export default MonCasier;
