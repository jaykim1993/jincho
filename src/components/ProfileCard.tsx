import Image from "next/image";
import { University, MapPin, Link2, GraduationCap, BadgeCheck, GlobeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { CopyEmailLink } from "@/components/CopyEmailLink";

const EMAIL = "jin@radscience.ai.kr";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ipdiss", icon: Link2 },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=Fn48KrIAAAAJ&hl=ko&oi=sra", icon: GraduationCap },
  { label: "ORCID", href: "https://orcid.org/0009-0003-2590-6490", icon: BadgeCheck },
  { label: "Rad Science Inc", href: "https://radscience.ai.kr", icon: GlobeCheck },
] as const;

// 상호작용 없음. 부모 collapsed 상태 따라 레이아웃만 변경, 표시 전용.
export function ProfileCard({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 transition-all duration-300",
        collapsed ? "items-center text-center" : "items-start text-left"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-full transition-all duration-300",
          collapsed ? "h-15 w-15" : "h-24 w-24"
        )}
      >
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          fill
          sizes="96px"
          priority
          className="object-cover"
        />
      </div>

      {!collapsed && (
        <div className="animate-in fade-in duration-200">
          <h2 className="text-base font-semibold text-foreground">Hyunjin Cho</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Founder of Rad Science Inc
            <br />
            PhD student in Computer Science
          </p>
        </div>
      )}

      {!collapsed && (
        <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <University className="h-4 w-4 shrink-0" />
            University of Iowa
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0" />
            Seoul, South Korea
          </li>
        </ul>
      )}

      <ul className={cn("flex flex-col gap-3", collapsed ? "items-center" : "gap-2")}>
        <li>
          <CopyEmailLink email={EMAIL} collapsed={collapsed} />
        </li>
        {LINKS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={collapsed ? label : undefined}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Icon className={cn("shrink-0", collapsed ? "h-7 w-7" : "h-4 w-4")} />
              {!collapsed && label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
