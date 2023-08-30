import { catsData } from "/data.js";

const emotionRadios = document.querySelector(".emotion-radios");
const imageBtn = document.querySelector(".get-image-btn");
const checkbox = document.querySelector("#gifs-only-option");
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const modalCloseBtn = document.querySelector('.meme-modal-close-btn')

emotionRadios.addEventListener("change", highlightCheckedOption);

modalCloseBtn.addEventListener('click', closeModal)

imageBtn.addEventListener("click", renderCat);

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName("radio");
  
    for (let radio of radios) {
      radio.classList.remove("highlight");
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
  }
    
function closeModal(){
    memeModal.style.display = 'none'
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =  `
    <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >`
    memeModal.style.display = 'flex';
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1) {
        // console.log("There is only one cat object:");
        return catsArray[0]
    }else if (catsArray.length > 1) {
        const randomIndex = Math.floor(Math.random() * catsArray.length);
        // console.log("Randomly selected cat object:");
        return catsArray[randomIndex]
    }
}

function getMatchingCatsArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion= document.querySelector('input[type="radio"]:checked').value;
        const isGif = checkbox.checked;
        const getMatchingCatsArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }else{
                return cat.emotionTags.includes(selectedEmotion);
            }
            
        });
    
        return getMatchingCatsArray
      } 
}

function getEmotionsArray(cats) {
  const emotionsArray = [];

  for (let cats of catsData) {
    for (let emotionTag of cats.emotionTags) {
      if (!emotionsArray.includes(emotionTag)) {
        emotionsArray.push(emotionTag);
      }
    }
  }
  return emotionsArray;
}

const emotionalRadios = document.querySelector(".emotion-radios");

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let html = "";
  for (let emotion of emotions) {
    html += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id=${emotion}
                value=${emotion}
                name="emotions"
                >   
        </div>
        `;
  }

  emotionalRadios.innerHTML = html;
}

renderEmotionsRadios(catsData);
