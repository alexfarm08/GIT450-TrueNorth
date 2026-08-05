// -------------------------
// Current Step
// -------------------------

let currentStep = 0;

const steps = document.querySelectorAll(".step");
const progress = document.querySelectorAll(".progress-step");
const nextBtn = document.getElementById("nextBtn");


// -------------------------
// Show Current Step
// -------------------------

function showStep(step) {

    // Hide all sections
    steps.forEach(section => {
        section.classList.remove("active");
    });

    // Show current section
    steps[step].classList.add("active");


    // Update progress bar

    progress.forEach((item, index) => {

        item.classList.remove("active");
        item.classList.remove("completed");

        if(index < step){
            item.classList.add("completed");
        }

        if(index === step){
            item.classList.add("active");
        }

    });

    // Change button text

    switch(step){

        case 0:
            nextBtn.textContent = "Continue to Payment →";
            break;

        case 1:
            nextBtn.textContent = "Continue to Review →";
            break;

        case 2:
            nextBtn.textContent = "Place Order";
            loadReview();
            break;

        case 3:
            nextBtn.style.display = "none";
            break;

    }

}



// -------------------------
// Next Button
// -------------------------

nextBtn.addEventListener("click", () => {

    if(currentStep < 3){

        currentStep++;

        showStep(currentStep);

    }

});



// -------------------------
// Review Page
// -------------------------

function loadReview(){

    document.getElementById("reviewEmail").textContent =
        document.getElementById("email").value;

        document.getElementById("reviewAddress").textContent =
        document.getElementById("firstName").value + " " +
        document.getElementById("lastName").value + "\n" +
        document.getElementById("address").value + "\n" +
        document.getElementById("city").value + ", " +
        document.getElementById("state").value + " " +
        document.getElementById("zip").value;

    document.getElementById("reviewPayment").textContent =
        "Visa ending in " +
        document.getElementById("cardNum").value.slice(-4);

    const shipping = document.querySelector(
    'input[name="shipping"]:checked');

    let shippingText = "Standard Shipping";

    if(shipping){
        shippingText =
            shipping.parentElement.querySelector("strong").textContent;
    }

    document.getElementById("reviewShipping").textContent = shippingText;
}

    // -------------------------
    // Back Buttons
    // -------------------------

    const backPayment = document.getElementById("backPayment");
    const backReview = document.getElementById("backReview");

    backPayment.addEventListener("click", () => {
        currentStep = 0;
        showStep(currentStep);
    });

    backReview.addEventListener("click", () => {
        currentStep = 1;
        showStep(currentStep);
    });

    showStep(0);