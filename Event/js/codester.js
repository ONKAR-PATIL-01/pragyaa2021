const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const btnNext = document.querySelector('.nextBtn');
const btnPrev = document.querySelector('.prevBtn');
const cardWidth = cards[0].clientWidth;
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

var counter = 0;
var limiter = cards.length - 3;

var currentEvent = {};

if(isMobile){
    btnNext.classList.add('hidden');
    btnPrev.classList.add('hidden');
}

btnNext.addEventListener('click', () => {
    if(counter < limiter){
        counter++;
    }
    cardContainer.style.transition = "transform 0.4s ease-in-out";
    cardContainer.style.transform = "translateX("+ -cardWidth * counter +"px)";
});

btnPrev.addEventListener('click', () => {
    if(counter >= limiter){
        counter--;
    }
    cardContainer.style.transition = "transform 0.4s ease-in-out";
    cardContainer.style.transform = "translateX("+ -cardWidth * counter +"px)";
});

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
    'code-in-less':{
        description:'This event is based on programming skills of programmer. One of the key aspects of a programmer is to reduce the length of the code. This event gives you an opportunity to mould out your creative ideas in the coding challenge with the drastically increasing power of programming in the battle of “CODE IN LESS”.',
        rules:[
            'The environment will be any 64-bit (Linux, Windows).',
            'No other programming language will be allowed to code other than specified language.',
            'Use of any electronic device will not be entertained and participant will be disqualified if found.',
            'Time limit for each round will be announced on the spot.',
            'Participants must bring their valid College ID cards and the receipt of registration during reporting.',
            'Time slots will be allotted and participants are expected to follow them strictly.',
            'Decision of the event heads shall be considered final and binding to all.',
            'Participants are expected to give their contact details correctly, to inform them about the event and event results.',
            'Rules may be changed without prior intimation.',
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
    'reverse-coding':{
        description:'We have a very unique event for you. “REVERSE CODING” not only test your programming skills but also your ability to handle pressure and deadline. In this event Output along with a set of conditions are already given and the participants have to write the program accordingly.',
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
    'app-idea':{
        description:'Here is a platform where some real time innovators can enjoy. “APP IDEA” does not require any app development or coding skills. All that is needed is an idea using which the participant can build up mock screens depicting the User Interface.',
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
    'code-talk':{
        description:'Coding is the language of the future. This exciting event is bound to bring out your inner coding genius. You have to solve questions ranging in their difficulty level. But do not fret, even if you are an absolute beginner, this event ensures that everyone, no matter what their level is, will get something to solve. Do you have what it takes to survive Codetalk and come out on top?',
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