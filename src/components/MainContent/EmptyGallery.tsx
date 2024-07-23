export const EmptyGallery = () => {
    return <>
        <div className="empty">
            <img src="../../../public/cam.png" />
            <p>
                ¡Oops! Parece que aún no has guardado ninguna foto en favoritos.
                ¡Vuelve a <a href="/">Inicio</a> para empezar a crear tu biblioteca!
            </p>
        </div>
    </>
}