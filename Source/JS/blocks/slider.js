var slider = document.getElementById('range-slider');
var input0 = document.getElementById('input-0');
var input1 = document.getElementById('input-1');
const inputs = [input0, input1];

if (slider) {
noUiSlider.create(slider, {
    start: [0, 3000],
    connect: true,
    step: 100,
    range: {
        'min': 0,
        'max': 5000
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

var sliderSet = function (i, value)  {
    let arr = [null, null];
    arr[i] = value;

    slider.noUiSlider.set(arr);
};

inputs.forEach (function (el, index)  {
    el.addEventListener("change", function (e) {
        sliderSet(index, e.currentTarget.value);
    });
});
}