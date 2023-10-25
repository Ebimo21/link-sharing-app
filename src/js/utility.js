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
const i = document.createElement('p')
i.cls

export {
    createElement
}