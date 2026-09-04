"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// mailto href 유지, 우클릭 복사도 지원.
// 좌클릭만 가로채 클립보드 복사 + "Copied" 툴팁 처리.
// 수정 클릭(새 탭 등)은 기본 mailto 동작 유지.
export function CopyEmailLink({
  email,
  collapsed,
}: {
  email: string;
  collapsed: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (!navigator.clipboard) return;

    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // 복사 실패 시 무시, 조치 불필요.
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      title={collapsed ? "Email" : undefined}
      className="relative flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
    >
      {copied ? (
        <Check className={cn("shrink-0 text-foreground", collapsed ? "h-7 w-7" : "h-4 w-4")} />
      ) : (
        <Mail className={cn("shrink-0", collapsed ? "h-6.5 w-6.5" : "h-4 w-4")} />
      )}
      {!collapsed && "Email"}
      <span
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-xs whitespace-nowrap text-background shadow-sm transition-all duration-200",
          copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        )}
      >
        Copied
      </span>
    </a>
  );
}
