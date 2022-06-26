import "../styles/home.css"
import Header from "../Components/Header"
import chelliGif from "../images/chelli.gif"

export default function Home() {
    return(
        <div className="Home--container">
            <Header />
            <main className="main-home">
                <div className="info-main-div">
                    <div className="info-div">
                        <div className="info-div-title">
                            <h1>Hello I'm Chaimae El Oiriagli</h1>
                            <p>But call me Chelli</p>
                        </div>
                        <p>I am a softwate Engineer</p>
                    </div>
                    <div className="img-div">
                        <img src={chelliGif} alt="chelli"/>
                    </div>
                </div>
                <div>
                    <p>Latest Projects</p>
                </div>
            </main>

        </div>
    )
}