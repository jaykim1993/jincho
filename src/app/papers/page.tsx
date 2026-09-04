import { PAPERS } from "@/lib/papers";

// PAPERS 렌더 전용, 데이터 수정은 lib/papers.ts에서.
export default function PapersPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-heading text-2xl font-semibold">Papers</h1>

      <ol className="flex flex-col gap-6">
        {PAPERS.map((paper) => (
          <li key={paper.href} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-base font-semibold text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {paper.title}
            </a>
            <p className="mt-1.5 text-sm text-muted-foreground">{paper.authors}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {paper.venue} &middot; {paper.year}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
