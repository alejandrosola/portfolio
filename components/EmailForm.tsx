"use client";
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import Text from "./Text";
import Button from "./Button";
import { useState } from "react";

interface EmailFormProps {}

export default function EmailForm({}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState<"error" | "success">(
    "success"
  );
  const [emailError, setEmailError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event: any) => {
    setBody(event.target.value);
  };

  const sendEmail = async () => {
    if (email == "") {
      setSnackSeverity("error");
      setSnackMessage("Email requerido");
      setSnackOpen(true);
      return;
    }

    if (!validEmail(email)) {
      setSnackSeverity("error");
      setSnackMessage("Email inválido");
      setSnackOpen(true);
      return;
    }

    if (subject == "") {
      setSnackSeverity("error");
      setSnackMessage("Asunto requerido");
      setSnackOpen(true);
      return;
    }

    if (body == "") {
      setSnackSeverity("error");
      setSnackMessage("Cuerpo requerido");
      setSnackOpen(true);
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "alejandro.solaleiva@gmail.com",
        subject: subject,
        html: `<h3>Email de: ${email}</h3> <p>${body.replaceAll(
          "\n",
          "<br/>"
        )}</p>`,
      }),
    });

    const data = await response.json();

    setSnackMessage("Email enviado con éxito");
    setSnackSeverity("success");

    if (!response.ok) {
      setSnackMessage(data.error);
      setSnackSeverity("error");
    }
    setSnackOpen(true);
  };

  const validEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Snackbar
        open={snackOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert severity={snackSeverity} sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
      <Text variant="h4">Envíame un email</Text>

      <TextField
        fullWidth
        style={{ marginBottom: "5%" }}
        placeholder="Email *"
        value={email}
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        style={{ marginBottom: "5%" }}
        placeholder="Asunto *"
        value={subject}
        onChange={handleSubjectChange}
      />
      <TextField
        fullWidth
        multiline
        rows={15}
        placeholder="Cuerpo... *"
        style={{ marginBottom: "5%" }}
        value={body}
        onChange={handleBodyChange}
      />
      <Button onClick={sendEmail}>Enviar</Button>
    </Box>
  );
}
