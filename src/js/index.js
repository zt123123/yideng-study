export class PraiseButton {
    constructor(star = 0) {
        this.star = star;
    }
    addPraise(type = "普通拇指") {
        console.log(`${type}点赞${++this.star}`);
        return this.star;
    }
}

export class Thumb extends PraiseButton {
    constructor(star = 0) {
        super(star);
        this.thumb = "大拇指";
    }
    addPraise() {
        super.addPraise(this.thumb);
        return this.star;
    }
}

let praise = new PraiseButton();
console.log(praise.star);
console.log(praise.addPraise());

let thumb = new Thumb();
console.log(thumb.star);
console.log(thumb.addPraise()); 