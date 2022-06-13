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
    'threaded-ideas':{
        description:'This event, that is, “THREADED IDEAS” focuses on researching the different dimensions and is a platform to bring out the ingenuity and innovation from every participant in the field of chemical engineering. This event is for turning your creative ideas into words and presenting it to the world.',
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
    'technochem':{
        description:'Would you like to challenge your chemistry knowledge? Here’s an opportunity for you to look beyond textual knowledge and achieve academic excellence and increase your awareness of chemical world around them. FIND THE REASONS!! LOSE THE EXCUSES!! GAIN THE RESULTS!!...',
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