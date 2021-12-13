export function errorView(message) {
    console.log(message);
    return `<p>${message}</p>`
}

export function adView(ad) {
    return `<article class="ad">
    <img/>
    <div class="ad__info">
        <h1 class="ad__info--title">${ad.title}</h1>
        <p class="ad__info--description">${ad.description}</p>
        <p class="ad__info--price">${ad.price}</p>
        <p class="ad__info--category">${ad.category}</p>
        <p class="ad__info--published">${ad.date}</p>
    </div>
    </article>`
}