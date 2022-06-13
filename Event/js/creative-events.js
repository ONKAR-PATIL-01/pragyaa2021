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
    if(counter >= 1){
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
    'mock-placement':{
        description:'For a job, everyone has to go through interviews. So, we have a special event for undergraduates. If you want to test your abilities in interviews then this event, that is, “MOCK PLACEMENT” is for you where you will not only gain experience but if you perform well you can also win some exciting cash prizes.',
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
    'knowledge-hunt':{
        description:'Once, A and B were stuck in a time vortex where they got to experience history of various centuries and somehow they managed to come back in present. Now in order to know how much knowledge they gained about Indian History in their journey they decided to participate in this event, that is, “KNOWLEDGE HUNT” where your knowledge of History is checked.',
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
    'hunky-brains':{
        description:'Bring your grey cells to the party as PRAGYAA is back again with its flagship quiz. Far from classroom route, this is all about the world of verbal ability & reading comprehension, logical reasoning, quantitative aptitude, etc. Get ready for a roller coaster ride into the intense world of techno quizzing.',
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
    'readathon':{
        description:'"The more that you read, the more things you will know.'+
        'The more that you learn, the more places you’ll go." – Dr. Seuss<br>'+
        'This competition is designed to stimulate, encourage and activate reading on a continuous basis. Do not be daunted if you are not placed, just keep on reading.  It’s one of the most marvelous adventures that you can have. A reader lives a thousand lives before he dies.  The man who never reads lives only one!!!<br>'+
        '<li>Group I – Std. 5th to Std 10th</li>'+
        '<li>Group II – Std. 11th to UGs</li>',
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
    'space-buzz':{
        description:'This is an astro-quiz which tests one’s conceptual ability as well as regular updated about in astronomical and scientific discoveries. Participants with keen knowledge and passion about both the fields will have higher rate of success and a curiosity satisfying experience. NO RESTRICTIONS are provided with the educational streams, anyone from any educational background may participate. Let your curiosity be ready with its battle gear!!',
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
    'junior-scientist':{
        description:'B is very innovative and creative school student. While having conversation with A, A says “Innovation leads to progress” and suggests B to take part in “JUNIOR SCIENTIST” – a state level science exhibition, one of the best events of PRAGYAA which provides students of std. 1st – std. 10th a platform to explore their innovative minds.',
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
    'talking-pen':{
        description:'Blogging refers to writing, photography, and other media that is self-published online. “TALKING PEN” provides an opportunity to the individuals to write diary-style entries which would let them share their contents. Exciting cash prizes are waiting for the most effective and influencing blogger. And don’t worry there are multiple languages from which you can choose to shape your imagination.',
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
    'animation-express':{
        description:'Are you a comic book fan? Do you also like writing them? Then grab a ticket and get on this fun and exciting Express. In this event you have to use your imagination and sketch a “DOODLE” from the given conditions and in next round participants have to make a small comic script using their sketched doodle as the main character in the previous round.',
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
    'be-an-entrepreneur':{
        description:'An entrepreneur is an individual who sets up a new business, bearing most of the risks and enjoying most of the rewards. Entrepreneurs who prove to be successful in taking on the risks of a startup are rewarded with profits, fame and continued growth opportunities. Is your dream to become an entrepreneur? Can you solve the real problems faced by startups? This event gives you an opportunity to present your ideas on how you can solve them and also an experience for the same.',
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
    'vector-art':{
        description:'Our college youth is keen interested in making vector art of famous cricketers, youtubers ,other  famous personalities. If you are one of those, then here’s a platform for you artists to explore and enhance your skills. One with a more clearer, accurate and resemblant vector image can win the event.',
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