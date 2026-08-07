// -------------------------
// Current Step
// -------------------------

let currentStep = 0;

const steps = document.querySelectorAll(".step");
const progress = document.querySelectorAll(".progress-step");
const nextBtn = document.getElementById("nextBtn");
const checkout = document.querySelector(".checkout");



// -------------------------
// Show Current Step
// -------------------------

function showStep(step) {

    // Hide all sections
    steps.forEach(s => s.classList.remove("active"));
    steps[step].classList.add("active");

    if(step === 3){
        checkout.style.display = "none";
    }else{
        checkout.style.display = "grid";
    }

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
            nextBtn.style.display = "block";
            nextBtn.textContent = "Continue to Payment →";
            break;

        case 1:
            nextBtn.style.display = "block";
            nextBtn.textContent = "Continue to Review →";
            break;

        case 2:
            nextBtn.style.display = "block";
            nextBtn.textContent = "Place Order";
            loadReview();
            break;

        case 3:

            nextBtn.style.display = "none";

            document.getElementById("customerName").textContent =
            document.getElementById("firstName").value;
            break;

    }

}



// -------------------------
// Next Button
// -------------------------

nextBtn.addEventListener("click", () => {

    if (!validateStep(currentStep)) {
        return;
    }

    if (currentStep < 3) {
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
// Data Validation
// -------------------------

function validateStep(step){

    // SHIPPING PAGE
    if(step === 0){

        const requiredFields = [
            "email",
            "firstName",
            "lastName",
            "address",
            "city",
            "state",
            "zip"
        ];

        for(const id of requiredFields){

            const field = document.getElementById(id);

            if(field.value.trim() === ""){

                alert("Please complete all shipping information.");
                field.style.border = "2px solid #c0392b";
                field.focus();
                return false;

            }

            field.style.border = "";

        }

        // Require shipping method

        if(!document.querySelector('input[name="shipping"]:checked')){

            alert("Please select a shipping method.");

            return false;

        }

    }

    // PAYMENT PAGE
    if(step === 1){

        const requiredFields = [
            "cardNum",
            "expiration",
            "cvv",
            "cardName"
        ];

        for(const id of requiredFields){

            const field = document.getElementById(id);

            if(field.value.trim() === ""){

                alert("Please complete all payment information.");

                field.focus();

                return false;

            }

        }

        // Only require billing address if checkbox is NOT checked

        if(!document.getElementById("billing").checked){

            const billingFields = [
                "billingAddress",
                "billingCity",
                "billingState",
                "billingZip"
            ];

            for(const id of billingFields){

                const field = document.getElementById(id);

                if(field.value.trim() === ""){

                    alert("Please complete your billing address.");

                    field.focus();

                    return false;

                }

            }

        }

    }

    return true;

}

    // -------------------------
    // Back Buttons
    // -------------------------

    const backPayment = document.getElementById("backPayment");
    const backReview = document.getElementById("backReview");
    const backConfirmation = document.getElementById("backConfirmation");

    backPayment.addEventListener("click", () => {
        currentStep = 0;
        showStep(currentStep);
    });

    backReview.addEventListener("click", () => {
        currentStep = 1;
        showStep(currentStep);
    });

    backConfirmation.addEventListener("click", () => {
        currentStep = 2;
        showStep(currentStep);
    });

    showStep(0);