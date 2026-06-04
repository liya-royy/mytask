import "./globals.css";

export const metadata = {
  title: "IEEE SB CEC — College of Engineering Chengannur",
  description:
    "30 years of engineering with purpose. IEEE Student Branch, College of Engineering Chengannur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
