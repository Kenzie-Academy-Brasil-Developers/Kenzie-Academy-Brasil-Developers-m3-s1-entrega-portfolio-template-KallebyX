const BannerSection = () => {
    return (
        <div className="allbanner">
            <div className="bannerBox">
                <p className="nomeBanner">JOSEDASILVA</p>    
                <h1 className="h1Banner">Bem vindo ao meu portfólio</h1>
                <p className="pBanner">Uma frase interessante sobre mim</p>
                <button className="buttonBanner">Saiba mais</button>
                </div>
            <div className="imgBannerBox">
                <img className="bannerImg" src="src\assets\banner-img.png" alt="" />
            </div> 
        </div> 
    );
}

export default BannerSection;