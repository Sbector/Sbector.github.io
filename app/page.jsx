import AboutPage from "./about/page";
import Button from "./components/Button";
import HomeNav from "./components/HomeNav";


export default function Home() {
  return (
    <div className="relative">
      <HomeNav />
      <AboutPage/>
    </div>
  )
}