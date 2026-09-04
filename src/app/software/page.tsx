import { PROJECTS } from "@/lib/software";

// PROJECTS 렌더 전용, 데이터 수정은 lib/software.ts에서.
export default function SoftwarePage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-heading text-2xl font-semibold">Software</h1>

      <ol className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <li key={project.name} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-base font-semibold text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {project.name}
              </a>
            ) : (
              <h2 className="font-heading text-base font-semibold text-foreground">
                {project.name}
              </h2>
            )}
            <p className="mt-1.5 text-sm text-muted-foreground">{project.description}</p>
            {project.context && (
              <p className="mt-1 text-sm text-muted-foreground">{project.context}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
