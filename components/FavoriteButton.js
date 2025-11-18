import { Heart } from "lucide-react";

export default function FavoriteButton({ isFavorite, onToggle }) {
  console.log(onToggle);

  return (
    <button
      onClick={() => {
        console.log("Button clicked!");
        onToggle();
      }}
    >
      <Heart fill={isFavorite ? "red" : "none"} />
    </button>
  );
}
