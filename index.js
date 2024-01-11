let myLeads = []
// let myLeads = `["www.awesomelead.com"]`

// // String -> Array
// myLeads = JSON.parse(myLeads)

// // Pushing new item to Array
// myLeads.push("www.epiclead.com")

// //Array -> String
// myLeads = JSON.stringify(myLeads)

// console.log(myLeads)


const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')
const tabBtn = document.getElementById('tab-btn')

// Local Storage Demo
// localStorage.setItem("myCat", "Tom")
// console.log(localStorage.getItem("myCat"))

// localStorage.clear()
const leadsFromLocalStorage = localStorage.getItem("myLeads")
console.log(leadsFromLocalStorage)

if( leadsFromLocalStorage )
{
    myLeads = JSON.parse(leadsFromLocalStorage)
    render(myLeads)
}


inputBtn.addEventListener('click', function() {
    // console.log('Button clicked from addEventListener')


    myLeads.push(inputEl.value)

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // console.log(myLeads)
    render(myLeads)


    
    inputEl.value = ""
    inputEl.placeholder = " "
})


deleteBtn.addEventListener('click', function () {
    console.log('Note: Delete button clicked: Local Storage Successfully cleared()')
    myLeads = []
    localStorage.clear()
    render(myLeads)
})


// const tabs = [
//     {url: "https://in.linkedin.com/in/pauras-hulavale-a78427283"},
// ]

tabBtn.addEventListener('click', function() {

    // Fetching current url using Chrome API
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

    // console.log(tabs[0])
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // render(myLeads)
})



function render(leads) {
    
    let listItems = ""
    
    for( let i=0 ; i<leads.length ; i++) {
        // console.log(myLeads[i])
        // ulEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>"
        
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        
        // Template String Notation below ``       
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
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