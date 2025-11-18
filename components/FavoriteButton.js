export default function FavoriteButton({ isFavorite, onToggle }) {
  return <button onClick={onToggle}>{isFavorite ? fill : none}</button>;
}
