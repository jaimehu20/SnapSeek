import React from "react"

export const EmptyGallery: React.FC = () => {
    return <>
        <div className="empty">
            <img src="/cam.png" />
            <p>
                ¡Oops! Parece que aún no has guardado ninguna foto en favoritos.
                ¡Vuelve a <a href="/">Inicio</a> para empezar a crear tu biblioteca!
            </p>
        </div>
    </>
}