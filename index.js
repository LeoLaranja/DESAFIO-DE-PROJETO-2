
let heroName = "Leonardo Laranja"
let levelHero = 10350

if (levelHero <= 1000) {
    console.log(`O Herói de nome ${heroName} está no nível de Ferro`)
} else if (levelHero > 1000 && levelHero <= 2000) {
    console.log(`O Herói de nome ${heroName} está no nível de Bronze`)
} else if (levelHero > 2000 && levelHero <= 5000) {
    console.log(`O Herói de nome ${heroName} está no nível de Prata`)
} else if (levelHero > 6000 && levelHero <= 7000) {
    console.log(`O Herói de nome ${heroName} está no nível de Ouro`)
} else if (levelHero > 7000 && levelHero <= 8000) {
    console.log(`O Herói de nome ${heroName} está no nível de Platina`)
} else if (levelHero > 8000 && levelHero <= 9000) {
    console.log(`O Herói de nome ${heroName} está no nível de Ascendente`)
} else if (levelHero > 9000 && levelHero <= 10000) {
    console.log(`O Herói de nome ${heroName} está no nível de Imortal`)
} else {
    console.log(`O Herói de nome ${heroName} está no nível de Radiante`)
} 