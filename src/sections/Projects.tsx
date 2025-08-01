import { Container, Box } from "@mui/material";

export function Projects() {
  return (
    <Box
      sx={{
        bgcolor: "#fefefe",
        width: "100vw",
        mt: 20,
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          mt: 5,
        }}
      >
        <h2>Projects</h2>
      </Container>
    </Box>
  );
}
