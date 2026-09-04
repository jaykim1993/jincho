import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Papers", href: "/papers" },
  { label: "Posters", href: "/posters" },
  { label: "Software", href: "/software" },
  { label: "CV", href: "/cv" },
] as const;

// 상단 고정 네비게이션, 스크롤 시에도 위치 유지됨.
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="sm:hidden">Hyunjin Cho</span>
          <span className="hidden sm:inline">
            Hyunjin Cho | University of Iowa | Computer Science
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-6 text-sm text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
