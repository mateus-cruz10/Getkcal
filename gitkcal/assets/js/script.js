const form = document.getElementById("form")
form.addEventListener("submit", handleSubmit);

function handleSubmit (event){
  event.preventdefault();

console.log("submit emitted");
};

function handleSubmit (event) {
    

    const gender = getElementById ("gender").value;
    const age = getElementById("age").value;
    const weight = getElementById("weight").value;
    const height = getElementById("height").value;
    const activitylevel = getInputNumberValue("activity_level")
    const tmb = math.round(
        gender === "female"
        ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
        :  (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );
    const maintenance = Math.round (tmb * Number (activitylevel));

    const loseWeight = maintenance-450;
    const gainWeight = maintenance+450;

    const layout = `
    <h2>Aqui está o resultado:</h2>

        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong> ${tmb} </strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${maintenance}</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${loseWeight}</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gainWeight}</strong>.
            </li>
          </ul>
        </div>
    `
    const result = document.getElementById("result");
    result.innerHTML=layout
}
function getSelectedValue (id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

    function getInputNumberValue (id){
        return Number(document.getElementById (id).value);
    }
    