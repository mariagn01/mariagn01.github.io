import { Box, Container, Paper, Typography } from "@mui/material";
import { Work, CalendarToday, Code } from "@mui/icons-material";

export function WorkExperience() {
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
          alignItems: { xs: "center", md: "flex-start" },
          flexDirection: "column",
          mt: { xs: 0, md: 15 },
          mb: { xs: 10, md: 25 },
          px: { xs: 3, sm: 4, md: 3 },
        }}
      >
        <h2>Work experience</h2>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 10, md: 4 } }}>
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" } }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                pb: { xs: 2, md: 3, lg: 4 },
                height: "100%",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Code sx={{ color: "primary.main", mr: 2 }} />
                <Typography variant="h5" component="h3">
                  Frontend Developer
                </Typography>
              </Box>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 1, fontSize: { xs: 16, md: 18 } }}
              >
                Summer internship at Bouvet ASA
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <CalendarToday
                  sx={{ fontSize: 16, mr: 1, color: "text.secondary" }}
                />
                <Typography variant="body2" color="text.secondary">
                  June/July 2025
                </Typography>
              </Box>
              <Typography variant="body1">
                Working in a team of both developers and designers, we developed
                a tool for BaneNOR to support the handling of deviations during
                planned railway closures. Primarily using React and related
                libraries. Worked on implementing design, logic, and API
                integration.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" } }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                pb: { xs: 2, md: 3, lg: 4 }, // Progressive increase
                height: "100%",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Work sx={{ color: "primary.main", mr: 2 }} />
                <Typography variant="h5" component="h3">
                  Cyber Security Analyst
                </Typography>
              </Box>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 1, fontSize: { xs: 16, md: 18 } }}
              >
                Norwegian Security Authority (NSM)
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <CalendarToday
                  sx={{ fontSize: 16, mr: 1, color: "text.secondary" }}
                />
                <Typography variant="body2" color="text.secondary">
                  August 2025 - Present
                </Typography>
              </Box>
              <Typography variant="body1">
                Alongside my studies, I work part time with cyber security for
                the Norwegian Security Authority.
              </Typography>
            </Paper>
          </Box>
        </Box>
        <Typography
          sx={{
            mt: 15,
            mb: { xs: 0, md: 5 },
            color: "text.secondary",
            px: { xs: 2, md: 0 },
          }}
        >
          Only work experience relevant to my ongoing degree is listed here.
          Feel free to contact me for my full CV.
        </Typography>
      </Container>
    </Box>
  );
}
