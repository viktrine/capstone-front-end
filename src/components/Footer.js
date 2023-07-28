function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
        <p>© Safaricom {year}</p>
        </footer>
    );
}
export default Footer;