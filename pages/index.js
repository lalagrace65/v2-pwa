import Image from "next/image";
import { Share } from "@capacitor/share";
import Featured from "@/components/layout/Featured";


export default function Home() {
  const share = async () => {
    await Share.share({
      title: "Share title",
      text: "Share text",
      url: "https://www.youtube.com/watch?v=xQKtDgJXrlM",
      dialogTitle: "Share with friends",
    });
  };

  return (
    <div style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}>
        <main className="flex flex-col flex-grow items-center sm:items-start gap-8">
          <h1 className="text-4xl sm:text-5xl text-center sm:text-left font-[family-name:var(--font-geist-sans)]">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <h1 className="text-4xl text-blue-600 font-extrabold">Grace!!!!</h1>
        <Featured></Featured>
        </main>

        <footer className="flex gap-6 flex-wrap items-center justify-center p-4">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
    </div>
  );
}
