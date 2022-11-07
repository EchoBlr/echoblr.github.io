let buttonWho
let buttonWhat

class lightBox {
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

    }


    static getWhat(){
        const possibleWhat = ["День рожденье","Новый год"]
    }
}

buttonWho = document.getElementById('first')
buttonWhat = document.getElementById('second')
buttonWho.addEventListener('click',()=>{buttonWho.style.backgroundColor = 'red'})