import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-48de3-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.querySelector("#inputField")
const btnAdd = document.querySelector("#btn-add")  
const shoppingListEl = document.querySelector("#shopping-list")


btnAdd.addEventListener("click", function(){

    let inputValue = inputFieldEl.value
    if(inputValue){
        push(shoppingListInDB, inputValue)
    
        clearInputField()
    }

    
    console.log(inputValue)
})

 



onValue(shoppingListInDB, function(snapshot){

    if(snapshot.exists()){
        let itemsArray = Object.entries(snapshot.val())

        clearShoppingListEl()
    
        for(let i = 0; i < itemsArray.length; i++){
            let currentArray = itemsArray[i]
            let currentItemID =  currentArray[0]
            let currentItemValue = currentArray[1]
            
            addToShoppingList(currentArray)
            console.log(currentItemID, currentItemValue);
        }
    } else {
        shoppingListEl.textContent = "Inga varor här än"
    } 
    

})


function clearShoppingListEl(){
    shoppingListEl.innerHTML = ""
}

function clearInputField(){
    inputFieldEl.value = ""
}

function addToShoppingList(item){
    let itemID = item[0]
    let itemValue = item[1]
    // shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    let newEl = document.createElement("li")
    newEl.textContent = itemValue

    newEl.addEventListener("dblclick", function(){
        let exactLocationItemDB = ref(database, `shoppingList/${itemID}`)

        remove(exactLocationItemDB)
        console.log(itemID);
    })

    shoppingListEl.append(newEl)
}