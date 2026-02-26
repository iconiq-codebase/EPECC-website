"use client";

import CountriesHero from "./CountriesHero/CountriesHero"
import CountryOverview from "./CountryOverview/CountryOverview"
import TopUniversities from "./TopUniversities/TopUniversities"
import VisaWorkInfo from "./VisaWorkInfo/VisaWorkInfo"
import ScholarshipInfo from "./ScholarshipInfo/ScholarshipInfo"
import StudentTestimonials from "./StudentTestimonials/StudentTestimonials"
import ApplyCTA from "./ApplyCTA/ApplyCTA"
import CountryFAQs from "./CountryFAQs/CountryFAQs"
import { useMyContext } from "@/components/utils/Context";

const CountriesPage = ({ slug }) => {

    const { country } = useMyContext    ();

    const countryData = country.find((c) => c.slug === slug);

    if (!countryData) {
        return (
            <div className="text-center py-20 text-white h-screen flex items-center justify-center">
                Country not found.
            </div>
        )
    }

    return (
        <div>
            <CountriesHero country={countryData} />
            <CountryOverview country={countryData} />
            <TopUniversities country={countryData} />
            <VisaWorkInfo country={countryData} />
            <ScholarshipInfo country={countryData} />
            <StudentTestimonials country={countryData} />
            <CountryFAQs country={countryData} />
            <ApplyCTA countryName={countryData.name} />
        </div>
    )
}

export default CountriesPage
