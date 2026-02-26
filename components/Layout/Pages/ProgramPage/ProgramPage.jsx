"use client"

import { useEffect } from "react";
import ProgramHero from "./ProgramHero/ProgramHero"
import ProgramOverview from "./ProgramOverview/ProgramOverview";
import EligibilityRequirements from "./EligibilityRequirements/EligibilityRequirements";
import DurationFees from "./DurationFees/DurationFees";
import Scholarships from "./Scholarships/Scholarships";
import UniversitiesOffering from "./UniversitiesOffering/UniversitiesOffering";
import StepByStepApplication from "./StepByStepApplication/StepByStepApplication";
import ProgramTestimonials from "./ProgramTestimonials/ProgramTestimonials";
import { useMyContext } from "@/components/utils/Context";
import Loading from "@/components/Loading/Loading";
import ProgramNotFound from "@/components/ProgramNotFound/ProgramNotFound";

const ProgramPage = ({ slug }) => {
    const { courses } = useMyContext()

    if (!courses.length) return <Loading />;

    const programData = courses?.find(course => course.slug === slug) || null;

    if (programData === null) {
        return <ProgramNotFound />
    }

    return (
        <div>
            <ProgramHero
                programName={programData.programName}
                university={programData.university}
                location={programData.location}
                duration={programData.duration}
                imageUrl={programData.imageUrl}
            />
            <ProgramOverview
                highlights={programData.highlights}
            />
            <EligibilityRequirements
                eligibility={programData.eligibility}
                requirements={programData.requirements}
            />
            <DurationFees
                duration={programData.duration}
                fees={programData.fees}
                paymentPlan={programData.paymentPlan}
            />
            <Scholarships scholarships={programData.scholarships} />
            <UniversitiesOffering universities={programData.universities} />
            <StepByStepApplication />
            <ProgramTestimonials testimonials={programData.testimonials} />
        </div>
    )
}

export default ProgramPage