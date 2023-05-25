import Link from "next/link";

function Navegacion() {
  return (
    <div>
      <fieldset class="navegacion">
        <div class="deNavegacion">
        <ul>
          <li class="listaDeNavegacion">
            <Link href="/">Sobre mí</Link>
          </li>
        </ul>
        <ul>
          <li class="listaDeNavegacion">
            <Link href="/datos">Datos Personales</Link>
          </li>
        </ul>
        <ul>
          <li class="listaDeNavegacion">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul></div>
      </fieldset>
    </div>
  );
}

export default Navegacion;
