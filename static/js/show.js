function showMoreDiv(el) {
    var e = document.getElementById(el);
    if (e.style.display == 'block') {
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
    }
}
function showMoreDiv2(el,txt) {
    var e = document.getElementById(el);
    var txt = document.getElementById(txt);
		showMoreDiv(el);
		txt.value = "";
}
function showMoreDiv3(el,drp,txt1,txt2) {
    var e = document.getElementById(el);
    var txt1 = document.getElementById(txt1);
    var txt2 = document.getElementById(txt2);
	var drp = document.getElementById(drp);
		showMoreDiv(el);
		drp.value = "XX"
		txt1.value = "";
		txt2.value = "";
}

function switchSection(current){
	var ar = ["noAck", "postal", "ecards"];
	var el = document.getElementById(current);
	for (var i=0; i<ar.length; i++){
		document.getElementById(ar[i]).style.display = "none";
	}
	el.style.display = "block";
}

function showButtons(){
	document.getElementById('buttons').style.display = "block";
}

function switchTab(current,tab){
	var ar = document.getElementById("formBox").getElementsByTagName("form");
	var arTb = document.getElementById("donateTabs").getElementsByTagName("a");
	var el = document.getElementById(current);
	var tb = document.getElementById(tab);
	for (var i=0; i<ar.length; i++){
				ar[i].style.display = "none";
			}
	for (var j=0; j<ar.length; j++){
				arTb[j].className = "tabOff";
			}
	el.style.display = "block";
	tb.className = "tabOn";
}


function toggleCardInfo(){
if (document.getElementById){
if (document.getElementById("check_difAddress").checked == true) {
			document.checkout.BillTitle.disabled = true;
			document.checkout.BillTitle.value = "XX";
			
			document.checkout.BillFirstName.disabled = true;
			document.checkout.BillFirstName.value = "";
			
			document.checkout.BillLastName.disabled = true;
			document.checkout.BillLastName.value = "";
			
			document.checkout.BillAdd1.disabled = true;
			document.checkout.BillAdd1.value = "";
			
			document.checkout.BillAdd2.disabled = true;
			document.checkout.BillAdd2.value = "";
			
			document.checkout.BillApt.disabled = true;
			document.checkout.BillApt.value = "";
			
			document.checkout.BillCity.disabled = true;
			document.checkout.BillCity.value = "";
			
			document.checkout.BillState.disabled = true;
			document.checkout.BillState.value = "XX";
			
			document.checkout.BillZip.disabled = true;
			document.checkout.BillZip.value = "";
			
			document.checkout.BillCountry.disabled = true;
			document.checkout.BillCountry.value = "2";
			
			document.getElementById('diffAddress').className = 'tableInActive';
} else {
			document.checkout.BillTitle.disabled = false;
			document.checkout.BillFirstName.disabled = false;
			document.checkout.BillLastName.disabled = false;
			document.checkout.BillAdd1.disabled = false;
			document.checkout.BillAdd2.disabled = false;
			document.checkout.BillApt.disabled = false;
			document.checkout.BillCity.disabled = false;
			document.checkout.BillState.disabled = false;
			document.checkout.BillZip.disabled = false;
			document.checkout.BillCountry.disabled = false;
			
			document.getElementById('diffAddress').className = 'tableActive';
		}
}
}



$(document).ready(function() {
	$('#chkBoxCompany').click(function() { 
	$('#infoCompany').slideToggle('slow');
	$('#company_name').val(""); 
	});
	
	$('#chkBoxDonor2').click(function() { 
	$('#infoDonor2').slideToggle('slow');
	$('#infoDonor2 input').val(""); 
	$('#infoDonor2 select').val("XX"); 
	});

	$('#chkBoxHonor2').click(function() { 
	$('#infoHonor2').slideToggle('slow');
	//$('#company_name').val(""); 
	});
	
	$('#chkBoxHonor2Pst').click(function() { 
	$('#infoHonor2Pst').slideToggle('slow');
	//$('#company_name').val(""); 
	});
	
	$('#Recp2').click(function() { 
	$('#infoRecp2').slideToggle('slow');
	//$('#company_name').val(""); 
	});
	
});





