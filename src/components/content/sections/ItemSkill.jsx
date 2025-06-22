export default function ItemSkill({ webs }) {
  return (
    <>
      <li>
        <img src={webs.image} alt={webs.name} />
        <h2>{webs.name}</h2>
      </li>
    </>
  );
}
