import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Revenues from "./Revenues";
import LostDeals from "./LostDeals";
import Quartergoal from "./Quartergoal";
import Customers from "./Customers";
import Growth from "./Growth";
import Chats from "./Chats";
import TopStates from "./TopStates";
import NewDeals from "./NewDeals";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MainListItems from "./ListItems";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 280;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={open}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              padding: 1,
              marginTop: 2,
            }}
          >
            <IconButton variant="soft" color="primary" size="sm">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3823_79)">
                  <ellipse
                    cx="10.4"
                    cy="11"
                    rx="10.4"
                    ry="10.4959"
                    fill="#FFA500"
                  />
                  <ellipse
                    opacity="0.6"
                    cx="7.06439"
                    cy="6.10078"
                    rx="7.06439"
                    ry="6.10078"
                    transform="matrix(0.834795 -0.550561 0.54352 0.839396 -3.0271 5.4007)"
                    fill="url(#paint0_radial_3823_79)"
                  />
                  <path
                    d="M14.9211 1.71294C13.0945 3.02251 12.4305 5.0479 13.1 6.00003C13.7695 6.95216 15.2733 8.3096 17.1 7.00003C18.5716 5.94502 17.5545 4.69525 20.3793 0.616293C20.3793 0.616293 20.1319 0.585939 20.0095 0.570463C18.6045 0.392745 16.6014 0.508275 14.9211 1.71294Z"
                    fill="#008000"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_3823_79"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(7.06439 6.10078) rotate(90) scale(6.10078 7.06439)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_3823_79">
                    <rect
                      width="20.8"
                      height="20.9919"
                      fill="white"
                      transform="translate(0 0.504059)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </IconButton>
            <Typography
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#131313",
                marginLeft: 10,
              }}
            >
              OrangeFarm
            </Typography>
          </Box>
          <div style={{ position: "relative", marginLeft: 10 }}>
            {!open ? (
              <>
                <SearchRoundedIcon
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    height: "45%",
                    transform: "translateY(-50%)",
                    color: "#7D7D7D",
                  }}
                />
                <input
                  type="text"
                //   placeholder="Search..."
                  style={{
                    padding: "10px 0px 10px 20px",
                    borderRadius: "20px",
                    border: "2px solid #F1F1F1",
                    outline: "none",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </>
            ) : (
              <>
                <SearchRoundedIcon
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    height: "45%",
                    transform: "translateY(-50%)",
                    color: "#7D7D7D",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    padding: "10px 30px 10px 40px",
                    borderRadius: "20px",
                    border: "2px solid #F1F1F1",
                    outline: "none",
                    width: "180px",
                    height: "20px",
                  }}
                />
              </>
            )}
          </div>
          <List component="nav">
            <MainListItems />
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                marginLeft: 1,
                marginTop: 5,
              }}
            >
              <Avatar
                variant="outlined"
                size="sm"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
              />
              <Box sx={{ minWidth: 0, flex: 1, marginLeft: 2 }}>
                <Typography
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#131313",
                    letterSpacing: "-0.25px",
                  }}
                >
                  Gustavo Xavier
                </Typography>

                <Chip
                  style={{
                    backgroundColor: "#FFCD71",
                    color: "#131313",
                    fontSize: 10,
                    fontWeight: 400,
                  }}
                  size="small"
                  label="Admin"
                />
              </Box>
            </Box>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 4.17998C13.4791 4.31029 13.6694 4.4993 13.8012 4.72755C13.933 4.95581 14.0016 5.21507 14 5.47865V10.3346C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0896C2.07247 10.8612 2.00053 10.6004 2 10.3346V5.47798C2 4.93865 2.29533 4.44198 2.772 4.17998L7.272 1.52665C7.50169 1.40001 7.75971 1.33359 8.022 1.33359C8.28429 1.33359 8.54231 1.40001 8.772 1.52665L13.272 4.17998H13.25Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 7.99999C6 8.53042 6.21071 9.03913 6.58579 9.4142C6.96086 9.78928 7.46957 9.99999 8 9.99999C8.53043 9.99999 9.03914 9.78928 9.41421 9.4142C9.78929 9.03913 10 8.53042 10 7.99999C10 7.46956 9.78929 6.96085 9.41421 6.58578C9.03914 6.2107 8.53043 5.99999 8 5.99999C7.46957 5.99999 6.96086 6.2107 6.58579 6.58578C6.21071 6.96085 6 7.46956 6 7.99999Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.25px",
                  color: "#131313",
                }}
                primary="Settings"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 5.33332V3.99999C9.33333 3.64637 9.19286 3.30723 8.94281 3.05718C8.69276 2.80713 8.35362 2.66666 8 2.66666H3.33333C2.97971 2.66666 2.64057 2.80713 2.39052 3.05718C2.14048 3.30723 2 3.64637 2 3.99999V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1928 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1928 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 7.99999H14M14 7.99999L12 5.99999M14 7.99999L12 9.99999"
                    stroke="#B01212"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.25px",
                  color: "#B01212",
                }}
                primary="Log out"
              />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} sm={12} md={4.5}>
              <Revenues />
            </Grid>
            <Grid item xs={12} sm={12} md={4.5}>
              <LostDeals />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Quartergoal />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Customers />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Growth />
            </Grid>
            <Grid item xs={12} sm={12} md={3.5}>
              <Chats />
            </Grid>
            <Grid item xs={12} sm={12} md={3.5}>
              <TopStates />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <NewDeals />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
