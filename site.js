function createFootprints() {
    var img, i, top, right;
    for (i = 1; i < 9; i++) {
        top = (i % 2 ? 5 : 30) + ((9 - i) * 5);
        right = i * 60;

        img = document.createElement('img');
        img.className = 'footprint';
        img.setAttribute('src', './images/footprint-right-down.png');
        img.setAttribute('style', 'position: absolute; top: ' + top.toString() + 'px; right: ' + right.toString() + 'px;');

        document.body.appendChild(img);
    }
    for (i = 2; i < 11; i++) {
        top = i * 60;
        right = i % 2 ? '5' : '30';

        img = document.createElement('img');
        img.className = 'footprint';
        img.setAttribute('src', './images/footprint-down.png');
        img.setAttribute('style', 'position: absolute; top: ' + top.toString() + 'px; right: ' + right + 'px;');

        document.body.appendChild(img);
    }
}

var creepyRats = [{
    id: 'rat0',
    top: 0,
    left: 2
}, {
    id: 'rat1',
    top: 6,
    left: 10
}, {
    id: 'rat2',
    top: 11,
    left: 47
}, {
    id: 'rat3',
    top: 36,
    left: 67
}, {
    id: 'rat4',
    top: 4,
    left: 52
}, {
    id: 'rat5',
    top: 39,
    left: 88
}, {
    id: 'rat6',
    top: 17,
    left: 28
}, {
    id: 'rat7',
    top: 67,
    left: 3
}, {
    id: 'rat8',
    top: 54,
    left: 5
}, {
    id: 'rat9',
    top: 78,
    left: 11
}, {
    id: 'rat10',
    top: 50,
    left: 8
}, {
    id: 'rat11',
    top: 44,
    left: 44
}];

var animationIterations = 0;

function animateRats() {
    for (var i = 0; i < creepyRats.length; i++) {
        var creepyRat = creepyRats[i];
        var img = document.createElement('img');
        img.className = 'fat-rat';
        img.setAttribute('src', './images/fat-rat.png');
        img.setAttribute('id', creepyRat.id);
        img.setAttribute('style', 'top: ' + creepyRat.top + '%; left ' + creepyRat.left + '%;');

        document.body.appendChild(img);
    }

    bumpRatPositions();
}

function bumpRatPositions() {
    for (var i = 0; i < creepyRats.length; i++) {
        var creepyRat = creepyRats[i];
        var el = document.getElementById(creepyRat.id);

        if (i % 2) {
            creepyRat.top = creepyRat.top + 1;
        } else {
            creepyRat.top = creepyRat.top + 2;
        }
        creepyRat.left = creepyRat.left + 1;

        el.setAttribute('style', 'top: ' + creepyRat.top + '%; left: ' + creepyRat.left + '%');
    }

    if (animationIterations < 200) {
        animationIterations++;
        setTimeout(bumpRatPositions, 25);
    }
}

createFootprints();
animateRats();