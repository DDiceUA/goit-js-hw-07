const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputCheck(){
    if (this.value.trim() === ''){
        nameOutput.textContent = 'Anonymous';
    }
    else{
        nameOutput.textContent = this.value.trim();
    }
}

nameInput.addEventListener('input',inputCheck)