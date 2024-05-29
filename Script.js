const slider = document.querySelector("#slider");
const out = document.querySelector("#out");
slider.addEventListener("input", Print_val);

function Print_val()
{   
    let value = slider.value;
    document.querySelector("#out").innerHTML = value;
}

const min_el = document.getElementById("min");
min_el.addEventListener("input", set_min_val);

function set_min_val()
{
    let min_val = min_el.value;
    slider.setAttribute("min", min_val);
}

const max_el = document.getElementById("max");
max_el.addEventListener("input", set_max_val);

function set_max_val()
{
    let max_val = max_el.value;
    slider.setAttribute("max", max_val);
}
