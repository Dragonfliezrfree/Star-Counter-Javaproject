// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button 
// is clicked.
// change the count-el in the HTML
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count

    
}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
 console.log(count)
}