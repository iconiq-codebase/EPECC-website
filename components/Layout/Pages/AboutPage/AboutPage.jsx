import AboutHero from "./AboutHero/AboutHero"
import AchievementsStats from "./AchievementsStats/AchievementsStats"
import CompanyStory from "./CompanyStory/CompanyStory"
import MissionVision from "./MissionVision/MissionVision"
import TeamIntroduction from "./TeamIntroduction/TeamIntroduction"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"

const AboutPage = () => {
    return (
        <div>
            <AboutHero />
            <CompanyStory />
            <MissionVision />
            <TeamIntroduction />
            <AchievementsStats />
            <WhyChooseUs />
        </div>
    )
}

export default AboutPage