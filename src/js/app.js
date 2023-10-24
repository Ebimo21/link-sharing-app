
// function handleCallEvents () {
//     const dropdown = document.getElementsByClassName('select-input');
//     const dropdownEl = document.getElementsByClassName('select-dropdown');;
//     for (let x =0; x<dropdownEl.length; x++){
//         for (let i=0; i <platforms.length; i++){
//             const p = document.createElement('p');
//             p.classList.add('select-dropdown-item', 'bg-slate-50', "p-2", "border-b", "border-b-solid", "border-b-2")
//             p.textContent = platforms[i].text;
//             p.addEventListener('click', (e)=>{
//                 const platformText = dropdownEl[x].parentElement.querySelector('.platform-text')
//                 const platformLogo = dropdownEl[x].parentElement.querySelector('.platform-logo')
//                 platformText.textContent = platforms[i].text
//                 p.parentElement.parentElement.classList.remove('isOpen')
//                 const img = document.createElement('img');
//                 img.src = platforms[i].image;
//                 img.width = 20;
//                 img.height = 20;
//                 platformLogo.innerHTML = "";
//                 platformLogo.appendChild(img);
//             })
//             dropdownEl[x].appendChild(p)
//         }
//     }
    
//     for (let i=0; i <dropdown.length; i++){
//         dropdown[i].addEventListener('click', (e)=>{
//             e.preventDefault();
//             dropdown[i].parentElement.classList.toggle('isOpen');
//         })
//     }
    
// }

const addBtn = document.getElementById('add');
const removeBtn = document.getElementsByClassName('remove');
addBtn.addEventListener('click', ()=>{
    addNewField();
})

// for(let i=0; i<removeBtn.length; i++){
//     removeBtn[i].addEventListener('click', ()=>{
//         const parent = removeBtn[i].parentNode.parentNode
//         parent.remove();
        
//     })
// }

const platforms = [
    {
        text: "Facebook",
        image: "./icons/facebook.svg"
    },
    {
        text: "Google",
        image: "./icons/google.svg"
    },
];


function renderDisplay () {
    const dropdown = document.getElementsByClassName('select-input');
    const dropdownEl = document.getElementsByClassName('select-dropdown');;
    for (let x =0; x<dropdownEl.length; x++){
        for (let i=0; i <platforms.length; i++){
            const p = document.createElement('p');
            p.classList.add('select-dropdown-item', 'bg-slate-300', "p-2", "border-b", "border-b-solid", "border-b-2")
            p.textContent = platforms[i].text;
            p.addEventListener('click', (e)=>{
                const platformText = dropdownEl[x].parentElement.querySelector('.platform-text')
                const platformLogo = dropdownEl[x].parentElement.querySelector('.platform-logo')
                platformText.textContent = platforms[i].text
                p.parentElement.parentElement.classList.remove('isOpen')
                const img = document.createElement('img');
                img.src = platforms[i].image;
                img.width = 20;
                img.height = 20;
                platformLogo.innerHTML = "";
                platformLogo.appendChild(img);
            })
            dropdownEl[x].appendChild(p)
        }
    }
    
    for (let i=0; i <dropdown.length; i++){
        dropdown[i].addEventListener('click', (e)=>{
            e.preventDefault();
            dropdown[i].parentElement.classList.toggle('isOpen');
        })
    }
    
}

function addNewField() {
    const originalElement = document.getElementById('clone');
    const main = document.getElementById('main');
    const clonedElement = originalElement.cloneNode(true);
    
    const selectInputChild = clonedElement.querySelector('.select-input');
    const dropdownItem = clonedElement.querySelectorAll('.select-dropdown-item');
    const selectDropDown = clonedElement.querySelector('.select-dropdown');
    const removeBtn = clonedElement.querySelector('.remove');
    
    removeBtn.addEventListener('click', (e)=>{
        const parent = e.target.parentNode.parentNode
        parent.remove();
    })

    const platformText = selectDropDown.parentElement.querySelector('.platform-text')
    const platformLogo = selectDropDown.parentElement.querySelector('.platform-logo')
    platformText.textContent = "Select Item"
    const img = document.createElement('img');
    img.src = './icons/question-mark.svg';
    img.width = 14;
    img.height = 14;
    platformLogo.innerHTML = "";
    platformLogo.appendChild(img);

    for (let i=0; i <dropdownItem.length; i++){
        dropdownItem[i].addEventListener('click', (e)=>{
            const platformText = selectDropDown.parentElement.querySelector('.platform-text')
            const platformLogo = selectDropDown.parentElement.querySelector('.platform-logo')
            platformText.textContent = platforms[i].text
            dropdownItem[i].parentElement.parentElement.classList.remove('isOpen')
            const img = document.createElement('img');
            img.src = platforms[i].image;
            img.width = 20;
            img.height = 20;
            platformLogo.innerHTML = "";
            platformLogo.appendChild(img);
        })
        // selectDropDown.appendChild(p)
    }

    selectInputChild.addEventListener('click', (e)=>{
        selectInputChild.parentElement.classList.toggle('isOpen')
    })
    
    main.appendChild(clonedElement)
    console.log(selectInputChild)

    // for (let i=0; i <selectInputChild.length; i++){
    //     selectInputChild[i].addEventListener('click', (e)=>{
    //         e.preventDefault();
    //         selectInputChild[i].parentElement.classList.toggle('isOpen');
    //     })
    // }
}

// for (let i=0; i <dropdown.length; i++){
//         selectInputChild.parentElement.classList.toggle('isOpen');
    

//     // Step 2: Find the child element with class "select-input"
//     // const selectInputChild = clonedElement.querySelector('.select-input');

//     // Step 3: Add an event listener to the child element
//     selectInputChild.addEventListener('click', () => {
//         selectInputChild.classList.toggle('isOpen')
//     });

//     // Step 4: Insert the cloned element into the DOM
//     containers.appendChild(clonedElement);
// }
renderDisplay();