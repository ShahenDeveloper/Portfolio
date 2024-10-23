import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-20 -mb-48 flex flex-col justify-between lg:gap-56 gap-36" id="projects">
      <h1 className="heading ">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid xl:grid-cols-2 col-span-1 p-4 gap-x-28 xl:mx-8 items-center justify-center gap-y-16">
        {projects.map(({ des, iconLists, id, img, link, title }) => (
          <div
            key={id}
            className="flex flex-col h-[35rem] sm:h-[35rem] md:h-[35rem] lg:h-[40rem] w-full sm:w-[570px] mb-4"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[560px] w-[80vw] h-[18rem] sm:h-[20rem] lg:h-[25rem] overflow-hidden mb-6">
                <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                  width={0}
                  height={0}
                  loading="lazy"
                    src="/bg.png"
                    alt="background image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Image
                width={0}
                height={0}
                  src={img}
                  alt="Project Image"
                  loading="eager"
                  className="z-10 absolute bottom-0 w-full h-full object-cover"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-balance line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-4 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Image width={60} height={60} loading="lazy" src={icon} alt="Icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p>Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
