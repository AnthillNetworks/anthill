import "./globals.css";

export const metadata = {
  title: "Anthill Networks",
  description: "Come | Grow | Develop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
