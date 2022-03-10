let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let text = '';

for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('is ',text);
        if(buttonText == 'X'){
            buttonText = '*';
            text += buttonText;
            screen.value = text;
        }else if(buttonText == 'C'){
            text = '';
            screen.value = text;
        }else if(buttonText == '='){
            ans = eval(text);
            text = ans;
            screen.value = eval(text);
        }else{
            text += buttonText;
            screen.value = text;
        }
        // else if(buttonText=='Backspace'){
        //     text = text.slice(0,-1);
        //     screen.value = text;
        // }
    })
}