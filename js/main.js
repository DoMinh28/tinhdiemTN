var diemtb

var hetruong = 1 
function tinhdiem(){
    var toan = document.getElementById("toan").value
    var van = document.getElementById("van").value
    var anh = document.getElementById("anh").value
    var ly = document.getElementById("ly").value
    var hoa = document.getElementById("hoa").value
    var sinh = document.getElementById("sinh").value
    var tb = document.getElementById("tb").value
    var kk = document.getElementById("kk").value
    var uuTien = document.getElementById("uutien").value
    if(hetruong > 1){
     anh = "5"
    }
    if((toan!="")&& (van!="")&&(anh!="")&&(ly!="")&&(hoa!="")&&(sinh!="")&&(tb!="")){
    toan = Number(toan)
    van = Number(van)
    anh = Number(anh)
    ly = Number(ly)
    hoa = Number(hoa)
    sinh = Number(sinh)
    tb = Number(tb)
    kk = Number(kk)
    uuTien = Number(uuTien)
   var diemth = ((ly + hoa + sinh)/3)
   if (hetruong === 1){
    diemtb = (((((((toan+van+anh+diemth)+kk)/4)*7)+(tb*3))/10)+uuTien)
   }else{
    diemtb = (((((((toan+van+diemth)/3)+(kk/4))*7)+(tb*3))/10)+uuTien)
   }
   var diemTbTag = document.getElementById("diem")
   diemTbTag.style.display = "block"
   if(((toan>1)&&(van>1)&&(anh>1)&&(ly>1)&&(hoa>1)&&(sinh>1))&&(diemtb>=5)){
    diemTbTag.textContent = "Điểm TN: "+diemtb.toFixed(2)
   }
   if((toan<=1)||(van<=1)||(anh<=1)||(ly<=1)||(hoa<=1)||(sinh<=1)){
    diemTbTag.textContent = "rớt TN: liệt môn"
   }
   if(diemtb<5){
    var thieudiem = (5-diemtb)
    diemTbTag.textContent = "rớt TN thiếu: "+thieudiem.toFixed(2)
   }
    }
    if(toan===""){
        alert("chưa nhập điểm toán")
    }
    if(van===""){
        alert("chưa nhập điểm văn")
    }
    if(anh===""){
        alert("chưa nhập điểm anh")
    }
    if(ly===""){
        alert("chưa nhập điểm lý")
    }
    if(hoa===""){
        alert("chưa nhập điểm hoá")
    }
    if(sinh===""){
        alert("chưa nhập điểm sinh")
    }
    if(tb===""){
        alert("chưa nhập điểm trung bình")
    }
}
function reset(){ 
    document.getElementById("toan").value = ""
    document.getElementById("van").value = ""
    document.getElementById("anh").value = ""
    document.getElementById("ly").value = ""
    document.getElementById("hoa").value = ""
    document.getElementById("sinh").value = ""
    document.getElementById("tb").value = ""
    document.getElementById("kk").value = ""
    document.getElementById("uutien").value = ""
    document.getElementById("diem").style.display = "none"
}
function gdtx(){
 hetruong = 2
 document.getElementById("span1").textContent = "Sử:"
 document.getElementById("span2").textContent = "Địa:"
 document.getElementById("span3").textContent = "Gdcd:"
 document.getElementById("NN").style.display = "none"
 document.getElementById("toan").value = ""
 document.getElementById("van").value = ""
 document.getElementById("anh").value = ""
 document.getElementById("ly").value = ""
 document.getElementById("hoa").value = ""
 document.getElementById("sinh").value = ""
 document.getElementById("tb").value = ""
 document.getElementById("kk").value = ""
 document.getElementById("uutien").value = ""
 document.getElementById("diem").style.display = "none"
}
function thpt(){
    hetruong = 1
    document.getElementById("span1").textContent = "Lý:"
    document.getElementById("span2").textContent = "Hoá:"
    document.getElementById("span3").textContent = "Sinh:"
    document.getElementById("NN").style.display = "flex"
    document.getElementById("toan").value = ""
    document.getElementById("van").value = ""
    document.getElementById("anh").value = ""
    document.getElementById("ly").value = ""
    document.getElementById("hoa").value = ""
    document.getElementById("sinh").value = ""
    document.getElementById("tb").value = ""
    document.getElementById("kk").value = ""
    document.getElementById("uutien").value = ""
    document.getElementById("diem").style.display = "none"
   }