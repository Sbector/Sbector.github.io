import AboutPage from "./about/page";
import Button from "./components/Button";
import HomeNav from "./components/HomeNav";


export default function Home() {
  return (
    <div>
      <HomeNav />
      <main>
        <AboutPage id="about" />
      </main>
      <Button href="#top">inicio</Button>
    </div>
  )
}