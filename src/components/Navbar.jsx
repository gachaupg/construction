import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import {
  Call,
  Email,
  Home,
  WhatsApp,
  WhatshotOutlined,
} from "@mui/icons-material";
const pages = [
  { four: "Login" },
  { three: "Dashboard" },
  { five: "New Product" },
  { six: "Logout" },
];
const settings = [
  { one: "Home" },
  { seven: "About Us" },
  { eight: "Projects" },
  { nine: "Contact" },
  { ten: "Services" },
  { five: "Gallery" },
];

function ResponsiveAppBar() {
  const { user, loading } = useSelector((state) => ({ ...state.auth }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{
        color: "black ",
        background: "white",
        position: "fixed",
        zIndex: "100",
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 900,
                fontSize: "2rem",
                letterSpacing: ".0rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Edyche <span style={{ color: "red" }}>Builders</span>
            </Typography>
          </Link>
          <>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>


                </MenuItem> */}
              {/* ))} */}
              
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <>
                    <Link to="/">
                      {setting.one}
                    </Link>
                  </>
                  <>
                    <Link to="/about">
                     
                        {setting.seven}
                     
                    </Link>
                  </>

                  <>
                    <Link to="/projects">
                      
                        {setting.eight}
                      
                    </Link>
                  </>
                  <>
                    <Link to="/services">
                      {setting.ten}
                    </Link>
                  </>
                  <>
                    <Link to="/photos">
                      {setting.five}
                    </Link>
                  </>
                  <>
                    <Link to="/contact">
                      {setting.nine}
                    </Link>
                  </>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          </>
          <Link to="/">
            <Home
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                fontSize: "2rem",
              }}
            />
          </Link>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{ flexGrow: 1, ml: 20, display: { xs: "none", md: "flex" } }}
          >
            <div
              style={{
                display: "flex",
                gap: "2rem",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/"
              >
              Home
              </Link>
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/about"
              >
              About us
              </Link>
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/projects"
              >
              Projects
              </Link>

              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/services"
              >
              Services
              </Link>
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/photos"
              >
              Gallery
              </Link>
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/contact"
              >
              Contact
              </Link>
            </div>
          </Box>
          <Box
            style={{
              display: "flex",
              gap: "1rem",
              textDecoration: "none",
              listStyle: "none",
              flexWrap: "wrap",
            }}
            sx={{ flexGrow: 0 }}
          >
            <a href="https://wa.me/0716 483268">
              <WhatsApp />
            </a>
            <a href="mailto:edyche.em@gmail.com">
              <Email />
            </a>

            <a style={{ marginRight: ".7rem" }} href="tel:+254 716 483268">
              <Call />
            </a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: ".5rem",
                  alignItems: "",
                }}
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                {/* {user?.result?.name} */}
                <Avatar alt="" src={user?.result?.img} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {user?.result?.admin === true ? (
                    <>
                      <p>
                        <Link to="/new-product">
                            {setting.five}
                        </Link>
                      </p>
                      {user?.result?._id ? (
                        <>
                          <p>
                            <Link to="/dashboard">
                                {setting.three}
                            </Link>
                          </p>
                          <p></p>

                          <Typography
                            onClick={() => handleLogout()}
                            textAlign="center"
                          >
                            {setting.six}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Link to="/login">
                              {setting.four}
                          </Link>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <>
                        <Link to="/login">
                          <Typography textAlign="center">
                            {setting.four}
                          </Typography>
                        </Link>
                        <Typography
                          onClick={() => handleLogout()}
                          textAlign="center"
                        >
                          {setting.six}
                        </Typography>
                      </>
                    </>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
