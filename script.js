 const burgIcon = document.querySelector(".hamburger");
const nBar = document.querySelector(".navbar");

burgIcon.addEventListener("click", () => {
    nBar.classList.toggle("change");
});
//The above function is for he hamburger menu

//This function is to switch between dark mode and default mode
function toggle() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

const searchbar =  document.getElementById('searchbar');
let searchInput = '';

// This function gets user input from the search bar and creates a url and then passes it to 
// the getData function. 
searchbar.addEventListener('keyup', (e) => {
  if(e.keyCode === 13){
    searchInput = e.target.value.trim();
    let url = "https://api.giphy.com/v1/gifs/search?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&offset=0&rating=g&lang=en&q=";
    url = url.concat(searchInput);
    getData(url);
    document.getElementById('searchbar').value ="";
  }
});

//***Functions for Displaying gifs search by user***

//This function accepts a url it's parameter and then performs an http
// request to get the data and pass it to the displayGifs function.
async function getData(url){
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
  }catch(e){
      console.log(e);//catch and log any errors
  }
}

//***Functions for displaying trending gifs***
// Funtion sends request and gets back data for trending gifs.
// It then passes it to the displayTrending function
async function getTrendingGifs(){
  url = "https://api.giphy.com/v1/gifs/trending?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&rating=g"
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
  
  }catch(e){
      console.log(e);//catch and log any errors
  }
}

getTrendingGifs();

//Functions for filter buttons

async function movieclips(){
  url =  "https://api.giphy.com/v1/gifs/search?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&offset=0&rating=g&lang=en&q=movie+clips";
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
   
  }catch(e){
      console.log(e);//catch and log any errors
  }
}

async function starwars(){
  url =  "https://api.giphy.com/v1/gifs/search?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&offset=0&rating=g&lang=en&q=starwars";
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
  }catch(e){
      console.log(e);//catch and log any errors
  }
}

async function cars(){
  url =  "https://api.giphy.com/v1/gifs/search?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&offset=0&rating=g&lang=en&q=cars";
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
  }catch(e){
      console.log(e);//catch and log any errors
  }
}


async function love(){
  url =  "https://api.giphy.com/v1/gifs/search?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&offset=0&rating=g&lang=en&q=love";
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
  }catch(e){
      console.log(e);//catch and log any errors
  }
}


async function food(){
  url =  "https://api.giphy.com/v1/gifs/search?api_key=Qv0T8WGOf8ndAwSwAj6TuRxVgRAX7Llb&limit=25&offset=0&rating=g&lang=en&q=food";
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     displayGifs(result);
  }catch(e){
      console.log(e);//catch and log any errors
  }
}


//This function accepts the array of data and creates an html element to display the gifs.
function displayGifs(gifs){
  let result = document.getElementById('displayGifs');
  let html ='';
  let imageSource = '';
  for(let i = 0; i < 24; i++){
    imageSource= gifs.data[i].images.fixed_height_downsampled.url;
    html += `<img src=${imageSource}>`;
  }
  result.innerHTML = html;
}











  
  





