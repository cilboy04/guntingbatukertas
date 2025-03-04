class Mulai {
    constructor() {
        this.namaPemain = "Kamu"
        this.namaBot = "Acilbot"
        this.pilihanPemain;
        this.botOpsi;
        this.menang = ""
    }

    get getBotOpsi() {
        return this.botOpsi;
    }

    set setBotOpsi(opsi) {
        this.botOpsi = opsi;
    }

    get getPilihanPemain() {
        return this.pilihanPemain
    }

    set setPilihanPemain (option){
        this.pilihanPemain = option;
    }

    botBrain() {
        const opsi = ["✌️", "✊", "🖐️"];
        const bot = opsi[Math.floor(Math.random() * opsi.length)];
        return bot;
    }

    perhitunganKemenangan() { 
        if (this.botOpsi == "🖐️" && this.pilihanPemain == "✌️"){
            return this.menang = `${this.namaPemain} MENANG, ${this.namaBot} KALAH`;
        }else if(this.botOpsi == "🖐️" && this.pilihanPemain == "✊"){
            return this.menang = `${this.namaBot} MENANG, ${this.namaPemain} KALAH`;
        }else if(this.botOpsi == "✌️" && this.pilihanPemain == "✊"){
            return this.menang = `${this.namaPemain} MENANG, ${this.namaBot} KALAH`;
        }else if(this.botOpsi == "✌️" && this.pilihanPemain == "🖐️"){
            return this.menang = `${this.namaBot} MENANG, ${this.namaPemain} KALAH`;
        }else if(this.botOpsi == "✊" && this.pilihanPemain == "🖐️"){
            return this.menang = `${this.namaPemain} MENANG , ${this.namaBot} KALAH`;
        }else if(this.botOpsi == "✊" && this.pilihanPemain == "✌️"){
            return this.menang = `${this.namaBot} MENANG, ${this.namaPemain} KALAH`;
        }else {
            return this.menang = "SERI, GAK ADA YANG MENANG🤪"
        }
    }

}

function klikOpsi(params) {
    const mulai = new Mulai();
    mulai.setPilihanPemain = params;
    mulai.setBotOpsi = mulai.botBrain();

    const inGame = document.getElementById("inGame");
    const hasil = document.getElementById("hasil");

    inGame.textContent = "..."
    hasil.textContent = "..."
    setTimeout(() =>{
        inGame.textContent = `${mulai.getPilihanPemain}  VS  ${mulai.getBotOpsi}`;
        hasil.textContent = mulai.perhitunganKemenangan();
    },1500);

    }