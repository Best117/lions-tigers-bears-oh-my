const url = "https://api.thecatapi.com/v1/breeds";
const api_key = "live_3heUFiZslAqfzorY87fuKrJdCV33WyCSeUV4iO67RHjgIjI3bCiTpNItOedzV5by"
let savedCatBreeds = []

fetch(url,
        {headers: 
            {
            'x-api-key': api_key //this api key is so that more than 10 images can be displayed, only 10,000 images a month can be displayed
            }
        }
    )
.then((response) => { //.then works to return a promise
 return response.json();
                    }
    )
.then((data) => {
 
 data = data.filter(img=> img.image?.url != null) //gets rid of any breeds that may not have an image
 
savedCatBreeds = data;
 
 for (let i = 0; i < savedCatBreeds.length; i++)  { //this is a for loop, something I did back at IVCC
  const breed = savedCatBreeds[i];
  let choice = document.createElement('option');

   if(!breed.image)continue

  choice.value = i;
  choice.innerHTML = `${breed.name}`;
document.getElementById('catBreedSelector').appendChild(choice);
  }
showCatBreedImage(0)
}
)
.catch(function(error) { //watching for errors
    console.log("There was a problem fetching the breeds.");
}
);

function showCatBreedImage(index)
{ 
document.getElementById("catBreedImage").src= savedCatBreeds[index].image.url; //picture of cat

document.getElementById("catBreedDesc").textContent= savedCatBreeds[index].temperament //description of cat
}