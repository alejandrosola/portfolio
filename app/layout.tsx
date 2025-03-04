import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro Solá",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const drawerWidth = 240;
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: `${drawerWidth}px 1fr` },
              height: "100vh",
            }}
          >
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              <NavBar drawerWidth={drawerWidth} />
            </Box>
            <Box className="principal-container">{children}</Box>
          </Box>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
