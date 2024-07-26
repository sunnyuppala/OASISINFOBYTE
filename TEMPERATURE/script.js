function a()
{
let aa=document.getElementById("rr");
const t=document.querySelector("select");
const d=document.getElementById("result");
const data=document.getElementById("validation");
const ss=(aa.value);
let e=isnumber(ss);
if(e)
{
    if(t.value=='f')
        {
            const l=((aa.value)*(9/5)+32);
            d.value=l.toFixed(2);
        }
        else {
            const p=(((aa.value)-32)*(5/9));
            if(p==0)
            {
                d.value='0';
            }
            d.value=p.toFixed(2);
        }
}
else{
    
    data.textContent="Please enter the numbericals!";
}


}
function isnumber(value)
{
    return !isNaN(value) && value !== '';
}