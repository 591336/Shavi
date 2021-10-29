
function setup() {
    let btnBestill = document.getElementById("bestill");

    btnBestill.addEventListener("click", bestill);

    function bestill() {
        document.getElementById("takk").innerHTML = "Takk for din bestilling!";
    }
}