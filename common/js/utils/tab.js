class Tab extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const tab = document.createElement('div');
        tab.setAttribute('class','my-tab');
        tab.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;";
        const style = document.createElement('style');
        style.textContent = `
        .my-tab{
            display: inline-block;
        }
        `
        shadow.appendChild(style);
        shadow.appendChild(tab);

    }
}

customElements.define('user-tab', Tab);