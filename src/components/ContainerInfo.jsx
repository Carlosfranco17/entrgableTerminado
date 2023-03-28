import React from "react";
import Button from "./Button";
import "../style/ContainerInfo.css";

const ContainerInfo = ({ quoete, CambiarFrase }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">Galletas de la fortuna</h1>

      <article className="containerInfo__phrase">
        <p>{quoete.phrase}</p>
      </article>
      <article className="containerInfo__author">
        <h4>fuente: {quoete.author}</h4>
      </article>

      <Button CambiarFrase={CambiarFrase} />
    </section>
  );
};

export default ContainerInfo;
