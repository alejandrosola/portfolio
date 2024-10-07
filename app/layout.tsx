import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro Solá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const drawerWidth = 240;
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
