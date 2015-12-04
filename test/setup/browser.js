window.mocha.setup('bdd');
window.onload = function() {
    window.mocha.checkLeaks();
    window.mocha.globals([
        'stub',
        'spy',
        'expect'
    ]);
    window.mocha.run();
    require('./setup')(window);
};