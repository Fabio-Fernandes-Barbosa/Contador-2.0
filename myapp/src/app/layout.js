
import "./globals.css";


export const metadata = {
  title: "Praticando React",
  description: "Criando mini projetos em React, para evoluir e aprender mais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
