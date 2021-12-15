//get all required elements from dom

    // get burger button

    let burgerButton = document.getElementById('burger-button');


    let navBar = document.getElementById('navbar');


// functions to hide or display navbar when burger is clicked

    // display/hide navbar

    const displayNav = () => {
        if (navBar.classList.contains('display-navbar')) {
            navBar.classList.remove('display-navbar');
        } else {
            navBar.classList.add('display-navbar');
        }

        // change button
        
        if (burgerButton.classList.contains('cancel-bar')) {
            burgerButton.classList.remove('cancel-bar');
            console.log('off');
        } else {
            burgerButton.classList.add('cancel-bar');
            console.log('on');
        }
    }

    // change button


    // run functions on click

    burgerButton.addEventListener("click", () => {
        displayNav();
        console.log('clicked')
    });

