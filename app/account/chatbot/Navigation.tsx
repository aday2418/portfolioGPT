'use client';

import CurrentInfo from "@/components/CurrentInfo";
import SubmitResume from "@/components/SubmitResume";
import { useState } from "react";
import NavigationButton from "./NavigationButton";
import Customize from "./Customize";

export default function Navigation({ wordLimit, profile}: {wordLimit: number, profile: any}) {
    const { subscription_tier } = profile;
    const [section, setSection] = useState<string>('resume');
    const isStarterPlan = subscription_tier.name == "Starter";

    const selectSection = (value: string) => {
        setSection(value);
    }

    return (
        <div className="relative w-full flex flex-col">
            <div className="relative w-full border-b-2 border-gray-700 flex items-center">
                <NavigationButton selectSection={selectSection} value="resume" title="Resume" selected={section == "resume"} />
                <NavigationButton selectSection={selectSection} value="appearance" title="Customize" selected={section == "appearance"} locked={isStarterPlan} />
            </div>
            {section == "resume" ? (
                <div className='relative w-full flex flex-col gap-10  h-[600px] overflow-scroll py-[25px]'>
                    <SubmitResume wordLimit={wordLimit} />
                    <CurrentInfo currentInfo={profile.info}/>
                </div>
            ) : <Customize locked={isStarterPlan} profile={profile} />}
        </div>
    )
}