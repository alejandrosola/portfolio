"use client";
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import Text from "./Text";
import Button from "./Button";
import { useState } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("emailForm");

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
      setSnackMessage(t("emailRequired"));
      setSnackOpen(true);
      return;
    }

    if (!validEmail(email)) {
      setSnackSeverity("error");
      setSnackMessage(t("invalidEmail"));
      setSnackOpen(true);
      return;
    }

    if (subject == "") {
      setSnackSeverity("error");
      setSnackMessage(t("subjectRequired"));
      setSnackOpen(true);
      return;
    }

    if (body == "") {
      setSnackSeverity("error");
      setSnackMessage(t("bodyRequired"));
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

    setSnackMessage(t("sentSuccessfully"));
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
      <Text variant="h4">{t("title")}</Text>

      <TextField
        fullWidth
        style={{ marginBottom: "5%" }}
        placeholder={`${t("email")} *`}
        value={email}
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        style={{ marginBottom: "5%" }}
        placeholder={`${t("subject")} *`}
        value={subject}
        onChange={handleSubjectChange}
      />
      <TextField
        fullWidth
        multiline
        rows={15}
        placeholder={`${t("body")}... *`}
        style={{ marginBottom: "5%" }}
        value={body}
        onChange={handleBodyChange}
      />
      <Button onClick={sendEmail}>{t("send")}</Button>
    </Box>
  );
}
