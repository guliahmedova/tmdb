import { v4 as uuid } from "uuid";

export const dropdownMenu = [
  {
    id: uuid(),
    title: "Movies",
    menu: [
      {
        id: uuid(),
        subtitle: "Popular",
        to: "/filter/popular",
      },
      {
        id: uuid(),
        subtitle: "Now Playing",
        to: "/filter/now_playing",
      },
      {
        id: uuid(),
        subtitle: "Upcoming",
        to: "/filter/upcoming",
      },
      {
        id: uuid(),
        subtitle: "Top Rated",
        to: "/filter/top_rated",
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
        to: "/filter/tv",
      },
      {
        id: uuid(),
        subtitle: "Airing Today",
        to: "/filter/airing_today",
      },
      {
        id: uuid(),
        subtitle: "On TV",
        to: "/filter/on_the_air",
      },
      {
        id: uuid(),
        subtitle: "Top Rated",
        to: "/filter/top_rated",
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
