import { protoEl } from "./data.js";
import platforms, {platformColors} from "./data.js";
import { svgToHTMLNode, toHtmlNode } from "./utility.js";

const DROP_DOWN_TEXT = "Selected Item";

const parser = new DOMParser();

const main = document.getElementById('linkCard');
const previewLinkContainer = document.getElementById('previewLinks');

function handleSaveLinks() {
    const choices = [];
    const linkCount = main?.children;
    console.log(linkCount);

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
    main?.querySelectorAll('.platform-text')
}


function addNewField() {    
    const clonedElement = toHtmlNode(protoEl);

    const selectInputChild = clonedElement.querySelector('.selectedOption');
    const selectDropDown = clonedElement.querySelector('.select-dropdown');
    const removeBtn = clonedElement.querySelector('.remove');
    
    removeBtn.addEventListener('click', (e)=>{
        const parent = e.target.parentNode.parentNode;
        parent.remove();
        handleSaveLinks();
        handlePreviewLink();
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

        p.addEventListener('click', handlePreviewLink)
        selectDropDown.appendChild(p)
    }
    
    selectInputChild.addEventListener('click', (e)=>{
        selectInputChild.parentElement.classList.toggle('isOpen')
    })
    
    clonedElement.querySelector('.link-text').addEventListener('input', handlePreviewLink);
    main?.appendChild(clonedElement)
    handlePreviewLink()
}


function initRender(){
    const data = localStorage.getItem('links');
    
    const ls = JSON.parse(data);
    let num = 0;
    while( num < ls.length){
    const clonedElement = toHtmlNode(protoEl);

    const selectInputChild = clonedElement.querySelector('.selectedOption');
    const selectDropDown = clonedElement.querySelector('.select-dropdown');
    const removeBtn = clonedElement.querySelector('.remove');
    removeBtn.addEventListener('click', (e)=>{
        const parent = e.target.parentNode.parentNode
        parent.remove();
        handleSaveLinks();
        handlePreviewLink();
    })
    
    
    const platformText = selectInputChild.querySelector('.platform-text');
        const platformLogo = selectInputChild.querySelector('.platform-logo');

        for (let i=0; i <platforms.length; i++){
            const p = document.createElement('p');
            p.classList.add('select-dropdown-item', 'bg-slate-300', "p-2", "border-b", "border-b-solid", "border-b-2")
            p.textContent = platforms[i].text;
            p.addEventListener('click', (e)=>{
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
        
        const img = document.createElement('img');
        img.src = ls[num].image;
        img.width = 20;
        img.height = 20;
        platformLogo.innerHTML = "";
        platformLogo.appendChild(img);
        
        platformText.textContent = ls[num].platform

        main?.appendChild(clonedElement)
        const linkField = clonedElement.querySelector('.link-text')
        linkField.addEventListener('input', handlePreviewLink);
        linkField.textContent = ls[num].link
        ++num
        selectInputChild.addEventListener('click', (e)=>{
            selectInputChild.parentElement.classList.toggle('isOpen')
        })
    }
    
    handlePreviewLink()
}


async function handlePreviewLink() {
    const data = localStorage.getItem('links');
    
    const ls = JSON.parse(data);
    let num = 0;
    // while( num < ls.length){
    const choices = [];
    const linkElement = main?.children;
    previewLinkContainer.innerHTML = '';

    for(let i = 0; i <ls.length; i++){
        const choiceText = ls[i].platform;
        const choiceImage = ls[i].image;
        const linkText = ls[i].link;
        const choice = {
            platform: choiceText,
            image: choiceImage,
            link: linkText,
        }

        // const doc = parser.parseFromString()

        choices.push(choice);
        
        const svgNodeUntrimmed = await svgToHTMLNode(choiceImage);
        const svgNode = `<svg width="16" height="16"` + svgNodeUntrimmed.slice(5, svgNodeUntrimmed.indexOf('<!--')) + `</svg>`
        let el = `<a href="${choice.link}" class="w-full flex items-center justify-center">
                    <div class="py-4 px-5 text-white fill-white bg-[${platformColors[choices[i].platform]}] flex items-center justify-between rounded-lg w-11/12">
                        <span class="flex items-center gap-2">
                            ${svgNode}
                            <span>${choices[i].platform}</span>
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"/></svg>

                    </div>
                  </a>`
        if(choiceText !== DROP_DOWN_TEXT){
            previewLinkContainer.innerHTML += el
        }
        
    }

}

export {
    addNewField,
    handleSaveLinks,
    initRender
}