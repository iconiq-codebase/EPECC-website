import AccommodationSupport from "./AccommodationSupport/AccommodationSupport"
import FlightBookingAssistance from "./FlightBookingAssistance/FlightBookingAssistance"
import PreDepartureBriefing from "./PreDepartureBriefing/PreDepartureBriefing"
import ScholarshipAssistance from "./ScholarshipAssistance/ScholarshipAssistance"
import ServiceHero from "./ServiceHero/ServiceHero"
import UniversitySelection from "./UniversitySelection/UniversitySelection"
import VisaProcessingDocumentation from "./VisaProcessingDocumentation/VisaProcessingDocumentation"

const ServicePage = () => {
    return (
        <div>
            <ServiceHero />
            <UniversitySelection />
            <ScholarshipAssistance />
            <VisaProcessingDocumentation />
            <AccommodationSupport />
            <PreDepartureBriefing />
            <FlightBookingAssistance />
        </div>
    )
}

export default ServicePage