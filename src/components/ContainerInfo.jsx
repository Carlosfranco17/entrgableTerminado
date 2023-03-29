import React from "react";
import Button from "./Button";
import "../style/ContainerInfo.css";

const ContainerInfo = ({ quoete, randomphrase }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">Consejos millonarios</h1>

      <article className="containerInfo__phrase">
        <p>{quoete.phrase}</p>
      </article>
      <article className="containerInfo__author">
        <h4>fuente: {quoete.author}</h4>
      </article>

      <Button randomphrase={randomphrase} />
    </section>
  );
};

export default ContainerInfo;
