var carId = "model-3"
var mainImage = document.getElementById('mainImage');
var carName = document.getElementById('carName');
var carPrice = document.getElementById('carPrice');
var colorContainer = document.getElementById('colorContainer');
var carSpecs = document.getElementById('carSpecs');
var carExtras = document.getElementById('carExtras');
var hoverImageContainer = document.getElementById('hover-column');
var colorValue='white';



hoverImageContainer.addEventListener('click', changeMainImage);

function changeMainImage(e) {
    if (e.target.id != 'hover-column') {
        
        mainImage.src = e.target.src;
    }
}

colorContainer.addEventListener('click', changeColor);

function changeColor(e) {
    if (e.target.id != 'colorContainer') {
        var car = cars.filter(car => {
            return car.id == carId;
        });
        mainImage.src = car[0].color[e.target.value].img[0];
        hoverImageContainer.innerHTML = "";
        colorValue=e.target.id;
        car[0].color[e.target.value].img.forEach(img => {
            let i = document.createElement("img");
            i.setAttribute("class", 'clickable');
            i.setAttribute("src", img);
            hoverImageContainer.appendChild(i);
        });
    }
}

var modelContainer = document.getElementById('modelContainer');
modelContainer.addEventListener('click', changeCar);

function changeCar(e) {
    if(e.target.nodeName=='P'){
        console.log(e.target.parentNode)
        carId=e.target.parentNode.id;
    }else if (e.target.id != 'modelContainer') {
        console.log(e.target)
    }
    changeCarInfo();
}

var navBar = document.getElementById('navBar');
navBar.addEventListener('click', navBarFunctions);

function navBarFunctions(e) {
    if (e.target.id == 'logo') {
        //To do
    } else if (e.target != 'navBar') {
        carId = e.target.value;
        changeCarInfo();
    }
}

function changeCarInfo() {
    var car = cars.filter(c => {
        return c.id == carId;
    });

    mainImage.src = car[0].color[0].img[0];
    hoverImageContainer.innerHTML = "";
    car[0].color[0].img.forEach(imag => {
        let i = document.createElement("img");
        i.setAttribute("class", 'clickable');
        i.setAttribute("src", imag);
        hoverImageContainer.appendChild(i);
    });
    carName.innerHTML = car[0].name;
    carPrice.innerHTML = car[0].price + "€";
    colorContainer.innerHTML = "";
    car[0].color.forEach((c, index) => {
        let btn = document.createElement("button");
        btn.setAttribute('id', c.id)
        btn.setAttribute("class", 'colorButton clickable');
        btn.setAttribute('value', index);
        btn.setAttribute('style', "background-color:" + c.hex);
        colorContainer.appendChild(btn);
    });
    carSpecs.innerHTML = "";
    car[0].specs.forEach(s => {
        let spec = document.createElement('h3');
        let value = document.createElement('p');
        spec.innerHTML = s.name;
        value.innerHTML = s.value;
        value.setAttribute('class', "specValue")
        carSpecs.appendChild(spec);
        carSpecs.appendChild(value);
    });
    carExtras.innerHTML = "";
    car[0].extras.forEach(extra => {
        let check = document.createElement("input");
        check.setAttribute("type", 'checkbox');
        check.setAttribute("class", 'clickable');
        check.setAttribute("id", extra.name);
        check.setAttribute("name", extra.name);
        check.setAttribute("value", extra.name);
        let lab = document.createElement("label");
        let s = document.createElement('strong');
        s.innerHTML = extra.name;
        lab.setAttribute('for', extra.name);
        lab.appendChild(s);
        lab.innerHTML += ' ' + extra.price + '€';
        carExtras.appendChild(check);
        carExtras.appendChild(lab);
        carExtras.innerHTML += "<br><br>";

    });
}
