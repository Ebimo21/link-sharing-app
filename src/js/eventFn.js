import { protoEl } from "./data.js";
import platforms from "./data.js";
import { createElement } from "./utility.js";

const DROP_DOWN_TEXT = "Selected Item";

const main = document.getElementById('linkCard');
console.log(main)



function handleSaveLinks() {
    const choices = [];
    const linkCount = main.children;

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
        
        
    }
    localStorage.setItem('links', JSON.stringify(choices))
    main.querySelectorAll('.platform-text')
}


function addNewField() {
    // const originalElement = document.getElementById('proto');
    const el = document.createElement('div');
    el.classList.add('linkItem');
    el.classList.add('bg-slate-100', 'p-4')
    el.innerHTML = protoEl;

    const clonedElement = el.cloneNode(true);

    const selectInputChild = clonedElement.querySelector('.selectedOption');
    const selectDropDown = clonedElement.querySelector('.select-dropdown');
    const removeBtn = clonedElement.querySelector('.remove');
    clonedElement.id = null
    
    removeBtn.addEventListener('click', (e)=>{
        const parent = e.target.parentNode.parentNode
        parent.remove();
    })

    // const v = main.parentElement.parentElement.querySelector('.link-text')
    // console.log(v )
    // v
    
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

        p.addEventListener('click', handlePreviewLink)
        selectDropDown.appendChild(p)
    }
    
    selectInputChild.addEventListener('click', (e)=>{
        selectInputChild.parentElement.classList.toggle('isOpen')
    })
    
    clonedElement.querySelector('.link-text').addEventListener('input', handlePreviewLink);
    main.appendChild(clonedElement)
    handlePreviewLink()
}


function handlePreviewLink() {
const choices = [];

// const main = document.getElementById('linkCard');
const previewLinkContainer = document.getElementById('previewLinks');

const linkCount = main.children;

previewLinkContainer.innerHTML = ''
for(let i = 0; i <linkCount.length; i++){
    const previewLinkInnerContainer = new createElement('div')
    previewLinkInnerContainer.addClass('flex')
    
    const LinkPreviewComponentItem = new createElement('div');
    const LinkPreviewComponentItemText = new createElement('p');
    const LinkPreviewComponentItemIconContainer = new createElement('span');
    const LinkPreviewComponentItemIcon = new createElement('img');
    LinkPreviewComponentItem.addClass('text-3xl gap-3 text-center text-red-500 flex items-center justify-center');
    
    
    const choiceText = linkCount[i].querySelector('.platform-text').textContent;
    const choiceImage = linkCount[i].querySelector('.platform-logo > img').src;
    const linkText = linkCount[i].querySelector('.link-text').textContent;
    const choice = {
        platform: choiceText,
        image: choiceImage,
        link: linkText,
    }
    LinkPreviewComponentItemIcon.element.src = choiceImage
    LinkPreviewComponentItemIcon.element.width = 20
    LinkPreviewComponentItemIcon.element.height = 20


    if(choiceText !== "DROP_DOWN_TEXT"){
        linkText.textContent
        const linkcontent = main.querySelector('.link-text').textContent
        choices.push(choice);
        LinkPreviewComponentItemText.element.textContent = `${choices[i].platform}`
        LinkPreviewComponentItem.element.appendChild(LinkPreviewComponentItemText.element)
        LinkPreviewComponentItemIconContainer.element.appendChild(LinkPreviewComponentItemIcon.element)
        LinkPreviewComponentItem.element.appendChild(LinkPreviewComponentItemIconContainer.element)
        previewLinkContainer.appendChild(LinkPreviewComponentItem.element)

    }
    
}

// previewLinkContainer.innerHTML = `<h1 class='text-5xl'>${choices[0].platform}</h1>`
    // const linkItems = document.getElementsByClassName('linkItem');


    // for(let x =0; x<linkItems.length; x++){
    //     const linkText = linkItems[x].querySelector('.platform-text')
        
        // if(linkText.textContent !== DROP_DOWN_TEXT){
        //     linkText.textContent
        //     const linkcontent = main.querySelector('.link-text').textContent

        // }
        
    // }

}

export {
    addNewField,
    handleSaveLinks
}