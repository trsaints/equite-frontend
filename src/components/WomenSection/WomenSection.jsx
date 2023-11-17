import WomenList from "../WomenList/WomenList";

function WomenSection() {
  return (
    <article>
      <h2>Grandes nomes, grandes mulheres.</h2>

      <p>
        Estamos aqui para te lembrar que as mulheres também são fortes.
        <br />
        Conheça abaixo sobre os grandes nomes de{" "}
        <a href="#women-list">mulheres que ficaram para história</a>.
      </p>

      <WomenList />
    </article>
  );
}

export default WomenSection;
