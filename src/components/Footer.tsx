export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
        {/* 연도 자동 갱신, 매년 수정 불필요. */}
        © {new Date().getFullYear()} Hyunjin Cho. All rights reserved.
      </div>
    </footer>
  );
}
