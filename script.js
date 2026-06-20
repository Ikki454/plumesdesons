async function loadData() {
    const response = await fetch('data.json');
    const data = await response.json();

    generateCreations(data.creations);
    generateFuturEvents(data.events);
}

function generateCreations(creations) {
    for (let i=0; i < creations.length; i++) {
        const article = creations[i];

        const creationGrid = document.querySelector(".grid_container");

        const linkElement = document.createElement("a");
        linkElement.href = article.link;

        const cellElement = document.createElement("div");
        cellElement.classList.add("grid_cell");

        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        imageElement.alt = article.image_alt;

        const articleElement = document.createElement("div");
        articleElement.classList.add("grid_cell_text");

        const article1 = document.createElement("div");
        const titleElement = document.createElement("h3");
        titleElement.innerText = article.title;

        const article2 = document.createElement("div");
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description;

        const article3 = document.createElement("div");
        article3.classList.add("grid_cell_date_type");

        const dateElement = document.createElement("p");
        dateElement.innerText = article.annee;

        const article4 = document.createElement("div");
        const typeElement = document.createElement("p");
        typeElement.innerText = article.type;

        creationGrid.appendChild(linkElement);
        linkElement.appendChild(cellElement);

        cellElement.appendChild(imageElement);
        cellElement.appendChild(articleElement);

        articleElement.appendChild(article1);
        articleElement.appendChild(article2);
        articleElement.appendChild(article3);

        article1.appendChild(titleElement);
        article2.appendChild(descriptionElement);
        article3.appendChild(dateElement);
        article3.appendChild(article4);
        article4.appendChild(typeElement);
    }
}

function generateFuturEvents(events) {
    if (events.length > 0) {
        for (let i=0; i < events.length; i++) {
            const event = events[i];

            const futurEventsSection = document.querySelector(".future_events_container");

            const eventElement = document.createElement("div");
            eventElement.classList.add("future_events");
            eventElement.classList.add("event" + (i+1));

            const articleElement = document.createElement("div");

            const linkElement = document.createElement("a");
            linkElement.href = event.link;

            const btnElement = document.createElement("button");
            btnElement.innerText = "voir details";

            const titleElement = document.createElement("h3");
            titleElement.innerText = event.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = event.description;

            const article1 = document.createElement("div");
            article1.classList.add("f_e_info");

            const dateElement1 = document.createElement("p");
            dateElement1.innerText = event.jour_mois;

            const dateElement2 = document.createElement("p");
            dateElement2.innerText = event.lieu;

            const dateElement3 = document.createElement("p");
            dateElement3.innerText = event.heure;

            futurEventsSection.appendChild(eventElement);

            eventElement.appendChild(articleElement);
            eventElement.appendChild(linkElement);

            linkElement.appendChild(btnElement);

            articleElement.appendChild(titleElement);
            articleElement.appendChild(descriptionElement);
            articleElement.appendChild(article1);

            article1.appendChild(dateElement1);
            article1.appendChild(dateElement2);
            article1.appendChild(dateElement3);
        }
    } else {
        const futurEventsSection = document.querySelector(".future_events_container");

        const articleElement = document.createElement("div");
        
        const noEventText = document.createElement("p");
        noEventText.innerText = "Aucune représentation à venir pour le moment.";

        futurEventsSection.appendChild(articleElement);
        articleElement.appendChild(noEventText);
    }
}

loadData();