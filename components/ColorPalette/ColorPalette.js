import { ColorDot, PaletteWrapper } from "./ColorPaletteStyled";

export default function ColorPalette({ colors }) {
  if (!colors || colors.length === 0) return null;          //wenn es keine color-Prop gibt oder(||) das Array leer ist - gib "null" zurück

  return (
   <PaletteWrapper>
      {colors.map((color) => (      //über colors-Array iteriert / für jede einzelne Farbpalette, soll ein neuer Kreis erstellt werden
        <ColorDot
          key={color}       //jeder Kreis - ein key
         color={color}
        ></ColorDot>
      ))}
    </PaletteWrapper>
  );
}
