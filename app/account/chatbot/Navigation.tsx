'use client';

import CurrentInfo from "@/components/CurrentInfo";
import SubmitResume from "@/components/SubmitResume";
import { useState } from "react";
import NavigationButton from "./NavigationButton";
import Customize from "./Customize";

export default function Navigation({ wordLimit, info}: {wordLimit: number, info: string}) {
    const [section, setSection] = useState<string>('resume');

    const selectSection = (value: string) => {
        setSection(value);
    }

    return (
        <div className="relative w-full flex flex-col">
            <div className="relative w-full border-b-2 border-gray-700 flex items-center">
                <NavigationButton selectSection={selectSection} value="resume" title="Resume" selected={section == "resume"} />
                <NavigationButton selectSection={selectSection} value="appearance" title="Customize" selected={section == "appearance"} />
            </div>
            {section == "resume" ? (
                <div className='relative w-full flex flex-col gap-10  h-[600px] overflow-scroll py-[25px]'>
                    <SubmitResume wordLimit={wordLimit} />
                    <CurrentInfo currentInfo={info}/>
                </div>
            ) : <Customize/>}
        </div>
    )
}