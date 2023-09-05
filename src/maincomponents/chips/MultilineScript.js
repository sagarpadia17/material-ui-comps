import * as React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
export default function MultilineChips() {
  return (
    <Stack spacing={1} direction="row" justifyContent="center">
      <Box sx={{ width: 100 }}>
        <Chip
          sx={{
            height: "auto",
            "& .MuiChip-label": {
              display: "block",
              whiteSpace: "normal",
            },
          }}
          label="This is a chip that has multiple lines."
        />
      </Box>
    </Stack>
  );
}
