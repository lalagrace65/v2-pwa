import Header from "@/components/layout/Header";
import { Html, Head, Main, NextScript } from "next/document";
import Container from "@/components/layout/Container";

export default function Document({ children }) {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <body className="antialiased" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <Container>
          <Header />
          <Main />
          {children}
          <NextScript />
        </Container>
      </body>
    </Html>
  );
}
