import React from 'react';

function Inicio() {
  return (
    <div class="contenedor">
      <div class="TituloDePagina">
        <h1>
          <center>Sobre mí</center>
        </h1>
      </div>
      <br />

      <fieldset>
        <h2>
          <u>Perfil</u>
        </h2>
        <p>
          Persona comprometida, creativa y responsable, con ganas de superarse,
          facilidad para trabajar en equipo aportando ideas para lograr los
          objetivos buscados.
        </p>
      </fieldset>
      <br />

      <fieldset>
        {" "}
        <h2>
          <u>Experiencia</u>
        </h2>
        <ul>
          <li>Atención al público</li>
          <li>Contralor administrativo</li>
          <li>Ingreso de certificados</li>
          <li>Administración de agenda web</li>
          <li>Notificación a usuarios</li>
          <li>Colaboración con logística interna</li>
        </ul>
      </fieldset>
      <br />
      <fieldset>
        {" "}
        <h2>
          <u>Formación</u>
        </h2><br/>
        <div>
          {" "}
          <p>Carrera de Abogacía</p>
          <br />
          <p class="aLaDerecha">MAYO DEL 2021 - CURSANDO</p>
        </div>
        <div>
        <p>Bachiller en Humanidades</p>
        <br />
        <p class="aLaDerecha"> MARZO DEL 2015 - DICIEMBRE 2021</p></div>
      </fieldset>
      <br />
      <fieldset>
        {" "}
        <h2>
          <u>Voluntariado</u>
        </h2>
        <h3>Grupo Scout Séptimo: Staff</h3>
        <p>
          Pertenezco a este grupo desde los 7 años, hace 5 años que soy educador
          y enseño valores como; honestidad, humildad, sacrificio, tolerancia,
          respeto, optimismo, responsabilidad.
        </p>
      </fieldset>

    </div>
  );
}

export default Inicio;
