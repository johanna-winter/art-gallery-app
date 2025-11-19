import { Heart } from "lucide-react";

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={() => {
        onToggle();
      }}
    >
      <Heart fill={isFavorite ? "red" : "none"} />
    </button>
  );
}
