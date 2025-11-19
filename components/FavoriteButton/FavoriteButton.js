import { Heart } from "lucide-react";
import { FavoriteButtonStyled } from "./FavoriteButtonStyled";

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <FavoriteButtonStyled
      onClick={() => {
        onToggle();
      }}
    >
      <Heart fill={isFavorite ? "red" : "none"} />
    </FavoriteButtonStyled>
  );
}
