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
    'tricky-circuits':{
        description:'How good are you with circuits? This event brings forth how good are you in mental calculations. In this event, that is, “TRICKY CIRCUITS” participants have to find out how many bulbs will glow without using pen and paper for calculations. Can you rise up to the challenge? If you win this event then exciting cash prizes are waiting for you…',
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
    'papel-electrica':{
        description:'This event allows you to explore your presentation skills which is an important skill set of any Engineer. Get the thrill of technical paper presentation in this event. Share your technical ideas, research work, knowledge and innovative ideas in this event which is “PAPEL ELECTRICA” with the rest of the world.',
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
    'circuital-dilemma':{
        description:'This exciting event is all about showcasing the Einstein-like logical abilities you have in yourself, with a touch of circuit knowledge. You’ll have to design the best possible circuit for the given logical problem statement by using the given basic circuit elements, ensuring that all the time and other constraints are taken care of.',
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
    'lit-up-here':{
        description:'Quiz gives us an instant idea of how much knowledge we have and how much there is room for gathering it more. Students get to showcase their talent as well as knowledge here. Get ready to lit up here!!!',
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