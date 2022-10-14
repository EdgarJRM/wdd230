const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('clic', function() {
    if (input.value = ""){
        aletr ("Please add a chapter from the book of mormon")
    } else if{
        let bookMormon = input.value;

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listItem.textContent = bookMormon;
        listItem.appendChild (listBtn);
        listBtn.textContent = " ❌ "
        


    }
    input.focus;
}