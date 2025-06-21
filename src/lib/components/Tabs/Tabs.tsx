"use client";

import { useState } from "react";
import Box from "@/lib/components/Box/Box";

export interface TabInterface {
  buttonText:
    | "Corporate"
    | "Logistics"
    | "Marketing"
    | "Graphics"
    | "Technology";
  tabText: React.ReactNode;
}

interface TabsInterface {
  tabs: TabInterface[];
}

export default function Tabs({ tabs }: TabsInterface) {
  const [tabText, setTabText] = useState<React.ReactNode>();

  return (
    <div>
      <div>
        {tabs.map((tab: TabInterface) => (
          <button key={tab.buttonText} onClick={() => setTabText(tab.tabText)}>
            {tab.buttonText}
          </button>
        ))}
      </div>
      <Box>{tabText}</Box>
    </div>
  );
}
