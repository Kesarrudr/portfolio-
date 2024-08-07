import type { Project as ProjectType } from "@/types/index.types";
import { StepForward } from "lucide-react";
import Link from "next/link";
import Picture from "./picture";
import { IconMap } from "./icon-map";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-2xl border border-b-8 overflow-hidden">
      <div className="space-y-2 w-full tablet:w-3/5">
        <a
          href={project.deploymentlink}
          target="_blank"
          className="space-y-2 group/link:"
        >
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold font-heading">
                {project.title}
              </h1>
              <span className="text-xs px-2 py-1 rounded bg-secondary">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <span className="translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </a>
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <p
              key={tag}
              className="px-2 py-1 rounded bg-muted text-xs cursor-pointer"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              className="w-8 h-8 rounded border active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 transition-all duration-100 ease-in-out flex justify-center items-center"
            >
              {IconMap[link.name.toLowerCase() as keyof typeof IconMap]}
              <span className="sr-only">{`${link.name} - ${link.url}`}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="w-2/5 aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl">
        <Picture
          image={project.image}
          imageDark={project.imageDark}
          width={250}
          height={100}
          quality={100}
          alt={project.title}
          className="w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out"
        />
      </div>
    </div>
  );
}
