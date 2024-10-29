"use client";
import { Alert, Box, Snackbar, Stack, TextField } from "@mui/material";
import Text from "./Text";
import Button from "./Button";
import { useState } from "react";

interface EmailFormProps {}

export default function EmailForm({}: EmailFormProps) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event: any) => {
    setBody(event.target.value);
  };

  const sendEmail = async () => {
    let ret = false;
    if (subject == "") {
      setSubjectError(true);
      ret = true;
    }

    if (body == "") {
      setBodyError(true);
      ret = true;
    }

    if (ret) return;
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "alejandro.solaleiva@gmail.com",
        subject: subject,
        html: `<p>${body.replaceAll("\n", "<br/>")}</p>`,
      }),
    });

    if (!response.ok) {
      console.error("Error al enviar el email");
    }
    setSnackOpen(true);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Snackbar
        open={snackOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Email enviado con éxito
        </Alert>
      </Snackbar>
      <Text variant="h4">Envíame un email</Text>
      <TextField
        fullWidth
        style={{ marginBottom: "5%" }}
        placeholder="Asunto"
        value={subject}
        onChange={handleSubjectChange}
      />
      <Snackbar
        open={bodyError}
        autoHideDuration={6000}
        onClose={() => setBodyError(false)}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Cuerpo requerido
        </Alert>
      </Snackbar>
      <Snackbar
        open={subjectError}
        autoHideDuration={6000}
        onClose={() => setSubjectError(false)}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Asunto requerido
        </Alert>
      </Snackbar>

      <TextField
        fullWidth
        multiline
        rows={15}
        placeholder="Cuerpo..."
        style={{ marginBottom: "5%" }}
        value={body}
        onChange={handleBodyChange}
      />
      <Button onClick={sendEmail}>Enviar</Button>
    </Box>
  );
}
