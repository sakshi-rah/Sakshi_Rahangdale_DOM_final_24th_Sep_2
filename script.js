
let registeredUser = null;
let diceRolls = [];
let rollCount = 0;

function showForm() {
    document.getElementById("form-container").style.display = "block";
}

function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username && email) {
        registeredUser = { username, email };
        document.getElementById("form-container").style.display = "none";
        alert("Registration successful!");
    } else {
        alert("Please fill in all fields.");
    }
}

function showRegisteredUser() {
    if (registeredUser) {
        alert(`Username: ${registeredUser.username}\n\nEmail: ${registeredUser.email}`);
    } else {
        alert("Please register first.");
    }
}

function rollDice() {
    if (rollCount <= 3) {
        const result = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(result);
        rollCount++;

        if (rollCount === 3) {
            const sum = diceRolls.reduce((acc, current) => acc + current, 0);
            if (sum > 10) {
                alert("You can now click on the 4th image.");
            } else {
                document.getElementById("message-text").textContent = "Try again after scoring more than 10.";
                document.getElementById("message").style.display = "block";
            }
        } else {
            alert(`You rolled a ${result}`);
        }
    } else {
        alert("You can only roll the dice 3 times.");
    }
}


function generateCoupon() {
    if (registeredUser && rollCount === 3) {
        const coupon = Math.floor(Math.random() * 900000000000) + 100000000000;
        alert(`Congratulations🥳, you've won a coupon! \n Coupon Code: ${coupon}`);
    } else {
        alert("You need fill the form to generate a coupon.");
    }
}
