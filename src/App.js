import React, { Component } from 'react';
import styles from './mystyle.module.css'; 
import pic1 from './Main/pic1.jpg';
import pic2 from './Main/pic2.jpg';
import pic3 from './Main/pic3.jpg';
import bar from './Features/bar.png';
import bf from './Features/bf.png';
import desk from './Features/desk.png';
import wifi from './Features/wifi.png';
import homebackground from './Main/homebackground.jpg';

class App extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${homebackground})` , backgroundSize:'cover' }}>
{/* The slideshow */}

<div id="demo" class="carousel slide" data-ride="carousel">


  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} alt="pic1"/>
    </div>
    <div class="carousel-item">
      <img src={pic2} alt="pic2" />
    </div>
    <div class="carousel-item">
      <img src={pic3} alt="pic3" />
    </div>
  </div>

  
  {/* Left and right controls */}

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
<br /> <br />

{/* Facilities */}
<div className={styles.facilities}>
<h2 style={{color:"white",textAlign:"center",paddingTop:20,fontFamily:"Bradley Hand, cursive",fontSize:"35px"}}>Our Facilities</h2>
<p style={{color:"white",textAlign:"center"}}>Our restaurant serves good quality home-cooked food, using local produce.All menus are tailored to your needs we cater especially for vegetarian, vegans, and others with special dietary requirements.</p>
</div>

<br /> <br />
<div className={styles.row}>

<figure>
  <img src={bar} alt="Bar" className={styles.space} />
  <figcaption className={styles.featurestext}>Bar</figcaption>
</figure>

<figure>
 <img src={bf} alt="Breakfast" className={styles.space} />
  <figcaption className={styles.featurestext}>Food</figcaption>
</figure>

<figure>
  <img src={desk} alt="Reception" className={styles.space} />
  <figcaption className={styles.featurestext}>Reception</figcaption>
</figure>


<figure>
   <img src={wifi} alt="Free Wifi" className={styles.space} />
  <figcaption className={styles.featurestext}>Free Wifi</figcaption>
</figure>
</div>

<br /><br />
<div className={styles.clmn}>
<ul style={{fontFamily:"arial"}}>
<li>Breakfast service: 07:00AM – 2:00PM</li>
<li>All-day dining: 11:00AM – 06:00PM</li>
<li>Dinner: 06:00PM – 11:30PM</li>
<li>Coffee & Tea Service</li>
<li>Beer bar</li>
<li>Swimming pool</li>
<li>Skype phone</li>
<li>Washrooms</li>
<li>Pets are not allowed.</li>
<li>Payment: Cash or credit card (Visa, Master, UnionPay, and JCB)</li>
</ul>
</div>

<br /><br />

<div className={styles.facilities}>
<h2 style={{color:"white",textAlign:"center",paddingTop:20,fontFamily:"Bradley Hand,cursive",fontSize:"35px"}}>Our Guest Reviews</h2>
<p style={{color:"white",textAlign:"center"}}>Read our guest comments and reviews about the breakfast and food quality and services.</p>
</div>

<br /><br />

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Bhaskar D, from Guest Comment, says: </h4>
<p>"Has A Great Foood and offers great hospitality and customer satisfaction level is just fab.."</p>
</div>

<div className={styles.col}>
  <h4 style={{color:"#DDAA44"}}> Devanshu A, from Guest Comment, says: </h4>
<p>"A good North-Indian food outlet with a Punjabi touch, great theme, decor, service & hospitality. The look & feel is awesome, also separate dance floor also who want to enjoy to the fullest. Best thing they make the food with less oil & spices, but at the same time rich in taste, like finger licking good. So the health conscious people can also enjoy the delicacies" </p>
</div>

 <div className={styles.col}>
  <h4 style={{color:"#DDAA44"}}> Shubham A, from Guest Comment, says: </h4>
<p>"Awesome Paneer. Butter paneer masala is with a twist. Different but very tasty." </p>
</div>
</div>

<br />
<div style={{textAlign:"center"}}>
<button type="button" class="btn btn-link">WRITE A REVIEW</button>
<button type="button" class="btn btn-link">READ MORE</button> 
</div>

<br />
<br />



</div>



     
    );
  }
}

export default App;