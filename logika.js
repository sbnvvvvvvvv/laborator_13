class Posetitel {
    constructor(imya, familiya, vozrast, khochetKormit) {
        this.imya = imya;
        this.familiya = familiya;
        this.vozrast = vozrast;
        this.khochetKormit = khochetKormit;
    }
}

class Zver {
    constructor(imya, minVozrast, mozhnoKormit) {
        this.imya = imya;
        this.minVozrast = minVozrast;
        this.mozhnoKormit = mozhnoKormit;
    }

    isAccessible(posetitel) {
        return posetitel.vozrast >= this.minVozrast && (this.mozhnoKormit ? posetitel.khochetKormit : true);
    }
}

const zoo = {
    ptitsy: {
        ekzoticheskie: [
            new Zver("Волнистый попугай", 11, true),
            new Zver("Корелла", 13, true)
        ],
        domashnie: [
            new Zver("Утка", 10, true),
            new Zver("Гусь", 10, true)
        ]
    },
    dikieZveri: {
        presmykayushchiesya: [
            new Zver("Ящерица", 16, false),
            new Zver("Змея", 19, true)
        ],
        zemnovodnye: [
            new Zver("Лягушка", 13, false),
            new Zver("Аксолотль", 13, false)
        ]
    },
    ryby: {
        bolshie: [
            new Zver("Акула", 17, false)
        ],
        malenkie: [
            new Zver("Карась", 12, true),
            new Zver("Окунь", 14, true)
        ]
    }
};

function registerPosetitel() {
    const imya = prompt("Введите ваше имя:");
    const familiya = prompt("Введите вашу фамилию:");
    const vozrast = parseInt(prompt("Введите ваш возраст:"), 10);
    const khochetKormit = confirm("Вы хотите покормить животных?");
    const posetitel = new Posetitel(imya, familiya, vozrast, khochetKormit);
    const dostupnyeZveri = [];

    for (const ptitsyType in zoo.ptitsy) {
        for (const zver of zoo.ptitsy[ptitsyType]) {
            if (zver.isAccessible(posetitel)) {
                dostupnyeZveri.push(zver.imya);
            }
        }
    }

    for (const dikieType in zoo.dikieZveri) {
        for (const zver of zoo.dikieZveri[dikieType]) {
            if (zver.isAccessible(posetitel)) {
                dostupnyeZveri.push(zver.imya);
            }
        }
    }

    for (const rybyType in zoo.ryby) {
        for (const zver of zoo.ryby[rybyType]) {
            if (zver.isAccessible(posetitel)) {
                dostupnyeZveri.push(zver.imya);
            }
        }
    }

    return dostupnyeZveri;
}

const dostupnyeZveri = registerPosetitel();
if (dostupnyeZveri.length > 0) {
    document.write("Доступные животные для вас: " + dostupnyeZveri.join(", "));
} else {
    document.write("К сожалению, у вас нет доступа к животным.");
}