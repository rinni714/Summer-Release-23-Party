import GridBlock, { GridBlockProps } from "./GridBlock";

export interface SimpleGridProps {
    section1: GridBlockProps;
    section2: GridBlockProps;
    section3: GridBlockProps;
    section4: GridBlockProps;
}





const SimpleGrid = ({ section1, section2, section3, section4 }: SimpleGridProps) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <GridBlock content={section1?.content ?? `content 1`} backgroundColor={section1.backgroundColor} />
            <GridBlock content={section2?.content ?? `content2`} backgroundColor={section2.backgroundColor} />
            <GridBlock content={section3?.content ?? `content3`} backgroundColor={section3.backgroundColor} />
            <GridBlock content={section4?.content ?? 'content4'} backgroundColor={section4.backgroundColor} />
        </div>
    );
};

export default SimpleGrid;
