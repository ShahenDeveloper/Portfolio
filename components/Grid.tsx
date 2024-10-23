import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section
    className="lg:mx-0 mx-5"
      id="about">
      <BentoGrid>
        {gridItems.map(({className, description,id,img,imgClassName,spareImg,title,titleClassName}) => (
          <BentoGridItem
            title={title}
            description={description}
            key={id}
            id={id}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
