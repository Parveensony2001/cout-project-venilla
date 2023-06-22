let cout = 0;
document.getElementById("decrease").onclick = function(){
    cout--;
    document.querySelector(".coutervalue").innerHTML = cout;
    if(cout<0){
        document.querySelector(".coutervalue").style.color = "red";
    }
}
document.getElementById("reset").onclick = function(){
    cout = 0;
    document.querySelector(".coutervalue").innerHTML = cout;
    document.querySelector(".coutervalue").style.color = "black";
}
document.getElementById("increase").onclick = function(){
    cout++;
    document.querySelector(".coutervalue").innerHTML = cout;
    document.querySelector(".coutervalue").style.color = "green";

}