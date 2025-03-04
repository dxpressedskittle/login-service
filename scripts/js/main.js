let buttons = [
    { 
        id: 'button1', 
        text: 'Button 1', 
        onClick: function() { 
            alert('Button 1 clicked'); 
        } 
    },
    { 
        id: 'button2', 
        text: 'Button 2', 
        onClick: function() { 
            alert('Button 2 clicked'); 
        } 
    },
    { 
        id: 'button3', 
        text: 'Button 3', 
        onClick: function() { 
            alert('Button 3 clicked'); 
        }
    }
];

let initialized = false;

function initializeUI() {
    if (initialized) {
        return;
    };

    initialized = true;

    buttons.forEach(button => {
        let btnElement = document.createElement('button');
        btnElement.id = button.id;
        btnElement.innerText = button.text;
        btnElement.addEventListener('click', button.onClick);
        document.body.appendChild(btnElement);
    });
}

initializeUI();