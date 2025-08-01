import { AppBar, Toolbar, Button, Box } from "@mui/material";

export function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ bgcolor: "transparent", boxShadow: 0 }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 2,
          }}
        >
          {[
            { label: "About", id: "about" },
            { label: "Skills", id: "skills" },
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <Button
              key={item.label}
              color="inherit"
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              sx={{ outline: "none", "&:focus": { outline: "none" } }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
