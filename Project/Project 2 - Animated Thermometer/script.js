let tempLoad = () => {
    let thermometer = document.querySelector('span');
    thermometer.innerHTML = `<i class="fas fa-thermometer-empty"></i>`;

    setTimeout(() => {
        thermometer.innerHTML = `<i class="fas fa-thermometer-quarter"></i>`;
        thermometer.style.color = "#f8b627";
    }, 1000);

    setTimeout(() => {
        thermometer.innerHTML = `<i class="fas fa-thermometer-half"></i>`;
    }, 2000);

    setTimeout(() => {
        thermometer.innerHTML = `<i class="fas fa-thermometer-three-quarters"></i>`;
    }, 3000);

    setTimeout(() => {
        thermometer.innerHTML = `<i class="fas fa-thermometer-full"></i>`;
        thermometer.style.color = "#d63031";
    }, 4000);
}

tempLoad();

setInterval(tempLoad, 5000);