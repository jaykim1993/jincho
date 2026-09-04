import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PAPERS } from "@/lib/papers";
import { PROJECTS } from "@/lib/software";

const LATEST_PAPERS = PAPERS.slice(0, 4);
const LATEST_PROJECTS = PROJECTS.slice(0, 2);

const INTERESTS = [
  "Computer Vision",
  "Computational Topology",
  "Biomedical Imaging",
  "Research Software",
] as const;

// 히어로 + Papers/Software 미리보기 구성, 데이터는 lib에서 참조.
export default function HomePage() {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col gap-6 border-b border-border pb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Computer Science &middot; University of Iowa
        </p>
        <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
          Hyunjin Cho 
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          I&apos;m a Computer Science PhD student at the University of Iowa and the
          founder of Rad Science, a research engineering company. My work sits at
          the intersection of computer vision, computational topology, and
          biomedicine — building tools that turn high-dimensional signals and
          images, from ECoG to organoid microscopy, into something researchers can
          actually use.
        </p>
        <ul className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {interest}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/cv" className={buttonVariants({ variant: "default" })}>
            View CV
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
          >
            More about me
            <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Research
            </p>
            <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
              Selected Papers
            </h2>
          </div>
          <Link
            href="/papers"
            className="group flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {LATEST_PAPERS.map((paper) => (
            <a
              key={paper.href}
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 border border-border p-5 transition-colors hover:border-foreground/40 hover:bg-muted/40"
            >
              <span className="font-heading text-base font-semibold text-foreground underline decoration-transparent underline-offset-4 group-hover:decoration-foreground">
                {paper.title}
              </span>
              <span className="text-sm text-muted-foreground">{paper.authors}</span>
              <span className="text-xs text-muted-foreground">
                {paper.venue} &middot; {paper.year}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Engineering
            </p>
            <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
              Selected Software
            </h2>
          </div>
          <Link
            href="/software"
            className="group flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {LATEST_PROJECTS.map((project) =>
            project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 border border-border p-5 transition-colors hover:border-foreground/40 hover:bg-muted/40"
              >
                <span className="font-heading text-base font-semibold text-foreground underline decoration-transparent underline-offset-4 group-hover:decoration-foreground">
                  {project.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.description}
                </span>
              </a>
            ) : (
              <div
                key={project.name}
                className="flex flex-col gap-2 border border-border p-5"
              >
                <span className="font-heading text-base font-semibold text-foreground">
                  {project.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.description}
                </span>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
