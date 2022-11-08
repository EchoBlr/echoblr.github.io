let buttonWho
let buttonWhat

let whomIn 
let whatIn


class LightBox {
    constructor(whom,what){
        this._whom = whom;
        this._what = what;
        }
    getText(){
        switch (whom){
            case "Мама":
                break
            case "Жена":
                break
            case "Сестра":
                break
            case "Папа":
                break
        }
    }
    static getWhom(){
        const possibleWhom = ['Мама','Жена','Сестра', "Папа"]
        return possibleWhom
    }


    static getWhat(){
        const possibleWhat = ["День рожденье","Новый год"]
    }
}

class Switcheroo {
    constructor(){
        //для создания кнопок будет использоваться отдельный класс
    }
}


const addList = (butt) => {
    const handler = document.getElementsByClassName('choicebox')[0];
    handler.style.display = 'flex';
    while(handler.lastElementChild){
        handler.removeChild(handler.lastElementChild)
    }
    const body = butt.currentTarget;
    body.appendChild(handler)
    handler.style.width = "32%";
    
    

    if (butt.currentTarget.id === 'first'){
        const newList = LightBox.getWhom()
        for (i =0; i<newList.length;i++){
            const newElem = document.createElement('div')
            newElem.classList.add('choiceList');
            newElem.style.height = '75px'; 
            newElem.onclick = (()=>{
                document.body.appendChild(handler)
                body.innerHTML = newElem.innerHTML
                
            })
            newElem.innerHTML = newList[i]
            handler.appendChild(newElem)
        } 
    }else if (butt.currentTarget.id === 'second'){
        const bodyRect = butt.currentTarget.getBoundingClientRect()
        handler.style.top = bodyRect.top
        handler.style.left = bodyRect.left
        const newList = LightBox.getWhom()
        for (i =0; i<newList.length;i++){
            const newElem = document.createElement('div')
            newElem.classList.add('choiceList');
            newElem.onclick = (()=>{
                whomIn = newElem.innerHTML
            })
            newElem.innerHTML = newList[i]
            handler.appendChild(newElem)
        }}
    
    //После нажатия на один из вариантов выбора будут отображаться варианты, сбрасываться старые 
}




buttonWho = document.getElementById('first');
buttonWhat = document.getElementById('second');
buttonWho.onclick = addList;
buttonWhat.onclick = addList;

