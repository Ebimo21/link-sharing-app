const parser = new DOMParser();

class createElement {
    constructor(elementType){
        this.element = document.createElement(elementType)
    }

    addClass(classNameString) {
        const className = classNameString.split(' ')
        this.element.classList.add(...className)
        return this
    } 
}


function toHtmlNode(htmlString){
    const doc = parser.parseFromString(htmlString, 'text/html');
    const node = doc.body.firstChild
    return node
}

async function svgToHTMLNode(svgPath){
    try {
        const response = await fetch(svgPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status} ${response.statusText}`);
        }
        const svgData = await response.text();
        return svgData;
      } catch (error) {
        console.error("Error loading SVG:", error);
        return null;
      }
}

export {
    createElement,
    toHtmlNode,
    svgToHTMLNode
}