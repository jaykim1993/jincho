import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Hyunjin(Jin) Cho | University of Iowa | Computer Science",
  description: "Personal portfolio",
};

// 전역 배경 영상 경로. "/hero.mp4"만 기입하면 전 페이지 즉시 적용됨.
// 미기입 시 그라디언트 placeholder 자동 대체.
const SITE_VIDEO_SRC: string | undefined = "/hero.mp4";
const SITE_VIDEO_POSTER: string | undefined = undefined;

// 전 페이지 공통 틀. 하위 page.tsx 전부 감쌈.
// Header/Footer 중복 배치 금지, 여기서 1회만 배치.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* 전역 배경 영상 고정 배치. 페이지 이동 시 재시작 없음. */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {SITE_VIDEO_SRC ? (
            <video
              className="h-full w-full object-cover motion-reduce:hidden"
              src={SITE_VIDEO_SRC}
              poster={SITE_VIDEO_POSTER}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-muted via-background to-muted" />
          )}
          {/* blur+틴트로 명암 모드 불문 가독성 확보. */}
          <div className="absolute inset-0 bg-background/75 backdrop-blur-md dark:bg-background/40" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/30" />
        </div>
        <Header />
        {/* ProfileSidebar 여기 고정, 페이지 이동 시 리렌더링 없음. */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-6 py-12">
          <ProfileSidebar />
          <main className="min-w-0 w-full max-w-4xl flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
