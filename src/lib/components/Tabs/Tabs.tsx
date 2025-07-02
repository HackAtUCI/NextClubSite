"use client";

import { useState } from "react";

import "./Tabs.css";

export interface TabInterface {
    buttonText:
        | "Corporate"
        | "Logistics"
        | "Marketing"
        | "Graphics"
        | "Technology";
    tabComponent: React.ReactNode;
}

interface TabsInterface {
    tabs: TabInterface[];
}

export default function Tabs({ tabs }: TabsInterface) {
    const [activeTab, setActiveTab] = useState<TabInterface | undefined>(
        tabs[0]
    );

    return (
        <div>
            <div className="my-12 flex items-center justify-center">
                {tabs.map((tab: TabInterface) => (
                    <button
                        key={tab.buttonText}
                        onClick={() => setActiveTab(tab)}
                        className={`tab-button ${
                            activeTab?.buttonText === tab.buttonText
                                ? "active"
                                : ""
                        }`}
                    >
                        {tab.buttonText}
                    </button>
                ))}
            </div>
            <div className="relative">{activeTab?.tabComponent}</div>
        </div>
    );
}
