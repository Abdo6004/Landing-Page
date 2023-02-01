
/**
 * Define Global Variables
 *
*/

//-Assigning the Sections to variable.
let mySections = document.querySelectorAll('section'); // mySections.length
//-Assigning the Nav_bar Ul  to variable.
let myUl= document.getElementById('navbar__list');
// Fragment to cotain li before appended it to our ul
liFragment=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav 
function  makingTheNavBar(){
    for (let i=0;i<mySections.length;i++){
            // Create my li based on the no. of Sections
            let myLi =document.createElement('li');
            liFragment.appendChild(myLi);
            //-Assigning the Section "data-nav" value to list (li)
            let listName =mySections[i].getAttribute('data-nav'); 
            myLi.append(listName);
            // //-Assigning the Sections to variable.
            let myList= document.getElementsByTagName('li');
            // // Scrolling to Section using scrollIntoView
                myLi.addEventListener('click',function moveToSection(){
                mySections[i].scrollIntoView({behavior: "smooth", block:"start", inline: "start"})
            })
    };
    myUl.appendChild(liFragment);
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

//  Adding classes to elements in viewport 
function AddingClasses(){
    document.addEventListener('scroll',function(){
        // Loop over Sections
        for (let i=0;i<mySections.length;i++){
            // Getting the section height
            let boundHeight= mySections[i].getBoundingClientRect().height;
            // Getting the section top distance
            let boundTop= mySections[i].getBoundingClientRect().top;
            // Assining the nav_bar list to a variable
            let myList=document.querySelectorAll('li');
            /*  Adding ["Class",'active'] to the section in viewport 
            close to the upper side of the page, and adding "Class","highlighted"
            to the highlighted list item. 
            */ 
            if(boundTop >-boundHeight*0.25 && boundTop<boundHeight*0.5){
            /*boundTop >0 && boundTop <=boundHeight/2 this adds the class in case the section 
            has top >0 and top less than half the height of the section*/
             // adding active class to the section in viewport
            mySections[i].setAttribute("Class","Active")
             // adding highlighted class to the highlighted list item
            myList[i].classList.add('highlighted');
            } else{
             // Removing active class to the section whic is not in viewport
            mySections[i].removeAttribute('Class')
             // Removing highlighted class from list items if not in viewport
            myList[i].classList.remove('highlighted');
            };
        }
    })
};

    //Calling my Functions  
    makingTheNavBar();
    AddingClasses();




