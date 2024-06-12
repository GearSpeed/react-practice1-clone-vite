export default function Hero(){
    
    const actions = [
        "Get Started",
        "Why Vite?",
        "View on GitHub",
        "🎉 ViteConf 23!"
    ]
    
    return (
        <aside id="hero">
            <div id="hero-main">
                <span className="hero-title" id="hero-vite">Vite</span>
                <p className="hero-title">Next Generation Frontend Tooling</p>
                <p className="hero-tagline">Get ready for a development environment that can finally catch up with you.</p>
                <aside id="hero-actions">
                    {
                        actions.map((items) => {
                            return <span key={`item-${items}`}
                            className="items-actions" id={`items-actions-${items.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '')}`}>{items}</span>
                        })
                    }
                </aside>
            </div>
            <div id="hero-image-container">
                <img src="https://vitejs.dev/logo-with-shadow.png" alt="logo" height="320px" width="320px"/>
            </div>
        </aside>
    )
}