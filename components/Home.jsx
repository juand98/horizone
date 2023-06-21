import React from "react";
import Tittle_welcome from "./Tittle_welcome";
import Card from "./Card";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="body_container">
      <Tittle_welcome text="Bienvenido"></Tittle_welcome>
      <p>¿Para que necesitas tú memoria?</p>
      <section className="cards_container">
        <Card img="../src/assets/1_BOTON_MUSICA_OVERD.svg"></Card>
        <Card img="../src/assets/2_BOTON_VIDEO_OVERD.svg"></Card>
        <Card img="../src/assets/3_BOTON_CELULAR_OVERD.svg"></Card>
        <Card img="../src/assets/4_BOTON_VIDEOJUEGOS_OVERD.svg"></Card>
        <Card img="../src/assets/5_BOTON_FOTOGRAFIA_OVERD.svg"></Card>
      </section>
    </div>
  );
};

export default Home;
