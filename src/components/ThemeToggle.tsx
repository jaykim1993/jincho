"use client";

import { useId, useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { InlineScript } from "@/components/InlineScript";

function readIsDark() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const id = useId();
  const [isDark, setIsDark] = useState(readIsDark);

  // Strict Mode 재마운트 시 클래스 재적용, 운영 환경 영향 없음.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <>
      <button
        id={id}
        type="button"
        onClick={toggle}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        suppressHydrationWarning
        className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted p-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
      >
        <span
          aria-hidden
          suppressHydrationWarning
          data-state={isDark ? "checked" : "unchecked"}
          className="flex size-6 items-center justify-center rounded-full bg-background text-muted-foreground shadow-sm transition-transform duration-300 ease-out data-checked:translate-x-6"
        >
          <Sun className="h-3.5 w-3.5 shrink-0 dark:hidden" />
          <Moon className="hidden h-3.5 w-3.5 shrink-0 dark:block" />
        </span>
      </button>
      <InlineScript
        html={`{var b=document.getElementById(${JSON.stringify(
          id
        )});if(b){var d=document.documentElement.classList.contains("dark");b.setAttribute("aria-checked",d);var s=b.firstElementChild;if(s){s.setAttribute("data-state",d?"checked":"unchecked")}}}`}
      />
    </>
  );
}
