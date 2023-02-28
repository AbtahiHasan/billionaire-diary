let cardCount = 10;

const catchData = async () => {
    const url = `https://forbes400.onrender.com/api/forbes400?limit=${cardCount}`;
    const response = await fetch(url);
    const billionaires = await response.json();
    printData(billionaires);   

}

const printData = (billionaires) => {
    const cards = document.getElementById("cards");
    billionaires.forEach(billionaire => {
        console.log(billionaire)
            cards.innerHTML += `
            <article class="bg-base-100 p-3 rounded shadow-xl">
            <h2 class="text-2xl text-center my-3">${billionaire.person.name}</h2>
            <div class="card card-side h-[300px]">
                <figure>
                <img class="w-[100%] h-full" src="${billionaire?.person?.squareImage}" alt="Movie" />
                </figure>
                <div class="card-body">
                <h2 class="card-title">${billionaire?.countryOfCitizenship}</h2>
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
    cardCount += 3;
    catchData();
}

