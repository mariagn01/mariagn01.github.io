import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileOpen(false); // Close drawer after clicking
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          bgcolor: "rgba(10, 25, 47, 0.8)", // semi-transparent dark navy
          backdropFilter: "blur(8px)", // blur background
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          borderBottom: "1px solid rgba(168, 178, 209, 0.1)",
        }}
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
            {menuItems.map((item) => (
              <Button
                key={item.label}
                color="primary"
                onClick={() => handleScroll(item.id)}
                sx={{ outline: "none", "&:focus": { outline: "none" } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger menu for mobile */}
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "primary.main",
              "&:focus": { outline: "none" },
            }}
            onClick={() => setMobileOpen(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
            <IconButton onClick={() => setMobileOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} sx={{ p: 0 }}>
                <Button
                  fullWidth
                  onClick={() => handleScroll(item.id)}
                  sx={{
                    justifyContent: "flex-start",
                    py: 2,
                    px: 3,
                    "&:focus": { outline: "none" },
                  }}
                >
                  {item.label}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
