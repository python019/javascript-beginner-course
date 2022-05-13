// JavaScript Arrays


const aniqlash = window.prompt("Raqam tanlang", 1)
const tillar = [["Python", 1995], ["Java", 1998]]


if (aniqlash == 1) {
    console.log("Dasturlash tili " + tillar[0][0]
    + " Ishlab chiqilgan yili " + tillar[0][1])
} else if (aniqlash == 2) {
    console.log("Dasturlash tili " + tillar[1][0]
    + " Ishlab chiqilgan yili " + tillar[1][1])
} else {
    console.log("Bunday ma'lumot topilmadi")
}
