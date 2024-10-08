import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Mentor from "./components/Mentor/Mentor";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";
import Tabs from './components/Courses/Courses'


export default function Home() {
  return (
    <main>
        <Banner />
        <Companies />
        <Tabs />
        <Mentor />
        <Students />
        <Newsletter />
    </main>
  )
}
