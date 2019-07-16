let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function set() {

    //console.log(elements);

    for (let index = 0; index < elements.length; index++) {
        //console.log(elements[index].getAttribute('id'));
        //console.log(elements[index].value);

        let cssProperty = elements[index].getAttribute('id');
        let cssValue = elements[index].value;

        //console.log(cssProperty, cssValue);

        div.style[cssProperty] = cssValue;
    }
}

document.getElementById('set').addEventListener('click', set);