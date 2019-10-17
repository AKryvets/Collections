const ArrayList = {
    List: [],
    length: 0,
    push: function (element) {
        this.List[this.length] = element;
        this.length++;
        return element;
    },
    pop: function () {
        let element = this.List[this.length - 1];
        let a = [];
        for (let i = 0; i < this.length - 1; i++) {
            a[i] = this.List[i];
        }
        this.List = a;
        this.length--;
        return element;
    },
    size: function () {
        return this.length;
    },
    shift: function () {
        const a = [];
        let j = 0;
        for (let i = 1; i < this.length; i++) {
            a[j] = this.List[i];
            j++;
        }
        this.List = a;
        this.length--;
        return this.length;
    },
    unshift: function (element) {
        const a = [];
        a[0] = element;
        let j = 1;
        for (let i = 0; i < this.length; i++) {
            a[j] = this.List[i];
            j++;
        }
        this.List = a;
        this.length++;
        return this.length;
    },
    toString: function () {
        let string = String(this.List[0]);
        for (let i = 1; i < this.length; i++) {
            string += ", " + String(this.List[i]);
        }
        return string;
    },
    sort: function (commit) {
        if (commit) {
            if (typeof commit == "function") {
                for (let i = 0; i < this.length; i++) {
                    for (let j = 0; j < this.length; j++) {
                        if (j == this.length - 1)
                            break;
                        if (commit(this.List[j], this.List[j + 1]) > 0) {
                            let easy = this.List[j + 1];
                            this.List[j + 1] = this.List[j];
                            this.List[j] = easy;
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                for (let j = 0; j < this.length; j++) {
                    if (j == this.length - 1)
                        break;
                    if (String(this.List[j]) > String(this.List[j + 1])) {
                        let easy = this.List[j + 1];
                        this.List[j + 1] = this.List[j];
                        this.List[j] = easy;
                    }
                }
            }
        }
    }
}