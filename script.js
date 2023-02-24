 const product =[
  {
    id: 0,
    image: 'image/whiteyellow.jpg',
    title: 'White Yellow flower',
    price: 150,
  },
  {
    id: 1,
    image: 'image/white.jpg',
    title: 'White flower',
    price: 120,
  },
  {
    id: 2,
    image: 'image/violet.jpg',
    title: 'Violet flower',
    price: 180,
  },
  {
    id: 3,
    image: 'image/red.jpg',
    title: 'Red flower',
    price: 200,
  }
 ]
 const categories = [...new setInterval(product.map((item)=>
  {return item}))]
  let i=0;
  document.getElementById('root').innerHTML = categories.map((item)=>
  {
    var {image, title, price} = item;
    return(
      <><div class='box'></div><div class='img-box'>
        <img class='images' src $ {...image}></img>
      </div></></><div class='bottom'>
          <p>INR{title}</p>
          <h2>INR INR{price}.00</h2> +
          "<button onclick='addtocart("+(i++)+")'Add to cart </button>"+
          </div>
          </div>

    )
  }).join('')

  var cart =[];

  function displaycart(a){
    let j = 0;
    if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
        var { image, title, price} = items;
        return(
          <div class = 'cart-item'>
            <div class= 'row-img'>
              <img class='rowimg' src=INR{...image}></img>

          </div>
    
          <p style='font-size:122px;'>INR{title}</p>
          <h2 style='font-size: 15px; '>INR INR{price}.00</h2> +
          "<i class='fa-solid fa-trash' onclinc='delElement("+(j++) +")'></i> </div>"
          
        );
      }).join("");
    }
  }