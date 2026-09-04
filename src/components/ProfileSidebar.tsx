"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/ProfileCard";
import { cn } from "@/lib/utils";

// collapsed 상태 처리 담당, 클라이언트 컴포넌트로 분리함.
// Header/Footer/콘텐츠는 서버 컴포넌트 유지.
export function ProfileSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "relative shrink-0 transition-[width] duration-300 ease-in-out",
        collapsed ? "w-30" : "w-56"
      )}
    >
      <div className="sticky top-12">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? "프로필 펼치기" : "프로필 접기"}
          className="absolute -right-3 top-1 h-6 w-6 rounded-full bg-background p-0 shadow-sm"
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>

        <ProfileCard collapsed={collapsed} />
      </div>
    </aside>
  );
}
