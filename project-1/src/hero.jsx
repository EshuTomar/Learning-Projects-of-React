const Hero = () =>{
    return(
        <main className="hero">
            <div className="hero-content">
                <h1>ELEVATE YOUR EVERY STEP</h1>
                <p className="hero-para">
                    Experience unparalleled comfort and chic designs with our premium shoe collection, tailored for every journey.
                </p>

                <div className="hero-btn">
                    <button>Shop now</button>
                    <button className="hero-btn-2">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>

                    <div className="brand-icons">
                        <img src="/images/app-store.png"></img>
                        <img src="/images/shopping.png"></img>
                        <img src="/images/shopping-bags.png"></img>
                    </div>

                </div>
            </div>
            <div className="hero-img">
                <img src="https://sothebys-com.brightspotcdn.com/08/f3/27aec5e248f5ab647d074cfeed6a/729sneakers-c7d4c-t1-02a.jpg"></img>
            </div>
        </main>
    )
}
export default Hero; 