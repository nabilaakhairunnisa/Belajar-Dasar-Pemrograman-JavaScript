class Pengembang {
    constructor (nama) {
        this.nama = nama;
    }
    
    merubah () {
        console.log(`${this.nama} melakukan perubahan`);
    }
}

function bisaMembangunUI (pengembang) {
    return {
        membangunUI: () => {
            console.log(`${pengembang.nama} membangun UI`)
        }
    }
}

function bisaMembangunAPI (pengembang) {
    return {
        membangunAPI: () => {
            console.log(`${pengembang.nama} membangun API`)
        }
    }
}

function bisaMenyebarkanApp (pengembang) {
    return {
        menyebarkanApp: () => {
            console.log(`${pengembang.nama} menyebarkan app`)
        }
    }
}

//...

function membuatFrontEndDev(nama) {
    const pengembang = new Pengembang (nama);
    return Object.assign (pengembang, bisaMembangunUI(pengembang));
}

function membuatBackEndDev(nama) {
    const pengembang = new Pengembang (nama);
    return Object.assign (pengembang, bisaMembangunAPI(pengembang));
}

function membuatDevOps(nama) {
    const pengembang = new Pengembang (nama);
    return Object.assign (pengembang, bisaMenyebarkanApp(pengembang));
}

function membuatFullStackDev(nama) {
    const pengembang = new Pengembang (nama);
    return Object.assign (pengembang, bisaMembangunUI(pengembang), bisaMembangunAPI(pengembang), bisaMenyebarkanApp(pengembang));
}

//...

const frontEndDev = membuatFrontEndDev ("Nabila");
frontEndDev.merubah();
frontEndDev.membangunUI();
console.log(`adalah ${frontEndDev.name} pengembang?` frontEndDev instanceof Pengembang);

const backEndDev = membuatBackEndDev ("Nabila");
frontEndDev.merubah();
frontEndDev.membangunAPI();
console.log(`adalah ${backEndDev.name} pengembang?` backEndDev instanceof Pengembang);

const frontEndDev = membuatFrontEndDev ("Nabila");
frontEndDev.merubah();
frontEndDev.membang();
console.log(`adalah ${frontEndDev.name} pengembang?` frontEndDev instanceof Pengembang);

const fullStackDev = membuatFrontEndDev ("Nabila");
frontEndDev.merubah();
frontEndDev.membangunUI();
console.log(`adalah ${fullStackDev.name} pengembang?` fullStackDev instanceof Pengembang);
