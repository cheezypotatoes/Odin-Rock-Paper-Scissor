const title = document.querySelector(".title")
        const picked_title = document.querySelector(".picked_title")
        const robot_picked = document.querySelector(".robot_picked")
        const start_b = document.querySelector(".start")
        let value_picked;
        const possible_pick = ["rock", "paper", "scissors"]

        function option(pick){
            value_picked = pick;
            picked_title.textContent = `Picked: ${pick}`;
        }

        function start(){
            let randomIndex = Math.floor(Math.random() * possible_pick.length);
            let robot_choice = possible_pick[randomIndex];
            robot_picked.textContent = `Robot Picked: ${robot_choice}`;

            if ((value_picked == "rock" && robot_choice == "paper") || 
                (value_picked == "paper" && robot_choice == "scissors") || 
                (value_picked == "scissors" && robot_choice == "rock")) {
                lose()
            }
            else if ((value_picked == "rock" && robot_choice == "rock") || 
                    (value_picked == "paper" && robot_choice == "paper") || 
                    (value_picked == "scissors" && robot_choice == "scissors")){
                        tie()
                    }
            else{
                win()
            }
        }

        function lose(){
            const buttons = document.querySelectorAll('button'); // Select all buttons
            buttons.forEach(button => {
                button.disabled = true;
                button.style.color = 'red';
                button.style.backgroundColor = 'red';
            });

            title.textContent = 'YOU LOSE'
        }

        function win(){
            const buttons = document.querySelectorAll('button'); // Select all buttons
            buttons.forEach(button => {
                button.disabled = true;
                button.style.color = 'yellow';
                button.style.backgroundColor = 'yellow';
            });

            title.textContent = 'YOU WON'
        }

        function tie(){
            const buttons = document.querySelectorAll('button'); // Select all buttons
            buttons.forEach(button => {
                button.disabled = true;
                button.style.color = 'blue';
                button.style.backgroundColor = 'blue';
                
            });

            title.textContent = 'ITS A TIE'
        }
