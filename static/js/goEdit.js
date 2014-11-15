function PageQuery(q) {
    if(q.length > 1) this.q = q.substring(1, q.length);
    else this.q = null;
    this.keyValuePairs = new Array();
    if(q) {
        for(var i=0; i < this.q.split("&").length; i++) {
            this.keyValuePairs[i] = this.q.split("&")[i];
        }
    }
    this.getKeyValuePairs = function() { return this.keyValuePairs; }
    this.getValue = function(s) {
        for(var j=0; j < this.keyValuePairs.length; j++) {
            if(this.keyValuePairs[j].split("=")[0] == s)
                return this.keyValuePairs[j].split("=")[1];
        }
        return false;
    }
    this.getParameters = function() {
        var a = new Array(this.getLength());
        for(var j=0; j < this.keyValuePairs.length; j++) {
            a[j] = this.keyValuePairs[j].split("=")[0];
        }
        return a;
    }
    this.getLength = function() { return this.keyValuePairs.length; }
}
function queryString(key){
var page = new PageQuery(window.location.search);
return unescape(page.getValue(key));
}
function displayMo(key){
if(queryString(key)=='N')
{
document.getElementById('monthly').style.display =  "none" ;
document.getElementById('tab1').className = "tabOff";
}
else if(queryString(key)=='Y'){
window.scrollTo(0,300);
}
else{
}
}
function displayOne(key){
if(queryString(key)=='N')
{}
else if(queryString(key)=='Y')
{
//alert("block")
document.getElementById('onetime').style.display =  "block" ;
document.getElementById('tab2').className = "tabOn";
window.scrollTo(0,300);
}
}
function displayE(key){
if(queryString(key)=='N')
{}
else if(queryString(key)=='Y')
{
//alert("block")
document.getElementById('tribute').style.display =  "block" ;
document.getElementById('ecards').style.display =  "block" ;
document.getElementById('tab3').className = "tabOn";
window.scrollTo(0,300);
showButtons();
}
}
function displayP(key){
if(queryString(key)=='N')
{}
else if(queryString(key)=='Y')
{
//alert("block")
document.getElementById('tribute').style.display =  "block" ;
document.getElementById('postal').style.display =  "block" ;
document.getElementById('tab3').className = "tabOn";
window.scrollTo(0,300);
showButtons();
}
}
function displayNack(key){
if(queryString(key)=='N')
{}
else if(queryString(key)=='Y')
{
//alert("block")
document.getElementById('tribute').style.display =  "block" ;
document.getElementById('noAck').style.display =  "block" ;
document.getElementById('tab3').className = "tabOn";
window.scrollTo(0,300);
showButtons();
}
}
function displayTrib(key){
if(queryString(key)=='N')
{}
else if(queryString(key)=='Y')
{
//alert("block")
document.getElementById('tribute').style.display =  "block" ;
//document.getElementById('noAck').style.display =  "block" ;
document.getElementById('tab3').className = "tabOn";
window.scrollTo(0,300);
showButtons();
}
}
function goEdit() {
displayMo('mo');
displayOne('one');
displayE('ec');
displayP('pc');
displayNack('na');
displayTrib('tb');
}