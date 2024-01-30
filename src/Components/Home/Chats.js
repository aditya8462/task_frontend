import * as React from "react";
import {
  Badge,
  Box,
  Typography,
  badgeClasses,
  Avatar,
  Card,
} from "@mui/material";

export default function Chats() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Card
        style={{
          height: "180px",
          borderRadius: 16,
          padding: "24px",
          gap: "8px",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Box style={{ width: "362px", height: "40px" }}>
            <Typography
              style={{
                padding: "0px, 0px, 16px, 0px",
                fontWeight: 600,
                fontSize: 20,
                lineHeight: "24.2px",
                color: "#131313",
              }}
            >
              Chats
            </Typography>
            <Typography
              style={{
                padding: "0px, 0px, 16px, 0px",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "16.94px",
                color: "#454545",
              }}
            >
              2 unread messages
            </Typography>
          </Box>
          <Box style={{ width: "272px", height: "56px" }}>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  height: "56px",
                  width: "56px",
                  backgroundColor: "#FFF7E8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                }}
              >
                <Badge
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeInset="10%"
                  color="error"
                  variant="dot"
                  sx={{
                    [`& .${badgeClasses.badge}`]: {
                      "&::after": {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        border: "1px solid",
                        content: '""',
                      },
                    },
                    "@keyframes ripple": {
                      "0%": {
                        transform: "scale(1)",
                        opacity: 1,
                      },
                      "100%": {
                        transform: "scale(2)",
                        opacity: 0,
                      },
                    },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="../../Assets/Image1.png"
                    style={{ height: "32px", width: "32px" }}
                  />
                </Badge>
              </div>
              <div
                style={{
                  height: "56px",
                  width: "56px",
                  backgroundColor: "#FFF7E8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                }}
              >
                <Badge
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeInset="10%"
                  variant="dot"
                  color="error"
                  sx={{
                    [`& .${badgeClasses.badge}`]: {
                      "&::after": {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        border: "1px solid",
                        content: '""',
                      },
                    },
                    "@keyframes ripple": {
                      "0%": {
                        transform: "scale(1)",
                        opacity: 1,
                      },
                      "100%": {
                        transform: "scale(2)",
                        opacity: 0,
                      },
                    },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="../../Assets/Image4.jpg"
                    style={{ height: "32px", width: "32px" }}
                  />
                </Badge>
              </div>
              <div
                style={{
                  height: "56px",
                  width: "56px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="../../Assets/Image3.webp"
                  style={{ height: "32px", width: "32px" }}
                />
              </div>
              <div
                style={{
                  height: "56px",
                  width: "56px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="../../Assets/Image2.webp"
                  style={{ height: "32px", width: "32px" }}
                />
              </div>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
