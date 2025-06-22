export default function ItemCert({ cyber }) {
  return (
    <li>
      <a
        className="certificate-icons"
        href={cyber.link}
        target="_blank"
        rel="noreferrer"
      >
        {cyber.name}
      </a>
    </li>
  );
}
