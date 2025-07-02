"use client";

import { useState } from "react";

import "./Tabs.css";

export interface TabInterface {
    buttonText: string;
    tabComponent: React.ReactNode;
}

interface TabsInterface {
    tabs: TabInterface[];
    useGradientButton?: boolean;
}

export default function Tabs({
    tabs,
    useGradientButton = false,
}: TabsInterface) {
    const [activeTab, setActiveTab] = useState<TabInterface | undefined>(
        tabs[0]
    );

    const getButtonClassName = (isActive: boolean) => {
        if (useGradientButton) {
            return `tab-btn-gradient ${isActive ? "active" : ""}`;
        }
        return `tab-button ${isActive ? "active" : ""}`;
    };

    return (
        <div>
            <div className="my-12 flex items-center justify-center">
                {tabs.map((tab: TabInterface) => (
                    <button
                        key={tab.buttonText}
                        onClick={() => setActiveTab(tab)}
                        className={getButtonClassName(
                            activeTab?.buttonText === tab.buttonText
                        )}
                    >
                        {tab.buttonText}
                    </button>
                ))}
            </div>
            <div className="relative">{activeTab?.tabComponent}</div>
        </div>
    );
}
