function setClassName (add, remove1, remove2, remove3) {
    textField.classList.add(add);
    textField.classList.remove(remove1);
    textField.classList.remove(remove2);
    textField.classList.remove(remove3);
}

const textField = document.getElementById('text-field');
document.getElementById('text-bold').addEventListener('click', function(){
    textField.classList.toggle('font-bold');
});

document.getElementById('text-italic').addEventListener('click', function(){
    textField.classList.toggle('italic');
});

document.getElementById('text-underline').addEventListener('click', function(){
    textField.classList.toggle('underline');
});

document.getElementById('text-left').addEventListener('click', function(){
    setClassName ('text-left', 'text-center', 'text-right', 'text-justify');
});

document.getElementById('text-center').addEventListener('click', function(){
    setClassName ('text-center', 'text-right', 'text-justify', 'text-left');
});

document.getElementById('text-right').addEventListener('click', function(){
    setClassName ('text-right', 'text-center', 'text-justify', 'text-left');
});

document.getElementById('text-justify').addEventListener('click', function(){
    setClassName ('text-justify', 'text-center', 'text-right', 'text-left');
});

document.getElementById('font-size').addEventListener('change', function(){
    const size = document.getElementById('font-size');
    textField.style.fontSize = size.value + 'px';
});

document.getElementById('font-color').addEventListener('change', function(){
    const color = document.getElementById('font-color');
    const colorValue = color.value
    textField.style.color = colorValue;
});

document.getElementById('text-uppercase').addEventListener('click', function(){
    setClassName('uppercase', 'lowercase', 'capitalize', 'normal-case');
});

document.getElementById('lowercase').addEventListener('click', function(){
    setClassName('lowercase', 'uppercase', 'capitalize', 'normal-case');
});

document.getElementById('capitalize').addEventListener('click', function(){
    setClassName('capitalize', 'lowercase', 'uppercase', 'normal-case');
});

document.getElementById('normal-case').addEventListener('click', function(){
    setClassName('normal-case', 'capitalize', 'lowercase', 'uppercase');
});