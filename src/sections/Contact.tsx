import { Box, Container, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export function Contact() {
  return (
    <Box
      id="experience"
      sx={{
        bgcolor: "background.default",
        width: "100vw",
        height: "100%",
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
          alignItems: "center",
          flexDirection: "column",
          mt: { xs: 5, md: 15 },
          mb: { xs: 15, md: 20 },
        }}
      >
        <h2>Contact</h2>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 4,
            opacity: 0.9,
            color: "text.primary",
            fontSize: { xs: "1.2rem", md: "1.25rem" },
          }}
        >
          Feel free to send me an email or connect with me!
        </Typography>
        <Box
          id="contact"
          sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 4 }}
        >
          <IconButton
            sx={{
              color: "primary.main",
              "&:hover": { color: "primary.main", transform: "scale(1.2)" },
            }}
            href="mailto:mgnielsen@proton.me"
          >
            <Email fontSize="large" />
          </IconButton>
          <IconButton
            sx={{
              color: "primary.main",
              "&:hover": { color: "primary.main", transform: "scale(1.2)" },
            }}
            href="https://www.linkedin.com/in/mgnielsen01/"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            sx={{
              color: "primary.main",
              "&:hover": { color: "primary.main", transform: "scale(1.2)" },
            }}
            href="https://github.com/mariagn01"
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
