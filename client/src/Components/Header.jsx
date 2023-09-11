import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined"
import Link from "@mui/material/Link"
import TvOutlinedIcon from "@mui/icons-material/TvOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import ListItemButton from "@mui/material/ListItemButton"
import { ListItemIcon, ListItemText } from "@mui/material"
import { Tooltip } from "@mui/material"
import Fade from "@mui/material/Fade"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import Container from "@mui/material/Container"
import Logo from "../Images/imdb-logo.png"

function Header() {
  const [state, setState] = React.useState({ left: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/" color="inherit" underline="none">
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} sx={{ typography: "button" }} />
          </ListItemButton>
        </Link>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <LocalMoviesOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Movies"} sx={{ typography: "button" }} />
        </ListItem>
        <Link href="/top250movies" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Top 250 Movies"} inset={true} />
          </ListItemButton>
        </Link>
        <Link href="/mostpopularmovies" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Most Popular Movies"} inset={true} />
          </ListItemButton>
        </Link>
        <Link href="/topboxoffice" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Top Box Office"} inset={true} />
          </ListItemButton>
        </Link>
        <Link href="/top10movies" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Top 10 Movies"} inset={true} />
          </ListItemButton>
        </Link>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <TvOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"TV Shows"} sx={{ typography: "button" }} />
        </ListItem>
        <Link href="/top250tvshows" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Top 250 Shows"} inset={true} />
          </ListItemButton>
        </Link>
        <Link href="/mostpopulartvshows" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Most Popular Shows"} inset={true} />
          </ListItemButton>
        </Link>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} sx={{ typography: "button" }} />
        </ListItem>
        <Link href="/about" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Learn More"} inset={true} />
          </ListItemButton>
        </Link>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ContactSupportOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Support"} sx={{ typography: "button" }} />
        </ListItem>
        <Link href="/contact" color="inherit" underline="none">
          <ListItemButton>
            <ListItemText primary={"Contact Us"} inset={true} />
          </ListItemButton>
        </Link>
        <Divider />
        <Link href="#" color="inherit" underline="none">
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} sx={{ typography: "button" }} />
          </ListItemButton>
        </Link>
        <Divider />
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon>{anchor}</MenuIcon>
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Tooltip title="IMDB Home" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                  <Button
                    color="inherit"
                    disableElevation
                    disableRipple
                    component={Link}
                    href="/"
                    sx={{
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      size="small"
                      sx={{
                        width: 50,
                        height: 32,
                      }}
                      alt="IMDb"
                      src={Logo}
                    />
                    {/* <Typography variant="h6">IMDB</Typography> */}
                  </Button>
                </Tooltip>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button startIcon={<BookmarkAddOutlinedIcon />} color="inherit">
                WatchList
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Watchlist" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <IconButton>
                  <BookmarkAddOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
