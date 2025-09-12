import bearImg from "/beer.png"
import lionImg from "/Lion.png"
import catImg from "/Cat.png"
import Card from "./Card"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <h2 className="subtitle">Unlock</h2>
                <h1 className="title">The Digital Renaissance</h1>
                <p className="hero-para">
                    Join the revolution, embrace the digital revolution, and become a part of the ever-evolving NFT ecosystem.
                </p>

                {/* Cards section */}
                <section className="cards-section">
                    <Card image={bearImg} title="Bear" author="Andrew Garf" price="40" />
                    <Card image={lionImg} title="Lion" author="Jen Stark" price="80" />
                    <Card image={catImg} title="Cats" author="Casey Reas" price="120" />
                </section>
            </div>
            <div className="hero-right">
                <div className="stone">
                    <img src="stone.png" alt="stone image" />
                </div>
                <div className="hand">
                    <img src="hand.png" alt="hand image" />
                    <button className="start-btn">Start</button>
                </div>
                <div className="barcode">
                    <img src="Barcode.png" alt="barcode" />
                </div>
            </div>
        </section>
    )
}

export default Hero
