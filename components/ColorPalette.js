export default function ColorPalette({ colors }) {
  if (!colors || colors.length === 0) return null;          //wenn es keine color-Prop gibt oder(||) das Array leer ist - gib "null" zurück

  return (
    <div    
      style={{                  //inlineStyles für die dargestellten Farbpaletten
        display: "flex",
        marginTop: "40px",
        gap: "14px",
      }}
    >
      {colors.map((color) => (      //über colors-Array iteriert / für jede einzelne Farbpalette, soll ein neuer Kreis erstellt werden
        <div
          key={color}       //jeder Kreis - ein key
          style={{          //styles für jeden Farbpunkt
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: color,
            border: "2px solid #000",
          }}
        ></div>
      ))}
    </div>
  );
}
