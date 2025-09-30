import { useMemo } from "react";
import { Box } from "@mui/material";

export default function Grid() {
  const rows = 29;
  const cols = 15;

  const cells = useMemo(
    () => Array.from({ length: rows * cols }),
    [rows, cols]
  );

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    const cell = e.target as HTMLElement;
    // Generate a random blue hue between 200 and 240 (blue spectrum)
    // Saturation between 70-90% for rich blues
    // Lightness between 50-70% for visible but not too bright
    const color = `hsl(${220 + Math.random() * 20}, ${
      70 + Math.random() * 20
    }%, ${50 + Math.random() * 20}%)`;

    cell.style.backgroundColor = color;

    setTimeout(() => {
      cell.style.backgroundColor = "transparent";
    }, 800);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "45%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none", // This ensures the grid doesn't interfere with other elements
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "grid",
          gap: "1px",
          gridTemplateColumns: `repeat(${cols}, 40px)`,
          gridTemplateRows: `repeat(${rows}, 40px)`,
          bgcolor: "transparent",
          pointerEvents: "auto", // Re-enable pointer events for the grid itself
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "15%",
            height: "100%",
            background: "linear-gradient(to right, #0A192F, transparent)",
            zIndex: 1,
            pointerEvents: "none",
          },
        }}
      >
        {cells.map((_, i) => (
          <Box
            key={i}
            onMouseEnter={handleHover}
            sx={{
              width: "40px",
              height: "40px",
              transition: "background-color 0.3s",
              bgcolor: "transparent",
              border: "1px solid rgba(255,255,255,0.03)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
