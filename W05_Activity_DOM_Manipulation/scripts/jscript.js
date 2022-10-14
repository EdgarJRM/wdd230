const input = document.querySelector("#favchap");
const button = document.querySelector("#BtnAdd");
const list = document.querySelector("#ulList");

button.addEventListener("click", function() {
    
    if (input.value == ""){
        alert ("Please add a chapter from the book of mormon");
    } else{
        let bookMormon = input.value;

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listItem.textContent = bookMormon;
        listItem.appendChild (listBtn);
        listBtn.textContent = " ❌ ";

        list.appendChild(listItem);

        input.value = ""

        listBtn.addEventListener("click",function(){
            list.removeChild(listItem);
        })
        
    }
    input.focus;
})