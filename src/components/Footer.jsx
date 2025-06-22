export default function Footer() {
  const now = new Date().getFullYear();
  return (
    <footer>
      <p>
        ©Leynard M. Peñaranda <span id="span">{now}</span>
      </p>
    </footer>
  );
}
