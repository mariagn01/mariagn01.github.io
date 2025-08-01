import React from "react";
import { Box, Container, Paper, Typography, Chip } from "@mui/material";
import { CoPresent, Code, Terminal } from "@mui/icons-material";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <CoPresent />,
      skills: [
        "JavaScript/Typescript",
        "React",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material-UI",
        "Bootstrap",
        "jQuery",
      ],
    },
    {
      title: "Backend",
      icon: <Code />,
      skills: ["Java", "Python", "SQL", "Spring Boot", "REST APIs"],
    },
    {
      title: "Development tools",
      icon: <Terminal />,
      skills: ["Git", "Docker", "IntelliJ", "Visual Studio Code"],
    },
  ];
  return (
    <Box
      id="skills"
      sx={{
        bgcolor: "#fefefe",
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
          alignItems: "flex-start",
          flexDirection: "column",
          mt: 20,
          mb: 20,
        }}
      >
        <h2>Technical skills</h2>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, width: "100%" }}>
          {skillCategories.map((category) => (
            <Box
              key={category.title}
              sx={{
                flex: { xs: "1 1 100%", md: "1" },
                minWidth: { md: "0" },
                width: { xs: "100%", md: "calc(33.333% - 10.67px)" },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "80%",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  {React.cloneElement(category.icon, {
                    sx: { color: "primary.main", mr: 2 },
                  })}
                  <Typography variant="h5" sx={{ color: "primary.main" }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="default"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
