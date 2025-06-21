import Tabs, { TabInterface } from "@/lib/components/Tabs/Tabs";
import CorporateText from "./committee-texts/CorporateText";
import LogisticsText from "./committee-texts/LogisticsText";
import MarketingText from "./committee-texts/MarketingText";
import GraphicsText from "./committee-texts/GraphicsText";
import TechnologyText from "./committee-texts/TechnologyText";

const committeeTabs: TabInterface[] = [
  {
    buttonText: "Corporate",
    tabTextComponent: <CorporateText />,
  },
  {
    buttonText: "Logistics",
    tabTextComponent: <LogisticsText />,
  },
  {
    buttonText: "Marketing",
    tabTextComponent: <MarketingText />,
  },
  {
    buttonText: "Graphics",
    tabTextComponent: <GraphicsText />,
  },
  {
    buttonText: "Technology",
    tabTextComponent: <TechnologyText />,
  },
];

export default function Committees() {
  return (
    <section>
      <h2 className="text-subtitle text-center">Our Committees</h2>
      <Tabs tabs={committeeTabs} />
    </section>
  );
}
