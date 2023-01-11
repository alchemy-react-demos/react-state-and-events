import './Display.css';
export default function Display({ animal }) {
  return (
    <div className="display">
      <img src={`/animals/${animal}.svg`} />
    </div>
  );
}
