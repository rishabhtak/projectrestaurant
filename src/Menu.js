import React from 'react';
import styles from './mystyle.module.css';
import ballen from './Menu/ballen.png';
import menubackground from './Menu/menubackground.jpg';

class Menu extends React.Component {  
  render() {  
      return(
<div style={{backgroundImage: `url(${menubackground})` , backgroundSize:'cover' }}>

<br />
<h1 style={{textAlign:"center",color:"white",fontFamily:"Bradley Hand, cursive",fontSize:"35px"}}><span style={{borderBottom:"2px solid red"}}>Restaurant Menu</span></h1>

<br />

<img src={ballen} alt="Ballen" style={{display:"block",margin:"auto"}} />

<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>SOUP</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Tomato Basil Shorba </h4>
<p> Desi meets videsi in this soup made with tomatoes and basil.</p>
</div>

<div className={styles.col}>
  <h4 style={{color:"#DDAA44"}}> Desi Manchow Soup </h4>
<p>When your mann ‘chows’ for something spicy, Indian as well as Oriental, go for this Indo-Chinese creation.</p>
</div>
</div>

<div className={styles.colContainer}>
<div className={styles.col}>
  <h4 style={{color:"#DDAA44"}}>Lemon Coriander Pepper Rasam</h4>
<p>Rasam literally translates to ‘juice’ in Tamil. This one’s made unique with the addition of tangy lemon and fresh coriander.</p>
</div>

<div className={styles.col}>
  <h4 style={{color:"#DDAA44"}}>Sweet Corn Soup </h4>
<p>We make it our style – cream style corn with a touch of Indian herbs.</p>
</div>
</div>

<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>SALAD</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Tossed Green Salad</h4>
<p> Greens tossed in a vinaigrette dressing – fresh, fresher, freshest!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}> Ghugni Tikki Chaat</h4>
<p> One of the most popular snacks in Eastern India, turned into tikkis and served all jazzed-up!</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Pakwan ka Bhel</h4>
<p> TSindhi cuisine meets Maharashtrian cuisine in this fun mélange!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Samosa Chaat</h4>
<p> We’ve got the best way to serve your favourite snack – crumbled samosa, sweet yogurt, chutney and sweet tamarind sauce.</p>
</div>
</div>

<div className={styles.colContainer}>
<div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Khamang Kakdi</h4>
<p> The Gujarati favourite, now at The Yellow Chilli.</p>
</div>
</div>


<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>PAPAD AND RAITA</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Masala Papad (Roasted or Fried)</h4>
<p> Papads topped with onion tomato salad. It’s fun!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Raita</h4>
<h5 style={{color:"#DDAA44"}}>Burani / Kachumber / Boondi / Pineapple</h5>
<p> The ultimate Indian accompaniment.</p>
</div>
</div>

<div className={styles.colContainer}>
<div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Matka Dahi</h4>
<p> Curd set in earthenware. That’s how you stay grounded!</p>
</div>
</div>

<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>STARTERS</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Hara Masaley ka Bhuna Paneer</h4>
<p> Hara hai toh behtar hai! Aur saath mein hai paneer, a super combination!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Soya ki Galouti</h4>
<p>Move over mutton ‘cuz the proteins are here to rule!</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Harippa Paneer Tikka</h4>
<p> Tandoor cooked cottage cheese marinated in a blend of chilli and spices. Dil, dimag aur taste buds bole hadippa!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Pan-Fried Palak Corn Momos</h4>
<p>Your favourite momos, now with a popular sabzi filling.</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Shabnam ke Moti</h4>
<p>Literally translating to ‘dew drops,’ shabnam a.k.a mushrooms stuffed with cheese simply spell romance!

</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Tangra Chilli Paneer</h4>
<p>Don’t want to travel all the way to China Town in Kolkata? Try the famous dish here!</p>
</div>
</div>


<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>CURRIES</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Shaam Savera</h4>
<p> Dusk or dawn, you decide! This is our version of paneer stuffed palak koftas on a luscious tomato gravy.</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Paneer Tikka Lababdar</h4>
<p>Your favourite starter, now as a main course!</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Kumbh Butter Masala</h4>
<p>Not the mela, but these are fresh mushrooms sitting in a buttery gravy!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Sarson ka Saag</h4>
<p>Punjabiyan di shaan wakhri!</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Methi Malai Kofta</h4>
<p>According to Ayurveda, fenugreek is known to aid in digestion. We create a fabulous dish with fenugreek balls in a creamy base.</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Subz Panchvati</h4>
<p>Sautéed assorted vegetables with Indian tadka. Gorgeous on the palate and to the eyes!</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Tadka Palak Makhana</h4>
<p> Fox nuts with tempered spinach, isn’t it unique?</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Urlai Roast Masala</h4>
<p>Flavours of South India right on your plate. Baby potatoes tossed with gun powder and curry leaves.</p>
</div>
</div>

<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>DAL AND MORE</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Pindi Chholay</h4>
<p>Ginger and burnt cumin flavoured chickpeas, the pride of Punjab!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Rajma Masala</h4>
<p>The ultimate comfort food for Indians, no matter where they go.</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Dhaba Dal</h4>
<p>A ladleful of this delectable dal will transport you to the road side eateries of North India!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Lalla Mussa Dal</h4>
<p>Kali dal, The Yellow Chilli style! Black lentils simmered overnight.</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Kadhi Pakodi</h4>
<p>Kadhi chawal is Master Chef Sanjeev Kapoor’s favourite food? Is it yours?</p>
</div>
</div>

<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>ROTI</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Naan</h4>
<h5 style={{color:"#DDAA44"}}>Plain / Butter /Whole Grain / Butter Garlic / Tomato Cheese</h5>
<p>Apparently, this leavened flatbread traces back to 1300 AD where it was found in the notes of famous Indo-Persian poet Amir Khusrow.</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Roti</h4>
<h5 style={{color:"#DDAA44"}}>Plain /Missi / Pyaaz Mirch / Bajra / Roomali</h5>
<p>The most popular Indian flat bread. Also known as phulka, chapatti, etc.</p>
</div>
</div>

<div className={styles.colContainer}>
<div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Appam</h4>
<p>Appam Signature food of Syrian Christians in Kerala. Pancakes made of coconut milk and fermented rice batter.</p>
</div>

<div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Paratha</h4>
<h5 style={{color:"#DDAA44"}}>Mint / Aloo / Malabari / Lachcha Another favourite Indian</h5>
<p>Mint / Aloo / Malabari / Lachcha Another favourite Indian flatbread made with whole wheat flour.</p>
</div>
</div>


<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>CHAAWAL</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Saada Chawal</h4>
<p>Steamed Basmati rice. Simple is beautiful!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Matar / Jeera / Tawa Pulao</h4>
<p>Pan-tossed long grain rice with green peas / cumin seeds / masala vegetables – totally desi!</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Brown Rice Pulao</h4>
<p>Health bhi, taste bhi!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Curd Rice</h4>
<p>Straight from South India to our kitchens and then your plate!</p>
</div>
</div>

<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>WOK</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Fried Rice</h4>
<p>Wok-tossed rice and vegetables, for the Indo-Chinese lovers!</p>
</div>
</div>


<br />
<br />
<h4 style={{textAlign:"center",color:"white",fontFamily:"Lucida Handwriting",fontSize:"30px"}}><span style={{borderBottom:"2px solid red"}}>MEETHA</span></h4>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Pista Rose Phirni</h4>
<p>The classic Punjabi dessert given a flowery twist.</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Mukhwaas Kulfi</h4>
<p>Like a breath of fresh air.</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Rasmalai</h4>
<p>Cottage cheese dumplings in sweetened milk. Go for it!</p>
</div>

  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Ice Cream</h4>
<p>Of your choice</p>
</div>
</div>

<div className={styles.colContainer}>
  <div className={styles.col}>
 <h4 style={{color:"#DDAA44"}}>Indian Sweet Platter</h4>
<p>All in One – Basundi, Phirni, Halwa!</p>
</div>
</div>





</div>
);    
  }  
}  
export default Menu;  