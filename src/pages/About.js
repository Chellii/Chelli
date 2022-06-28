import img from "../images/chelli2.jpeg"
import '../styles/about.css'
export default function About() {
    return (
        <div className="about--container">
            <h1>Hey! My name is Chelli I am a full stack developer</h1>
            <div className="about-talks">
                <img src={img} alt="chelli"/>
                <div className="talks">
                    <p className="about-p1">i studied at 1337 which is part of the 42 network, a non ordinary school with no teachers and no schedules. There I learnt problem solving, algorithms, reverse engineering and it was at 1337 that i discovered my love for creating things that live on the internet and conjur websites from nothing into existence.</p>
                    <p className="about-p2">when I'm not manipulating keyboards you'll find me reading books, looking at the stars, painting on my face (yea it's art) and killing people I know with philosophical questions</p>
                    <p className="about-p3">if you want to work with someone who has both a creative and a logical side contact me and let's make something special</p>
                </div>
            </div>
        </div>
    )
}