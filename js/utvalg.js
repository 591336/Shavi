//@ts-check

function setup() {
    let btnBilder1 = document.getElementById("bildeknapp1");
    let btnBilder2 = document.getElementById("bildeknapp2");
    let imgBilder1 = document.getElementById("bilder1");
    let imgBilder2 = document.getElementById("bilder2");
    let imgBilder3 = document.getElementById("bilder3");
    let imgBilder4 = document.getElementById("bilder4");
    let imgBilder5 = document.getElementById("bilder5");
    let imgBilder6 = document.getElementById("bilder6");


    btnBilder1.addEventListener("click", visBilder1);
    btnBilder2.addEventListener("click", visBilder2);

    function visBilder1() {
        // @ts-ignore
        imgBilder1.style.opacity = 1;
        // @ts-ignore
        imgBilder4.style.opacity = 0;
        // @ts-ignore
        imgBilder2.style.opacity = 1;
        // @ts-ignore
        imgBilder5.style.opacity = 0;
        // @ts-ignore
        imgBilder3.style.opacity = 1;
        // @ts-ignore
        imgBilder6.style.opacity = 0;
    }

    function visBilder2() {
        // @ts-ignore
        imgBilder4.style.opacity = 1;
        // @ts-ignore
        imgBilder1.style.opacity = 0;
        // @ts-ignore
        imgBilder5.style.opacity = 1;
        // @ts-ignore
        imgBilder2.style.opacity = 0;
        // @ts-ignore
        imgBilder6.style.opacity = 1;
        // @ts-ignore
        imgBilder3.style.opacity = 0;
    }

}