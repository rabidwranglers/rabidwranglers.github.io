function createFootprints() {
    var img, i, top, right;
    for (i = 1; i < 7; i++) {
        top = i % 2 ? '5' : '30';
        right = i * 60;

        img = document.createElement('img');
        img.className = 'footprint';
        img.setAttribute('src', './images/footprint-right-down.png');
        img.setAttribute('style', 'position: absolute; top: ' + top + 'px; right: ' + right.toString() + 'px;');

        document.body.appendChild(img);
    }
    for (i = 1; i < 11; i++) {
        top = i * 60;
        right = i % 2 ? '5' : '30';

        img = document.createElement('img');
        img.className = 'footprint';
        img.setAttribute('src', './images/footprint-down.png');
        img.setAttribute('style', 'position: absolute; top: ' + top.toString() + 'px; right: ' + right + 'px;');

        document.body.appendChild(img);
    }
}

createFootprints();