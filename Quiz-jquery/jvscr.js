var cauhoihientai = 0;
var flag = false;
var choilai = false;
var cau1 = {
	cauhoi: "HTML stands for______",
	dapanA:"HyperText Markup Language",
	dapanB:"How To Markup Language",
	dapanC:"HyperText Maskup Language",
	dapanD:"How To Make Love",
	dapandung:"HyperText Markup Language"
}
var cau2 = {
	cauhoi: "Để xoá hẳn File hay Folder ta thực hiện thao tác nào?",
	dapanA:"Ctrl + Delete",
	dapanB:"Tab + Delete",
	dapanC:"Shift + Delete",
	dapanD:"Alt + Delete",
	dapandung:"Shift + Delete"
}
var cau3 = {
	cauhoi: "Số loại ARN trong tế bào là bao nhiêu?",
	dapanA:"2 loại",
	dapanB:"3 loại",
	dapanC:"4 loại",
	dapanD:"5 loại",
	dapandung:"4 loại"
}
var cau4 = {
	cauhoi: "Chất dùng để mang đi đánh ghen (tạt nhau) là gì?",
	dapanA:"Rượu",
	dapanB:"Xăng",
	dapanC:"Axit",
	dapanD:"Dầu",
	dapandung:"Axit"
}
var cau5 = {
	cauhoi: "Tag để xuống dòng trong web?",
	dapanA:"&lt;lb&gt;",
	dapanB:"&lt;br&gt;",
	dapanC:"&lt;break&gt;",
	dapanD:"&lt;hr&gt;",
	dapandung:"&lt;br&gt;"
}
var arrCauHoi = [cau1,cau2,cau3,cau4,cau5];
var giatriSuc = 0;
var widthRoll;
function batdau() {
	widthRoll = $('#rollSuccess').css('width');
	widthRoll = widthRoll.substring(0,widthRoll.length-2);
	widthRoll = parseInt(widthRoll);
	widthRoll = widthRoll/5;
	giatriSuc = 0;
	hienthi();

}
function hienthi()
{
	cauhoihientai=0;
	$('#form').css('visibility','visible');
	$('#batdau').css('visibility','hidden');
	$('#next').css('visibility','hidden');
	$('#rollSuccess').css('visibility','visible');
	$('#hopthongbao').css('visibility','hidden');
	$('#roll').css('width','0');
	// document.getElementById("form").style.visibility = "visible";
	// document.getElementById("batdau").style.visibility = "hidden";
	// document.getElementById("next").style.visibility = "hidden";
	// document.getElementById("rollSuccess").style.visibility = "visible";
	// document.getElementById("roll").style.width = "0%";
	// document.getElementById("hopthongbao").style.visibility = "hidden";
	$('#Cauhoi').html(arrCauHoi[cauhoihientai].cauhoi);
	$('#CauA').html(arrCauHoi[cauhoihientai].dapanA).prepend('A: ');
	$('#CauB').html(arrCauHoi[cauhoihientai].dapanB).prepend('B: ');
	$('#CauC').html(arrCauHoi[cauhoihientai].dapanC).prepend('C: ');
	$('#CauD').html(arrCauHoi[cauhoihientai].dapanD).prepend('D: ');
	// document.getElementById("Cauhoi").innerHTML = arrCauHoi[cauhoihientai].cauhoi;
	// document.getElementById("CauA").innerHTML = "A: " +arrCauHoi[cauhoihientai].dapanA;
	// document.getElementById("CauB").innerHTML = "B: " +arrCauHoi[cauhoihientai].dapanB;
	// document.getElementById("CauC").innerHTML = "C: " +arrCauHoi[cauhoihientai].dapanC;
	// document.getElementById("CauD").innerHTML = "D: " +arrCauHoi[cauhoihientai].dapanD;
	
}
function kiemtradapan(id) {
		// document.getElementById("hopthongbao").style.visibility = "visible";
		id = "#"+id;
		$('#hopthongbao').css('visibility','visible');
		var cautraloi = $(id).html();
		var dapan = cautraloi.substring(3);
		var dapandung = arrCauHoi[cauhoihientai].dapandung;
		// var c = $('#roll').css('width');
		// alert(c)
		if (dapan == dapandung && flag == false) {
			// document.getElementById("iconCheck").src ="http://2.bp.blogspot.com/-yW8sNX2qeIY/T_B5JziJXDI/AAAAAAAAARE/gx6LeFM56yI/s1600/sucess.png";	
			// document.getElementById("infoAnswer").innerHTML = "Chính Xác";
			// document.getElementById("next").style.visibility = "visible";
			$('#iconCheck').attr('src','http://2.bp.blogspot.com/-yW8sNX2qeIY/T_B5JziJXDI/AAAAAAAAARE/gx6LeFM56yI/s1600/sucess.png');
			$('#infoAnswer').html('Chính Xác');
			$('#iconCheck').css('visibility','visible');
			$('#next').css('visibility','visible');
			var c = $('#roll').css('width');
			// var c = document.getElementById("roll").style.width;
			c = c.substring(0,c.length-2);
			c = parseInt(c);
			// alert(c)
			c = c + widthRoll;
			giatriSuc = giatriSuc +20;
			$('#roll').css('width',c);
			$('#roll').html(giatriSuc).append(' % Success...');
			// document.getElementById("roll").style.width = c + "%";
			// document.getElementById("roll").innerHTML = c + "% Success..."
			flag = true;
			cauhoihientai= cauhoihientai+1;
		}
		else if (flag == true)
		{
			
		}
		else
		{
			$('#iconCheck').attr('src',"http://vector.me/files/images/4/3/436768/red_green_ok_not_ok_icons");
			$('#infoAnswer').html(cautraloi).append(' : Sai');
			$('#iconCheck').css('visibility','visible');
			$('#next').css('visibility','visible');
			// document.getElementById("iconCheck").src ="http://vector.me/files/images/4/3/436768/red_green_ok_not_ok_icons";
			// document.getElementById("infoAnswer").innerHTML = cautraloi + " : Sai";
			flag =true;
			cauhoihientai= cauhoihientai+1;
			// document.getElementById("next").style.visibility = "visible";
		}
}
function next() {

		flag = false;
		if (cauhoihientai<=arrCauHoi.length-1) {
			$('#hopthongbao').css('visibility','hidden');
			$('#next').css('visibility','hidden');
			$('#iconCheck').css('visibility','hidden');
			$('#Cauhoi').html(arrCauHoi[cauhoihientai].cauhoi);
			$('#CauA').html(arrCauHoi[cauhoihientai].dapanA).prepend('A: ');
			$('#CauB').html(arrCauHoi[cauhoihientai].dapanB).prepend('B: ');
			$('#CauC').html(arrCauHoi[cauhoihientai].dapanC).prepend('C: ');
			$('#CauD').html(arrCauHoi[cauhoihientai].dapanD).prepend('D: ');
		}
		else
		{
			// var c = document.getElementById("roll").style.width;
			// var c = $('#roll').css('width');
			// c = c.substring(0,c.length-1);
			location.assign("success.html#" +giatriSuc);
			
		}
		
}
var lop =1;
function changeTheme() {
	// body...
		$('#snow').css('background-color','rgba('+(lop*10)+', 9, 56, 0.93)');
		lop++;
	
}