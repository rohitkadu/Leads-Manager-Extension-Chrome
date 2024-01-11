let myLeads = []

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', function() {
    // console.log('Button clicked from addEventListener')

    myLeads.push(inputEl.value)
    // console.log(myLeads)
    renderList()

    inputEl.value = ""
    inputEl.placeholder = " "
})


function renderList() {
    
    let listItems = ""
    
    for( let i=0 ; i<myLeads.length ; i++) {
        // console.log(myLeads[i])
        // ulEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>"
        
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        
        // Template String Notation below ``       
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        // console.log(listItems)
    }
    ulEl.innerHTML = listItems
}


// function saveLead() {
//     console.log('Button clicked from onclick attribute')
// }