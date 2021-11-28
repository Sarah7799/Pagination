var table= document.createElement("table");
table.className="table"

var thead=document.createElement("thead");
thead.className="thead";
var tr=document.createElement('tr');

var th1= document.createElement("th");
th1.innerHTML="Id";

var th2= document.createElement("th");
th2.innerHTML='Name';

var th3= document.createElement('th');
th3.innerHTML = 'Email';      
    
tr.append(th1,th2,th3);
thead.append(tr);   
table.append(thead);


var request=new XMLHttpRequest;
request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true);
request.send();
request.onload=function()
{
    var data=JSON.parse(this.response);
    function loaddata(x)
    {
    table.innerHTML=" ";    
    var tbody=document.createElement("tbody");

for (var i =((x-1)*10); i<(x*10) ;i++)
    {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML= data[i].id;
        var td2 = document.createElement('td');
        td2.innerHTML=data[i].name;
        var td3 = document.createElement('td');
        td3.innerHTML=data[i].email;
        tr.append(td1,td2,td3);
        tbody.append(tr);
    }
        table.append(tbody);
        document.body.append(table);
    }    

    var temp=[];
    for(var i =0; i<10; i++)
    {
        var p=document.createElement('button');
        p.innerHTML=i+1;
        temp.push(p);
        document.body.append(p);
    }
    temp.forEach((ele) => {
        ele.onclick=function(){
        loaddata(ele.innerHTML);
        }
    });
}   
