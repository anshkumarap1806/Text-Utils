function change(){
    let btn=  document.getElementById('btn');
    if(document.body.style.backgroundColor != "black"){
    document.body.style.backgroundColor = "black";
    document.body.style.fontColor = "white";
    document.getElementById('btn').innerHTML = "Light";
    // document.getElementsByTagName('body').style.color = "white";
    }
    else{
    document.body.style.backgroundColor = "white";
    document.getElementById('btn').innerHTML = "Dark";
    // ocument.getElementsByTagName('body').style.color = "black";
    }
}