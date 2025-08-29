import ProjectContent from "@/components/projectpage/ProjectContent";
import ProjectDetailsHero from "@/components/projectpage/ProjectDetailsHero";
import CTA from "@/components/shared/CTA";
import CtaImageSlider from "@/components/shared/CtaImageSlider";
import LayoutTwo from "@/components/shared/LayoutTwo";
import getMarkDownContent from "@/utils/GetMarkDownContent";

// Temporarily disabled to fix build issues
// export async function generateStaticParams() {
//   const projects: ProjectType[] = getMarkDownData('data/startup-agency/project')
//   return projects.map((project) => ({
//     slug: project.slug,
//   }))
// }

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const project = getMarkDownContent("data/startup-agency/project/", slug);
  const postprojects = project.data;

  return (
    <LayoutTwo>
      <ProjectDetailsHero
        badgeTitle="Project Case Study"
        title={postprojects?.title}
        description={postprojects?.description}
        scale
      />
      <ProjectContent project={project} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: "1", img: "/images/agent/15.png" },
            { id: "2", img: "/images/agent/18.png" },
            { id: "3", img: "/images/agent/03.jpg" },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          A virtual coffee?
        </i>
      </CTA>
    </LayoutTwo>
  );
};

export default ProjectDetails;
