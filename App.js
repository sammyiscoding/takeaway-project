import {useState} from "react"
import './App.css';
import "./Button.js"


function App() {
  const [imageUrl, setImageUrl] = useState ('')

  //list of food images
  function imageGenerator() {
    const optionImageUrls = ['https://media.istockphoto.com/id/481885176/photo/miso-ramen-asian-noodles-with-egg-enoki-and-pak-choi.jpg?s=612x612&w=0&k=20&c=m0EiJELCBzObLb6IZrzaHncdlJgwsFigOpeDQrDiB0Y=',
                             'https://images.pexels.com/photos/15352990/pexels-photo-15352990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                             'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                             'https://images.pexels.com/photos/6941021/pexels-photo-6941021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                             'https://images.pexels.com/photos/6275215/pexels-photo-6275215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                             'https://images.pexels.com/photos/10549666/pexels-photo-10549666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                             'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                             'https://images.pexels.com/photos/10549666/pexels-photo-10549666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                             'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                             'https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                             'https://images.pexels.com/photos/9832637/pexels-photo-9832637.jpeg', 
                             'https://assets.bonappetit.com/photos/63d136f17ce1373a96817e1d/4:5/w_2896,h_3620,c_limit/012523-chicken-and-waffles-lede.jpg',
                             'https://media.cnn.com/api/v1/images/stellar/prod/220921081426-04-chinese-foods-ziao-long-bao.jpg?c=original&q=w_1280,c_fill',
                             'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg',
                             'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
                             'https://www.whatdadcooked.com/wp-content/uploads/2016/08/jerk-chic-0660-3.jpg',
                             'https://lovingitvegan.com/wp-content/uploads/2021/06/Vegan-Katsu-Curry-35.jpg',
                             'https://media-cdn.tripadvisor.com/media/photo-s/1c/18/7f/03/we-bought-it-even-more.jpg',
                             'https://canarywharf.com/wp-content/uploads/2020/05/canary-wharf-eating-drinking-nandos-ss20-4-710x690-1.jpg',
                             'https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/pass/double-rl-ranch-burger.jpg',
                             'https://images.immediate.co.uk/production/volatile/sites/2/2019/07/Adana-Kebab-f49ae24.jpg',
                             'https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/2507e95d-eaec-4428-9a65-033d26a18fff/Allinsons-Wholemeal-Bagels-1-1-Baking-Mad-5.jpg',
                             'https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg']
    const randomIndex = Math.floor(Math.random() *optionImageUrls.length)
    setImageUrl(optionImageUrls[randomIndex])
  }


  return (
    <div className="App">
      <header className="App-header">
    <h1>Takeaway Generator</h1> 
    <p>Need help choosing what to eat?</p>
    <img className="App-image" src={imageUrl}/>
    <button onClick={imageGenerator}>Click Me</button>

      </header>
    </div>


  );
}






export default App;
