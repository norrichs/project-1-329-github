// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class TemplateExample extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `<h1>Hello World</h1>
                          <p>This template has been modified by ben norrichs</p>`
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("template-example", TemplateExample)