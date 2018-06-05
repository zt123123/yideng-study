SystemJS.import('/node_modules/jquery/dist/jquery.min.js')
    .then(function (m) {
        window.$ = m;
    }).then(function () {
        SystemJS.import('/build/index_es6.js')
            .then(function (m) {
                $.fn.PraiseButton = new m.PraiseButton();
                $.fn.Thumb = new m.Thumb();
            });
    });