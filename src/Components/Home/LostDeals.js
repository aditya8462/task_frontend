import * as React from "react";
import { Box, Typography, Card } from "@mui/material";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

export default function LostDeals() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Card
        style={{
          height: "200px",
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
              Lost Deals
            </Typography>
          </Box>
          <Box style={{ width: "129px", height: "58px", display: "flex" }}>
            <Typography
              style={{
                fontSize: 48,
                display: "flex",
                alignItems: "center",
                fontWeight: 500,
                lineHeight: "58.09px",
                color: "#131313",
              }}
            >
              4%
            </Typography>
          </Box>

          <Typography
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "16.94px",
              letterSpacing: "-0.3px",
              color: "#454545",
            }}
          >
            You closed 96 out of 100 deals
          </Typography>
          <Box style={{ width: "100px", marginTop: "74.61px" }}>
            <Typography
              style={{
                fontSize: 14,
                padding: "16px, 0px, 0px, 0px",
                color: "#734A00",
                display: "flex",
                lineHeight: "16.94px",
                letterSpacing: "-0.3px",
                fontWeight: 400,
              }}
            >
              All deals
              <ArrowRightAlt
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "#734A00",
                }}
              />
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
