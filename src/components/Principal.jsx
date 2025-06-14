export default function Principal() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/ruta-a-tu-cv.pdf' // Asegúrate de que el archivo esté disponible públicamente
    link.download = 'Benjamin_Galan_CV_ES.pdf'
    link.click()
  }

  const handleContact = () => {
    window.location.href = 'mailto:begalan@outlook.es'
  }

  return (
    <div className="principal-container">
      <p className="principal-text">Desarrollador web junior</p>
      <h1 className="principal-name">Benjamín Galán</h1>
      <div className="principal-buttons">
        <button className="projects-button" onClick={handleDownloadCV}>
          Descargar CV
        </button>
        <button className="contact-button" onClick={handleContact}>
          Contáctame
        </button>
      </div>
    </div>
  )
}
