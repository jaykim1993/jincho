export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href: string;
};

// 논문 데이터 단일 소스, papers 페이지/홈 화면 공통 참조. 추가/수정은 여기서만.
export const PAPERS: Paper[] = [
  {
    title: "Swallow Detection from Pharyngeal High Resolution Manometry using Persistent Homology",
    authors: "Hyunjin Cho, et al.",
    venue: "In preparation",
    year: "2026",
    href: "https://uiowajincho.github.io/publications/2026-01-01%20SwallowDetection/",
  },
  {
    title: "Organoid Segmentation Using Phase Congruency and Persistent Homology",
    authors: "Hyunjin Cho, Rahul Singh",
    venue: "International Symposium on Visual Computing (ISVC)",
    year: "2025",
    href: "https://uiowajincho.github.io/publications/2025-12-10%20ISVC2025/",
  },
  {
    title: "FOXP2 expression in the rodent, rhesus monkey, and human brainstem",
    authors:
      "Eric Vallin, Brian Mostaert, Emma Thayer, Hyunjin Cho, Matthew R. Hoffman, Martin Cassell, Douglas Van Daele",
    venue: "Journal of Speech, Language, and Hearing Research",
    year: "2025",
    href: "https://uiowajincho.github.io/publications/2025-08-14%20FoxP2/",
  },
  {
    title: "GVPT — A software for guided visual pitch tracking",
    authors: "Hyunjin Cho, Farhad Tabasi, Jeremy D. Greenlee, Rahul Singh",
    venue: "arXiv (preprint)",
    year: "2025",
    href: "https://uiowajincho.github.io/publications/2025-05-01%20GVPT/",
  },
];
