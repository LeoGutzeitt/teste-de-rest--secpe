import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {currentYear} WordPress REST API Demo. Estrutura básica para integração com WordPress Headless.
        </p>
      </div>
    </footer>
  )
}

export default Footer