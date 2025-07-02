import Tabs, { TabInterface } from "@/lib/components/Tabs/Tabs";

interface HackathonTabInterface extends Omit<TabInterface, "buttonText"> {
    buttonText: "IrvineHacks" | "ZotHacks";
}

const hackathonTabs: HackathonTabInterface[] = [
    {
        buttonText: "IrvineHacks",
        tabComponent: <></>,
    },
    {
        buttonText: "ZotHacks",
        tabComponent: <></>,
    },
];

export default function Hackathons() {
    return (
        <>
            <h2 className="text-subtitle text-center">Our Hackathons</h2>
            <Tabs
                tabs={hackathonTabs}
                useAltButton
            />
        </>
    );
}
