let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById("host-name").innerHTML = "Michael Alvear";
document.getElementById("collaborator-name").innerHTML = "Abhay Sharma";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 
let floatingButton = document.querySelector("#instruction_button");
floatingButton.addEventListener("click", hideInstructions);
function hideInstructions(){
    console.logo(this);
    //Get all instructions
    let setOfQuestions = document.querySelectorAll(".question");
    if(this.innerHTML === "Hide Instructions"){
        for(let question of setOfQuestions){
            question.style.display="none";
            this.innerHTML = "Show Instructions";
        }
    }
    else{
        for(let question of setOfQuestions){
            question.style.display="block";
            this.innerHTML = "Hide Instructions";
        }
    }
}




// Question 3 -----------DONE---------------
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.getElementById("first_name").addEventListener("input",auto);
function auto(){
    if(document.getElementById("first_name").value === "John"){
        document.getElementById("last_name").value = "Doe";
    }
}


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.

function checkpass(){
    if (document.getElementById("password").value == document.getElementById("confirm-password").value)
    {
        document.getElementById('password-alert').value = "Password Matches";
    }
    else
    {
        document.getElementById('password-alert').value = "Password does not match";
    }
}


//Question 6
document.getElementById("radio-reset-button").addEventListener("click",resetRadio);
function resetRadio(){
    var radio = document.form1[favorite_day];
    for(x=0;x<radio.length;x++) {
        document.form1[radioName][x].checked = false
    }
}




//Question 7 





//Question 8





//Question 9 

