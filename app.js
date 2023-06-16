const img =document.getElementById('img');
const named =document.getElementById('name');
const designation =document.getElementById('designation');
const matter =document.getElementById('matter');
const prev =document.querySelector('.prev-btn');
const next =document.querySelector('.next-btn');

const review =[
    {
        img:'1.jpg',
        name:'Alphnso',
        designation:'Devoloper',
        matter:`Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Ratione placeat aut omnis praesentium
         porro dolor assumenda ex deleniti cum magni nisi, 
        accusamus aspernatur necessitatibus. Dolore molestiae 
        sint eligendi tenetur dignissimos!`
    }
    ,
    {
        img:'2.jpg',
        name:'Jhon Deo',
        designation:'Ui/Ux Designer',
        matter:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, accusantium
        voluptate minima totam expedita doloribus quas pariatur quod adipisci nesciunt.`
    },

    {
        img:'3.jpg',
        name:'Alphnso',
        designation:'Devoloper',
        matter:`Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Ratione placeat aut omnis ex deleniti cum magni nisi, 
        accusamus aspernatur necessitatibus. Dolore molestiae 
        sint eligendi tenetur dignissimos!`
    },
    {
        img:'4.jpg',
        name:'Loginka',
        designation:'Testing',
        matter:`Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Ratione placeat aut omnis praesentium
         porro dolor assumenda ex deleniti cum magni nisi, 
        accusamus aspernatur necessitatibus. Dolore molestiae 
        sint eligendi tenetur dignissimos!`
    },
    {
        img:'5.jpg',
        name:'Developer',
        designation:'Devoloper',
        matter:`amet consectetur 
         omnis praesentium
         porro dolor assumenda ex deleniti cum magni nisi, 
        accusamus aspernatur necessitatibus. Dolore molestiae 
        sint eligendi tenetur dignissimos!`
    }
    

]
let currentItem = 0;
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);

})

function showPerson(){
 const item = review[currentItem];
 img.src =item.img;
 named.textContent = item.name;
 designation.textContent =item.designation;
 matter.textContent = item.matter

}
next.addEventListener('click',()=>{
    currentItem++;
    if(currentItem > review.length-1){
        currentItem =0;
    }
    showPerson(currentItem);
    
    
})

prev.addEventListener('click',()=>{
    currentItem--;
    if(currentItem < 0){
       currentItem= review.length-1 ;
    }
    showPerson(currentItem);
    
    
})
