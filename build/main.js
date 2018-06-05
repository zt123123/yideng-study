SystemJS.import('/build/index_es6.js')
    .then(function (m) {
        $.fn.praise = new m.PraiseButton();
        $.fn.thumb = new m.Thumb();
        console.log($("body").praise.addPraise());
        console.log($("body").praise.addPraise());
        console.log($("body").praise.addPraise());

        console.log($("body").thumb.addPraise());
        console.log($("body").thumb.addPraise());
        console.log($("body").thumb.addPraise());

    });