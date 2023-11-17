function Card({ name, period, description }) {
  return (
    <details>
      <summary>{name}</summary>

      <p>{period}</p>

      <p>{description}</p>
    </details>
  );
}

export default Card;
