import SocialPill from "./SocialPill";
import Wrapper from "./Wrapper";
import GithubIcon from "./icons/GithubIcon.jsx"
import LinkedinIcon from "./icons/LinkedinIcon.jsx"
import MailIcon from "./icons/MailIcon";


export default function SocialCard() {

    return (
        <div id="contacto">
            <Wrapper>
                <h2 className="text-lg md:text-2xl text-green-300 font-semibold uppercase pb-4">Contáctame</h2>
                <nav className=" flex flex-wrap-reverse gap-x-2 gap-y-4 h-auto">
                    <SocialPill href="mailto:sbector.prod@gmail.com">
                        <MailIcon className="w-6 h-6"/>e-mail
                    </SocialPill>
                    <SocialPill href="https://www.linkedin.com/in/saul-becerra-torres">
                        <LinkedinIcon className="w-6 h-6" />Linkedin
                    </SocialPill>
                    <SocialPill href="https://github.com/Sbector">
                        <GithubIcon className="w-6 h-6" />Github
                    </SocialPill>
                </nav>
            </Wrapper>
        </div>
    )
}