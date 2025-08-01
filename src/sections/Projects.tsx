import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";

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
          pb: 10,
        }}
      >
        <h2>Projects</h2>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" } }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="src/assets/weather.jpg"
                alt="Weather App"
              />
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  Weather App
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  A JavaScript app that displays real-time weather data for the
                  user's current location or any specified city.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {["Javascript", "HTML", "CSS"].map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Button
                    startIcon={<GitHub />}
                    variant="outlined"
                    size="small"
                    onClick={() =>
                      window.open("https://github.com/mariagn01/weather-app")
                    }
                    sx={{ mr: 2 }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" } }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="src/assets/movietickets.png"
                alt="Movie Tickets App"
                sx={{ objectPosition: "top" }}
              />
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  Movie Tickets
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  A full-stack web application that let you purchase cinema
                  tickets. The user can view a list of purchased tickets, and
                  delete them if needed.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {[
                      "Java",
                      "JavaScript",
                      "HTML/CSS",
                      "Bootstrap",
                      "H2 Database",
                    ].map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Button
                    startIcon={<GitHub />}
                    variant="outlined"
                    size="small"
                    onClick={() =>
                      window.open("https://github.com/mariagn01/movie-tickets")
                    }
                    sx={{ mr: 2 }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
