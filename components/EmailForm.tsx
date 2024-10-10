"use client";
import { Box, CssBaseline, TextField } from "@mui/material";
import Text from "./Text";
import Button from "./Button";

interface EmailFormProps {}

export default function EmailForm({}: EmailFormProps) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Text variant="h4"> Envíame un email</Text>
      <TextField
        fullWidth
        style={{ marginBottom: "5%" }}
        placeholder="Asunto"
      />
      <TextField
        fullWidth
        multiline
        rows={15}
        placeholder="Cuerpo del mail..."
        style={{ marginBottom: "5%" }}
      />
      <Button>Envíar</Button>
    </Box>
  );
}
