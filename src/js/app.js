
import { protoEl } from './data.js';
import platforms from './data.js';

const addBtn = document.getElementById('add');
addBtn.addEventListener( 'click', addNewField );

function addNewField() {
    // const originalElement = document.getElementById('proto');
    const el = document.createElement('div');
    el.classList.add('bg-slate-100', 'p-4')
    el.innerHTML = protoEl;
    console.log(el)


    const main = document.getElementById('linkCard');
    const clonedElement = el.cloneNode(true);

    
    const selectInputChild = clonedElement.querySelector('.selectedOption');
    const selectDropDown = clonedElement.querySelector('.select-dropdown');
    const removeBtn = clonedElement.querySelector('.remove');
    clonedElement.id = null
    
    removeBtn.addEventListener('click', (e)=>{
        const parent = e.target.parentNode.parentNode
        parent.remove();
    })
    for (let i=0; i <platforms.length; i++){
        const p = document.createElement('p');
        p.classList.add('select-dropdown-item', 'bg-slate-300', "p-2", "border-b", "border-b-solid", "border-b-2")
        p.textContent = platforms[i].text;
        p.addEventListener('click', (e)=>{
            const platformText = selectDropDown.parentElement.querySelector('.platform-text')
            const platformLogo = selectDropDown.parentElement.querySelector('.platform-logo')
            platformText.textContent = platforms[i].text
            p.parentElement.parentElement.classList.remove('isOpen')
            const img = document.createElement('img');
            img.src = platforms[i].image;
            img.width = 20;
            img.height = 20;
            platformLogo.innerHTML = "";
            platformLogo.appendChild(img);
        })
        selectDropDown.appendChild(p)
    }

    selectInputChild.addEventListener('click', (e)=>{
        selectInputChild.parentElement.classList.toggle('isOpen')
    })
    
    main.appendChild(clonedElement)
    console.log(selectInputChild);
}


// renderDisplay();

const saveBtn = document.getElementById('saveBtn')
saveBtn.addEventListener('click', ()=>{
    const choices = [];
    const linkCard = document.getElementById('linkCard')
    const linkCount = linkCard.children;

    for(let i = 0; i <linkCount.length; i++){
        const choiceText = linkCount[i].querySelector('.platform-text').textContent;
        const choiceImage = linkCount[i].querySelector('.platform-logo > img').src;
        const linkText = linkCount[i].querySelector('.link-text').textContent;
        const choice = {
            platform: choiceText,
            image: choiceImage,
            link: linkText,
        }

        choices.push(choice);
        localStorage.setItem('links', JSON.stringify(choices))


    }
    linkCard.querySelectorAll('.platform-text')
})

addNewField();