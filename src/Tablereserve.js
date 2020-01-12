import React from 'react' 
import styles from './mystyle.module.css'; 
import tablebackground from './tablebackground.jpg';
 
class Tablereserve extends React.Component {  
  render() {  
      return(
	<div style={{backgroundImage: `url(${tablebackground})` , backgroundSize:'cover' }}>
	<div class="container">
	
	<br />
  <h2 style={{color:"#ebf5f4",textAlign:"center",fontFamily:"Bradley Hand, cursive",fontSize:"35px"}}>Table Reservation</h2>
  <br /> <br />
  <form>
    <div class="form-group">
      
      <input type="text" class="form-control" placeholder="Enter Name*" className={styles.inputbox} required />
    </div>
    <div class="form-group">
      <input type="number" class="form-control" placeholder="How Many Members Are Coming*" className={styles.inputbox} required />
      
    </div>
    <div class="form-group">
      <input type="email" class="form-control" placeholder="Enter Email" className={styles.inputbox} />
      </div>
	<br />
     <div class="form-group">
      <input type="number" class="form-control" placeholder="Enter Mobile Number*" required className={styles.inputbox} />
	
      </div>
	<div class="form-group">
      <input type="date" class="form-control" placeholder="Arrival Date*" className={styles.inputbox} required />
	
      </div>
	<div class="form-group">
  	
  	<textarea class="form-control" rows="5" placeholder="Special Requests" className={styles.inputbox}></textarea>
	</div>
    
    <br />
    <input type="submit" value="Submit" class="btn btn-primary" className={styles.btn} />
  </form>

<br /> <br />
</div>
</div>
);  
  }  
}  
export default Tablereserve;  