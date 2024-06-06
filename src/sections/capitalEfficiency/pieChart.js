import { ResponsivePie } from "@nivo/pie";

export const PieChart = ({ data, colors, fontSize }) => (
  <ResponsivePie
    arcLinkLabelsStraightLength={5}
    arcLinkLabelsOffset={-5}
    colors={colors}
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.01}
    padAngle={0.7}
    cornerRadius={0}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor="black"
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#fff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="black"
    theme={{
      labels: {
        text: {
          fontSize: fontSize,
        },
      },
    }}
  />
);
