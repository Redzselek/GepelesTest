var szovegek = [
    "sanyi meg peti mindig buzi",
    "lorem ipsum dolor sit amet",
    "nincs kettő négy nélkül",
    "ki mit veti ágyát úgy alssza álmát",
    "csabi doboz fejű"
];

var rnd = Math.floor(Math.random()*szovegek.length);

document.getElementById("szoveg").innerHTML = szovegek[rnd]

var ido = 0;
var mehet = true;

document.getElementById("bemenet").addEventListener("input", () => {
    if (mehet) {
        mehet = false
        var idozito = setInterval(()=>{
            ido++;
            document.getElementById("ido").innerHTML= ido/10+" mp"
            if (szovegek[rnd] == document.getElementById("bemenet").value) {
                clearInterval(idozito)
                var cpm = Math.round(szovegek[rnd].length/(ido/10)*100)/100;
                document.getElementById("cpm").innerHTML = cpm+" karakter/mp"
                document.getElementById("kesz").style.display = "block"
            }
        },100)
    }

})  

var Szin = () => {
    var beirt = document.getElementById("bemenet").value
    document.getElementById("szoveg").innerHTML = ""
    for (var i = 0; i < szovegek[rnd].length; i++) {
        if (szovegek[rnd][i] == beirt[i]) {
            document.getElementById("szoveg").innerHTML += "<span style='color:green'>" + szovegek[rnd][i] + "</span>"
        } else {
            document.getElementById("szoveg").innerHTML += "<span style='color:red'>" + szovegek[rnd][i] + "</span>"
        }
    }
}
