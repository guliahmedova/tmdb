import { v4 as uuid } from "uuid";

export const dropdownMenu = [
  {
    id: uuid(),
    title: "Movies",
    menu: [
      {
        id: uuid(),
        subtitle: "Popular",
        to: "movie",
      },
      {
        id: uuid(),
        subtitle: "Now Playing",
        to: "now-playing",
      },
      {
        id: uuid(),
        subtitle: "Upcoming",
        to: "upcoming",
      },
      {
        id: uuid(),
        subtitle: "Top Rated",
        to: "top-rated",
      },
    ],
  },
  {
    id: uuid(),
    title: "TV Shows",
    menu: [
      {
        id: uuid(),
        subtitle: "Popular",
        to: "tv",
      },
      {
        id: uuid(),
        subtitle: "Airing Today",
        to: "airing-today",
      },
      {
        id: uuid(),
        subtitle: "On TV",
        to: "on-the-air",
      },
      {
        id: uuid(),
        subtitle: "Top Rated",
        to: "top-rated",
      },
    ],
  },
  {
    id: uuid(),
    title: "People",
    menu: [
      {
        id: uuid(),
        subtitle: "Popular People",
        to: "person",
      },
    ],
  },
  {
    id: uuid(),
    title: "More",
    menu: [
      {
        id: uuid(),
        subtitle: "Discussions",
        to: "#",
      },
      {
        id: uuid(),
        subtitle: "Leaderboard",
        to: "#",
      },
      {
        id: uuid(),
        subtitle: "Support",
        to: "#",
      },
      {
        id: uuid(),
        subtitle: "API",
        to: "#",
      },
    ],
  },
];
