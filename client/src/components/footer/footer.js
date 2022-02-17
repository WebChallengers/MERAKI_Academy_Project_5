import "./footer.css";
import { Link } from "react-router-dom";
const Footer = ()=>{
//
return(
    <>

      <div className="Footer">
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg"/> </div>
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/audi-13.svg"/> </div>
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/ford-logo-flat.svg"/> </div>
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/nissan-6.svg"/> </div>
        <div className="bmw"><img className="bmwimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1200px-BMW_logo_%28gray%29.svg.png"/> </div>
        <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/tesla-motors-1.svg"/> </div>
        <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/land-rover-2.svg"/> </div>
       
      </div>

      <div className="Footer">
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/apple.svg"/> </div>
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/samsung.svg"/> </div>
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/logo-of-the-sharp-corporation.svg"/> </div>
      <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/daewoo-logo-1.svg"/> </div>
        <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/logo-lg.svg"/> </div>
        <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/philips-7.svg"/> </div>
        <div className="bmw"><img className="bmwimage" src="https://cdn.worldvectorlogo.com/logos/aeg-5.svg"/> </div>
       
      </div>

      <div className="Footer">
        <div>Meraki C4 </div>
        <div>Project Done By team A4 </div>
        <div> c 2022 </div>
        <div> <Link className="Homelinks" to="/contactus">Contact us</Link>  </div>
      </div>
  
</>
)
}

export default Footer;

