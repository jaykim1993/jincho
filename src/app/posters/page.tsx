type Poster = {
  title: string;
  authors: string;
  venue: string;
  date: string;
  href: string;
};

// 포스터 목록 정적 배열, 다른 화면에서 재사용 없어 페이지 내부 관리.
const POSTERS: Poster[] = [
  {
    title: "Defining the Human Neural Network for Vocal Production and Control",
    authors:
      "Farhad Tabasi, Roozbeh Behroozmand, Hyunjin Cho, Christopher K. Kovach, Christopher I. Petkov, Matthew A. Howard III, Jeremy D. Greenlee",
    venue: "10th Annual BRAIN Initiative Conference, Rockville, MD",
    date: "June 2024",
    href: "https://uiowajincho.github.io/files/brainInitiativePoster.pdf",
  },
];

export default function PostersPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-heading text-2xl font-semibold">Posters</h1>

      <ol className="flex flex-col gap-6">
        {POSTERS.map((poster) => (
          <li key={poster.href} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <a
              href={poster.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-base font-semibold text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {poster.title}
            </a>
            <p className="mt-1.5 text-sm text-muted-foreground">{poster.authors}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {poster.venue} &middot; {poster.date}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
