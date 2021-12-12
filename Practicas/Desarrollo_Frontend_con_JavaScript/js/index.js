'use strict';

import DataService from "./services/DataService.js";

window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.post-list');
    const tweets = DataService.getTweets();
    for (const tweet of tweets) {
        const tweetElement = document.createElement('article');
        tweetElement.innerHTML = `<div class="post">
        <strong class="author">${tweet.author}</strong>
        <p class="message">${tweet.message}</p>
        <time datetime="${tweet.date}">${tweet.date}</time>
    </div>`;
        list.appendChild(tweetElement);
    }

    const loader = document.querySelector('.lds-circle');
    loader.classList.toggle('hidden')
})