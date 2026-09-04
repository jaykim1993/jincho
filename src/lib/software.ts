export type Project = {
  name: string;
  description: string;
  context?: string;
  href?: string;
};

// 소프트웨어 데이터 단일 소스, software 페이지/홈 화면 공통 참조. 추가/수정은 여기서만.
export const PROJECTS: Project[] = [
  {
    name: "3D Lipid Projection",
    description:
      "A research visualization tool for high-dimensional lipidomics data. Projects lipids and subjects using Isomap and UMAP to reveal global and local manifold structure.",
    context: "Developed for tumor research at the University of Manitoba.",
  },
  {
    name: "3D Stack Image Annotator",
    description:
      "A 3D-aware annotation tool for organoid imaging. Enables efficient labeling across image stacks while preserving spatial consistency.",
    context: "Supports cancer organoid analysis at the University of Iowa.",
  },
  {
    name: "UIowa Remote Voice",
    description:
      "A remote data collection platform for voice and survey-based medical studies. Enables participants to contribute high-quality recordings and metadata outside clinical settings.",
    href: "https://dupont.cs.uiowa.edu/software/otolaryngology/remotevoice/remotevoice.html",
  },
  {
    name: "GVPT",
    description:
      "A real-time experimental platform for visual pitch tracking. Implements precise pitch detection with dynamic visual targets.",
    href: "https://dupont.cs.uiowa.edu/software/brain/gvpt/gvpt.html",
  },
  {
    name: "APT",
    description:
      "A real-time auditory feedback system for pitch-based experiments. Provides accurate pitch detection with auditory target guidance.",
    href: "https://dupont.cs.uiowa.edu/software/brain/apt/apt.html",
  },
];
