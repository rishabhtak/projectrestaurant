import React from 'react';
import styles from './mystyle.module.css';
import contactbackground from './contactbackground.jpg';


class Contactus extends React.Component {  
  render() {  
      return(

<div style={{backgroundImage: `url(${contactbackground})` , backgroundSize:'cover', height: '800px' }}>

<br />
<h1 style={{textAlign:"center",color:"white",fontFamily:"Bradley Hand, cursive",fontSize:"35px"}}>Contact us</h1>

<br />
<br />

<div style={{height:300}}>
<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Contact </h4> <br />
<p>9876543210</p>
</div>


  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Address </h4> <br />
<p>275-A,Model Town,Malviya Nagar,Jaipur, Rajasthan 302017 India</p>
</div>


 <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Opening Hours </h4> <br />
<p>Mon:	07:00 am – 11:30 pm <br />
Tue:	07:00 am – 11:30 pm <br />
Wed:	07:00 am – 11:30 pm <br />
Thu:	07:00 am – 11:30 pm <br />
Fri:	07:00 am – 11:30 pm <br />
Sat:	07:00 am – 11:30 pm <br />
Sun:	07:00 am – 11:30 pm <br />
</p>
</div>
</div>
</div>



 
</div>
);    
  }  
}  
export default Contactus;  