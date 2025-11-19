import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ artPieces, favoritesData, onToggle }) {
  return (
    <>
      <Spotlight
        artPieces={artPieces}
        favoritesData={favoritesData}
        onToggle={onToggle}
      />
    </>
  );
}
