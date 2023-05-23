import Link from "next/link";

function Navegacion() {
  return (
    <div class>
      <fieldset class="navegacion">
        <ul>
          <li class="listaDeNavegacion">
            <Link href="/Website/">Sobre mí</Link>
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
        </ul>
      </fieldset>
    </div>
  );
}

export default Navegacion;
