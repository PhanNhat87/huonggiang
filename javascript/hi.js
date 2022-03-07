var i = 0;
var vanBan = 'Chúc em một ngày 8/3 thật ý nghĩa, học giỏi, vui tươi, ngập tràn hạnh phúc, lúc nào cũng luôn vui vẻ, xinh đẹp. Mong em ban ngày làm được việc mình thích, đêm về có giấc ngủ ngon, trong lòng có nơi nương tựa em nhé!!! ';
var tocDo = 50;

function typeWriter() {
    if (i < vanBan.length) {
        document.getElementById("hieu_ung_danh_chu").innerHTML += vanBan.charAt(i);
        i++;
        setTimeout(typeWriter, tocDo);
    }
}