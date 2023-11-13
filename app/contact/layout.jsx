import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutLayout({children}) {
    return (
        <body>
            <Header/>
            {children}
            <Footer/>
        </body>
    )
}