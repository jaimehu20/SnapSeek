import OrbitingCircles from "../MagicUI/Orbit/Orbit";

export const MainContent = () => {
    const handleEmailClick = () => {
        window.open('mailto:jaimehu.dev@gmail.com');
    }
    return <>
        <main>
            <div className="main">
                <img src="https://ia801705.us.archive.org/16/items/windows-xp-bliss-wallpaper/windows-xp-bliss-4k-lu-1920x1080.jpg" />
                <div className="overlay">
                    <div className="overlay-text">Hola</div>
                </div>
            </div>
            <section className="contact">
                <div>
                    <h2>Contáctame</h2>
                    <p>Si tienes alguna sugerencia o idea para mejorar la página, ¡no dudes en contactarme! Estaré encantado de leerte.</p>
                    <button onClick={handleEmailClick}>¡Contacta conmigo!</button>
                </div>
            </section>
            <section className="technologies">
                <OrbitingCircles />
            </section>
        </main>
    </>
}