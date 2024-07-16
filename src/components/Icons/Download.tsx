import React from "react"

interface Download {
    url: string,
    description: string
}

export const Download:React.FC<Download> = ({url, description}) => {

    const downloadImage = () => {
        console.log(url)
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
        
        const imageUrl = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${description}.jpg`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        })
            .catch(error => {
                console.error('Error al descargar la imagen:', error);
            });
    };

    return <>
        <svg onClick={downloadImage}
            xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-download download" 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="#2c3e50" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <path d="M7 11l5 5l5 -5" />
            <path d="M12 4l0 12" />
        </svg>
    </>
}