import Gallery from "./Gallery/Gallery"
import StoriesHero from "./StoriesHero/StoriesHero"
import StudentQuotes from "./StudentQuotes/StudentQuotes"

const StoriesPage = () => {
    return (
        <div>
            <StoriesHero />
            <StudentQuotes />
            <Gallery />
        </div>
    )
}

export default StoriesPage