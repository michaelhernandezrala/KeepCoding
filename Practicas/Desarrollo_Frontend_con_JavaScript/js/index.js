'use strict';

import DataService from "./services/DataService.js";
import { adView } from "./view.js";

const loadAds = async () => {
    const adsElement = document.querySelector('.home__main--ads');
    const ads = await DataService.getAds();
    console.log(ads);

    for (const ad of ads) {
        const adElement = document.createElement('article')
        const view = adView(ad);
        adElement.innerHTML = view;
        adsElement.appendChild(adElement);
    }
    const loader = document.querySelector('.lds-circle');
    loader.classList.toggle('hidden')
}

window.addEventListener('DOMContentLoaded', loadAds)