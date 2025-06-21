import Tabs, { TabInterface } from "@/lib/components/Tabs/Tabs";
import CorporateText from "./committee-texts/CorporateText";
import LogisticsText from "./committee-texts/LogisticsText";
import MarketingText from "./committee-texts/MarketingText";
import GraphicsText from "./committee-texts/GraphicsText";
import TechnologyText from "./committee-texts/TechnologyText";

const committeeTabs: TabInterface[] = [
  {
    buttonText: "Corporate",
    tabText: <CorporateText />,
  },
  {
    buttonText: "Logistics",
    tabText: <LogisticsText />,
  },
  {
    buttonText: "Marketing",
    tabText: <MarketingText />,
  },
  {
    buttonText: "Graphics",
    tabText: <GraphicsText />,
  },
  {
    buttonText: "Technology",
    tabText: <TechnologyText />,
  },
];

export default function Committees() {
  return (
    <section>
      <h2 className="text-subtitle">Our Committees</h2>
      <Tabs tabs={committeeTabs} />
    </section>
  );
}
