"use client";

import { useState } from "react";

import Box from "@/lib/components/Box/Box";
// import PrimaryButton from "../PrimaryButton/PrimaryButton";

import "./Tabs.css";

export interface TabInterface {
  buttonText:
    | "Corporate"
    | "Logistics"
    | "Marketing"
    | "Graphics"
    | "Technology";
  tabTextComponent: React.ReactNode;
}

interface TabsInterface {
  tabs: TabInterface[];
}

export default function Tabs({ tabs }: TabsInterface) {
  const [activeTab, setActiveTab] = useState<TabInterface | undefined>(tabs[0]);

  return (
    <div>
      <div className="flex justify-center items-center my-12">
        {tabs.map((tab: TabInterface) => (
          <button
            key={tab.buttonText}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${
              activeTab?.buttonText === tab.buttonText ? "active" : ""
            }`}
          >
            {tab.buttonText}
          </button>
        ))}
      </div>
      <div className="relative">
        <Box className="pt-18 pb-24">
          <h3 className="text-subtitle mb-8">{activeTab?.buttonText}</h3>
          {activeTab?.tabTextComponent}
        </Box>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          {/* <PrimaryButton className="px-[10rem]" variant="apply">
            Apply
          </PrimaryButton> */}
        </div>
      </div>
    </div>
  );
}
