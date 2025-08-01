import { Container, Typography, Box, IconButton } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export function Hero() {
  return (
    <Container
      id="about"
      maxWidth="lg"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        pb: { xs: 8, md: 10 },
      }}
    >
      <h1>Maria Granli</h1>
      <Typography sx={{ fontSize: "24px" }}>
        I’m a software engineering student from Oslo, currently in my third
        year, working on developing my technical understanding and skills. I
        also have experience in web development and graphic design from my
        previous bachelor’s degree in media and communication.{" "}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
          animation: "bounce 2s infinite",
        }}
      >
        <IconButton
          onClick={() =>
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          sx={{
            color: "gray",
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
}
