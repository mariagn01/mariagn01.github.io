import { AppBar, Toolbar, Button, Box } from "@mui/material";

export function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ bgcolor: "#fcf7f8", boxShadow: 0 }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Experience", id: "experience" },
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
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
