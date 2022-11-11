const bill_value = document.getElementById("bill_value");
const tip_value = document.getElementById("tip_value");
const number_of_people = document.getElementById("n_of_p_value");
const final_value = document.getElementById("final_value");
const calculate_button = document.getElementById("calculate");

final_value.innerText = "0.00";

function calculate() {
    const bill = bill_value.value;
    const tip = tip_value.value;
    const n_of_p = number_of_people.value;
    const final = (bill * (1 + tip / 100)) / n_of_p;

    final_value.innerText = final
}

calculate_button.addEventListener("click", calculate);




