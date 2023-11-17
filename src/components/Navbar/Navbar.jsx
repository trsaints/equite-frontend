function Navbar({ links }) {
  const linksList = links.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url}>{link.name}</a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{linksList}</ul>
    </nav>
  );
}

export default Navbar;
