let cardCount = 15;

const catchData = async () => {
    const url = "https://forbes400.onrender.com/api/forbes400/getAllBillionaires";
    const response = await fetch(url);
    const billionaires = await response.json();
    printData(billionaires);   

}

const printData = (billionaires) => {
    let billionairesArr = billionaires.slice(0, cardCount);
    const cards = document.getElementById("cards");
    billionairesArr.forEach(billionaire => {
        console.log(billionaire)
            cards.innerHTML += `
            <article class="bg-base-100 p-3 rounded shadow-xl">
            <h2 class="text-2xl text-center my-3">Name</h2>
            <div class="card card-side h-[300px]">
                <figure>
                <img class="w-[100%] h-full" src="./images/img.jpg" alt="Movie" />
                </figure>
                <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <h3>Source: Amazon</h3>
            </article>
            `
    });
    
    
}
window.addEventListener("load", catchData);

const showMoreBtn = document.getElementById("show-more-btn");

showMoreBtn.onclick = () => {
    cardCount += 5;
    catchData();
}

