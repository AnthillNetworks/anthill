import "./globals.css";

export const metadata = {
  title: "Anthill Networks",
  description: "Come | Grow | Develop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=League+Gothic:wght@400&display=swap" />
      <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400&display=swap" rel="stylesheet"/>
      {/* Logo link */}
      <link rel="icon" href="/assets/logo2.svg" />
      <body>{children}</body>
    </html>
  );
}
