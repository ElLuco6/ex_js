window.onload = ()=>{

//function affichez le perso selon le nombre


/* <div class="perso">
                <img src="img/hidan.jpg" alt="hidan">
                <h3>test perso</h3>
            </div> */

function createPerso(number){
    var somePerso = swagerData[number];
    var perso = document.createElement("div");
    perso.className = "perso";
    perso.id = number+"perso";


    //creation img
    var image =  document.createElement("img");
    image.src= somePerso.image;
    image.alt =somePerso.name;


    //Création titre du perso

    var titre = document.createElement("h3")
    titre.innerHTML = somePerso.name;


    perso.appendChild(image)
    perso.appendChild(titre)
    document.getElementById("persos").appendChild(perso);
}
for (let index = 0; index < swagerData.length; index++) {
    createPerso(index)
    
}


var input = document.getElementsByTagName("input");
var persos =  document.getElementById("persos");
var selection = document.getElementById("selection")
input[0].addEventListener("keyup",recherche);
input[1].addEventListener("mouseup", checkbox);
persos.addEventListener("mouseover", survolPerso);
persos.addEventListener('mouseout', finsurvol);
persos.addEventListener('click', selectionPerso);
selection.addEventListener('click', clickSelection)

function recherche (event){
    var inputValue = event.target.value;
    console.log(inputValue);
    inputValue = inputValue.toLocaleLowerCase();
    
        // input n'est pas vide
        for (let index = 0; index < swagerData.length; index++) {
           var titre = swagerData[index].name;
           titre = titre.toLocaleLowerCase()
            var perso = document.getElementById(index+"perso");
            if(titre.includes(inputValue) == false){
                perso.style.display = "none"
            }else{
                perso.style.display ="inline-block"
            }
           
            
        }
    

}
function checkbox(event){
    var details =  document.getElementById('details')
    if(event.target.checked){
        details.style.display ="none";

    }else{
        details.style.display ="block";
    }
}
function survolPerso(event){
    var elementSurvolee = event.target.parentNode;
    var identifiantPerso= elementSurvolee.id;
    var position;
    if(identifiantPerso =="catalogue"){
        return
    }else if(identifiantPerso.length == 6 ){
        position = identifiantPerso[0]
    }else if(identifiantPerso.length == 7 ){
        position = identifiantPerso[0]+identifiantPerso[1]
    }else{
        return
    }


    var description = swagerData[position].text
    document.getElementById('details').innerHTML = description
   

}
function finsurvol(event){
    document.getElementById('details').innerHTML ="";

}
function selectionPerso(event){
    var perso = event.target.parentNode;
    var select1 =  document.getElementById('selection1');
    var select2 =  document.getElementById('selection2');
    perso.addEventListener('mouseover', survolPerso);
    perso.addEventListener('mouseout', finsurvol)

    var select1Child = select1.childNodes;
    var select2Child = select2.childNodes;

    if(select1Child.length == 1){
        //partie selection 1 vide
        select1.insertBefore(perso, select1Child[0])

    }else if(select2Child.length == 1){
         //partie selection 2 vide
         select2.insertBefore(perso, select2Child[0])
    }else{
        alert("sry, vous avez dèja choisit 2 film !!")
    }
    console.log(select1Child);
}
function clickSelection (event){
    var elementcliquer = event.target;
    var perso = elementcliquer.parentNode;

    var select = perso.parentNode;
    var selectChild = select.childNodes
    
    if(selectChild[0].className == "perso"){
        var copyPerso = selectChild[0];
        select.removeChild(copyPerso);
        document.getElementById("persos").appendChild(copyPerso);
    }
    //console.log(selectChild);
}


}