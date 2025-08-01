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
          {["About", "Projects", "Experience", "Skills", "Contact"].map(
            (item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {item}
              </Button>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
