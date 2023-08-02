import { Menu, Search } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';

const Header = () =>{
  const navigate = useNavigate();
  return (
    <nav class="navbar">
      <a href="#" class="navbar-logo">Suchron<span>rizal</span></a>
      <div class="navbar-nav">
        <Link to={'/about'}>About</Link>
        <a href="#" id="portfolio">Portfolio</a>
        <a href="#" id="photography">Photography</a>
        <a href="#" id="blog">Blog</a>
        <a href="#" id="contact">Contact</a>
      </div>
      <div class="navbar-extra">
        <a href="#" id="search"><Search /></a>
        <a href="#" id="hamburger"><Menu /></a>
      </div>
    </nav>
  )  
}
export default Header;