const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('#modal');
const contact_modal = document.querySelector('#contact-modal');
const description = document.querySelector('#description');
const rule_list = document.querySelector('#rule-list');
const close = document.querySelector('.btn-close');
const contact = document.querySelector('.btn-contact');
const contact_close = document.querySelector('.btn-contact-close');
const contact_1 = document.querySelector('#contact-name-1');
const contact_no_1 = document.querySelector('#contact-number-1');
const contact_2 = document.querySelector('#contact-name-2');
const contact_no_2 = document.querySelector('#contact-number-2');
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


var currentEvent = {};


cardContainer.addEventListener('click', (event) => {
    const target = event.target.id;
    if(target)
    {
        currentEvent = events[target];
        description.innerHTML = currentEvent.description;
        
        currentEvent.rules.forEach((rule)=>{
            var node = document.createElement("li");
            var textnode = document.createTextNode('- '+rule); 
            node.appendChild(textnode);
            node.classList.add('text-gray-200');
            rule_list.appendChild(node);
        });
        
        modal.classList.remove('hidden');
        
    }
});

close.addEventListener('click', () => {
    modal.classList.remove('animate__rollIn');
    modal.classList.add('animate__rollOut');
    contact_modal.classList.add('hidden');
    setTimeout(()=>{
        modal.classList.add('hidden');
        modal.classList.remove('animate__rollOut');
        modal.classList.add('animate__rollIn');
        rule_list.innerHTML = '';
    }, 1000);
});

contact.addEventListener('click', () => {
    contact_1.innerHTML = currentEvent.contact[0].name;
    contact_no_1.innerHTML = currentEvent.contact[0].number;
    contact_2.innerHTML = currentEvent.contact[1].name;
    contact_no_2.innerHTML = currentEvent.contact[1].number;
    contact_modal.classList.remove('hidden');
});

contact_close.addEventListener('click', () => {
    contact_modal.classList.remove('animate__zoomIn');
    contact_modal.classList.add('animate__zoomOut');
    setTimeout(()=>{
        contact_modal.classList.add('hidden');
        contact_modal.classList.remove('animate__zoomOut');
        contact_modal.classList.add('animate__zoomIn');
    }, 1000);
});

const events = {
    'face-the-nation':{
        description:'This is an online event in which you have an opportunity to tackle the problems which our country is facing. Due to drastic changes taking place continuously, our nation is facing very serious problems and being the youth of this nation, it is our duty to find solutions of these problems. This event gives you an opportunity to present your ideas for solving these problems.',
        rules:[
            
        ],
        contact:[
            {
                name:'contact name',
                number:'contact number'
            }, 
            {
                name:'contact name2',
                number:'contact number2'
            }
        ]
    },
    'house-of-mini':{
        description:'Lights… Camera… Action! Action speaks louder than words. This event gives you and your team an opportunity to make a mini-version of a film on the given topics. A beautiful script, great acting, creativity, etc. are fundamentals of a film. Can you and your team rise to the challenge? Win this event and get some exciting cash prizes.',
        rules:[
            
        ],
        contact:[
            {
                name:'contact name',
                number:'contact number'
            }, 
            {
                name:'contact name2',
                number:'contact number2'
            }
        ]
    },

}