type Experience = {
  title: string;
  org: string;
  period: string;
  description: string;
};

// EDUCATION/EXPERIENCE/AWARDS 전부 정적 배열, 갱신 시 여기만 수정.
const EDUCATION = [
  {
    degree: "PhD in Computer Science",
    org: "University of Iowa",
    period: "Current",
    description: "Advised by Dr. Rahul Singh.",
  },
];

const EXPERIENCE: Experience[] = [
  {
    title: "Founder",
    org: "Rad Science",
    period: "2026–",
    description:
      "A research engineering company focused on end-to-end biomedical research development — rapid prototyping of experimental software, machine learning data analysis, and topological data analysis for biomedical signals.",
  },
  {
    title: "Co-founder",
    org: "DiveFlash",
    period: "2021",
    description:
      "Underwater image enhancement and deep-learning-based fish identification from underwater photography, published on the Google Play Store.",
  },
  {
    title: "Freelancer",
    org: "Xandar Kardian Inc. and SKMagic Malaysia",
    period: "2020",
    description: "Contract-based engineering work while preparing for graduate studies.",
  },
  {
    title: "Research Assistant Engineer",
    org: "South Korean defense company",
    period: "2018",
    description:
      "Developed a combat simulator for the South Korean Navy's new AEGIS Destroyer-class battleship.",
  },
  {
    title: "Corporal",
    org: "Republic of Korea Army (ROKA)",
    period: "2017",
    description: "Mandatory military service.",
  },
  {
    title: "Teaching Assistant & Undergraduate Research Assistant",
    org: "University of Utah",
    period: "2016",
    description:
      "TA for three computer science courses; developed an automated C++ grader under Prof. David Johnson.",
  },
];

const AWARDS = [
  {
    name: "Intelligent Systems in Geoscience Award",
    org: "HackUIowa 22",
    description: 'Awarded for the "Crime Map" project.',
  },
  {
    name: "Data Track Specialization",
    org: "University of Utah, Computer Science",
    description: "Completed a specialization track in data-related coursework.",
  },
];

export default function CVPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-2xl font-semibold">CV</h1>
        <a
          href="https://uiowajincho.github.io/files/Jin_Cho_CV_2026_Apr.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          Download PDF
        </a>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold text-foreground">Education</h2>
        <ul className="flex flex-col gap-4">
          {EDUCATION.map((entry) => (
            <li key={entry.degree} className="text-sm">
              <p className="font-medium text-foreground">{entry.degree}</p>
              <p className="mt-0.5 text-muted-foreground">
                {entry.org} &middot; {entry.period}
              </p>
              <p className="mt-1 text-muted-foreground">{entry.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold text-foreground">
          Professional Experience
        </h2>
        <ol className="flex flex-col gap-5">
          {EXPERIENCE.map((entry) => (
            <li
              key={`${entry.title}-${entry.org}`}
              className="border-b border-border pb-5 text-sm last:border-b-0 last:pb-0"
            >
              <p className="font-medium text-foreground">
                {entry.title}, {entry.org}
              </p>
              <p className="mt-0.5 text-muted-foreground">{entry.period}</p>
              <p className="mt-1 text-muted-foreground">{entry.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold text-foreground">Awards</h2>
        <ul className="flex flex-col gap-4">
          {AWARDS.map((award) => (
            <li key={award.name} className="text-sm">
              <p className="font-medium text-foreground">{award.name}</p>
              <p className="mt-0.5 text-muted-foreground">{award.org}</p>
              <p className="mt-1 text-muted-foreground">{award.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
