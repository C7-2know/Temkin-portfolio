
// ------------------------------------------
filterSelection("all")
function filterSelection(c){
  var x,i;
  x=document.querySelectorAll('.item');
  if(c=='all') c='';
  Array.from(x).forEach(item => {
    removeActiveClass(item,'show')
    if(item.className.indexOf(c)>-1){
      addActiveClass(item,'show')
    }
  })
  
}
function addActiveClass(elem,name){
  var i,arr1,arr2
  arr1=elem.className.split(' ');
  arr2=name.split(' ');
  var ck=arr1;
  for(i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i])==-1){
      elem.className +=' '+arr2[i];
    }
  }
  
}
function removeActiveClass(elem,name){
  var i,arr1,arr2;
  arr1=elem.className.split(' ');
  arr2=name.split(' ');
  for(i=0;i<arr2.length;i++){
    while(arr1.indexOf(arr2[i]) >-1){
      arr1.splice(arr1.indexOf(arr2[i]),1)
    }
  }
  elem.className=arr1.join(' ')
}

var filterBtns=document.querySelector(".button--container");
var btns=filterBtns.getElementsByTagName("button");
for(var i=0;i<btns.length; i++){
  btns[i].addEventListener("click",  
  function(){
    var current=document.getElementsByClassName("active");
    current[0].className=current[0].className.replace(' active','');
    this.className +=" active";
  }
  )
  
}

function showMore(id){
  var x,i;
  x=document.querySelectorAll('.portfolio');
  Array.from(x).forEach(item => {
    addActiveClass(item,'hidden')
  })
  i=document.querySelectorAll(id);
  Array.from(i).forEach(item=>{
    addActiveClass(item,'show')
  })
    
}
function Back(){
  x=document.querySelectorAll('.portfolio');
  Array.from(x).forEach(item => {
    removeActiveClass(item,'hidden')
  })
  i=document.querySelectorAll('.detailPara');
  Array.from(i).forEach(item=>{
    removeActiveClass(item,'show')
  })
}






























