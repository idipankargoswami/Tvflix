"use strict";

import { imageBasrURL } from "./api.js";

// movie card

export function createMovieCard(movie) {
  const { poster_path, title, vote_average, release_date, id } = movie;
  const card = document.createElement("div");
  card.classList.add("movie-card");

  let releaseDateFormatted = "Unknown Date";
  if (release_date && typeof release_date === "string") {
    releaseDateFormatted = release_date.split("-")[0];
  }

  card.innerHTML = `
     <figure class="poster-box card-banner">
        <img src="${imageBasrURL}w342${poster_path}" alt="${title}" class="img-cover" loading="lazy">
      </figure>

      <h4 class="title">${title}</h4>

      <div class="meta-list">
        <div class="meta-item">
          <img src="./assets/images/star.png" width="20" height="20" loading="lazy" alt="rating">
          <span class="span">${vote_average.toFixed(1)}</span>
        </div>
        <div class="card-badge">${releaseDateFormatted}</div>
      </div>

      <a href="./detail.html" class="card-btn" title="${title}" onclick="getMovieDetail(${id})"></a>

    `;
  return card;
}
