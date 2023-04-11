const data=[
    {
        step:1,
        valid:false,
        content:"<p>content for step 1</p>"
    },
    {
        step:2,
        valid:false,
        content:"<p>content for step 2</p>"
    },
    {
        step:3,
        valid:false,
        content:"<p>content for step 3</p>"
    },
    {
        step:4,
        valid:false,
        content:"<p>content for step 4</p>"
    }
]

let stepHTML="";
for(let i=0;i<data.length;i++){
    stepHTML+=`<div class='item'>
                    <div id="circle-number-${i}">
                        <div class="circle" id="circle-${i}">
                            <span class="number" id="number-${i}">
                                ${data[i].step}
                            </span>
                        </div> 
                    </div>
                    <div class="line ${i===data.length-1?"hide":""}" id="line-${i}"></div>
              
                </div>
                `
}

const progessBarElem1=document.getElementById("progress-bar");
progessBarElem1.innerHTML=stepHTML;

const stepContentElem1=document.getElementById("step-content");
const confirmElem1=document.getElementById("confirm");
let currentStep=0;

const primaryColor="#335bfd";
const invalidColor="red";

function circleHighlight(color,step){
    const circleElem1=document.getElementById("circle-"+step)
    const numberElem1=document.getElementById("number-"+step);
    circleElem1.style.border="4px solid" + color;
    numberElem1.style.color=color;

    
}
//line highlighting
function lineHighlight(color,step){
    const lineElem1=document.getElementById("line-"+step);
    lineElem1.style.backgroundColor=color;
}

//highlighting by default first circle

circleHighlight(primaryColor,currentStep);
stepContentElem1.innerHTML=data[currentStep].content;
const currnetElem1=document.getElementById('circle-number-'+currentStep);
currnetElem1.classList.add("highlight_circle");

function nextStep(){
    const val=confirmElem1.ariaChecked;
    data[currentStep].valid=val;
    if(!data[currentStep].valid){
        circleHighlight(invalidColor,currentStep);
        lineHighlight(invalidColor,currentStep);
    }else{
        circleHighlight(primaryColor,currentStep);
        lineHighlight(primaryColor,currentStep);
    }
    if(currentStep+1===data.length){
        let isValid=data.filter((step)=>!step.valid).length===0;
        if(isValid){
            document.getElementById("container").innerHTML=`<h1>successful</h1>`
        }
        return;
    }
}
const highlightPrevElem1=document.getElementById("circle-number-"+currentStep);
highlightPrevElem1.classList.remove("highlight_circle");
currentStep++;

const highlightCurrElem1=document.getElementById("circle-number-"+currentStep);
highlightCurrElem1.classList.add("highlight_circle");

circleHighlight(primaryColor,currentStep);
stepContentElem1.innerHTML=data[currentStep].content;
confirmElem1.checked=data[currentStep].valid;

function prevStep(){
    if(currentStep===0){
        return;
    }
    const val=confirmElem1.checked;
    data[currentStep].valid=val;
    if(!data[currentStep].valid){
        circleHighlight(invalidColor,currentStep);
    }else{
        circleHighlight(primaryColor,currentStep);
    }

}