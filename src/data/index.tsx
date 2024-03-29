import Svg from "@/Icons/Svg";
import { ICollection, IMedia } from "@/types";

export const menuLinks = [
  {
    path: "/",
    icon: <Svg icon="home" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="home" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="home" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="home" color="var(--primary-color)" size={28} />
    ),

    text: "Home",
  },
  {
    path: "/discover",
    icon: <Svg icon="discover" color="var(--secondary-color)" size={20} />,
    mobileIcon: (
      <Svg icon="discover" color="var(--secondary-color)" size={28} />
    ),
    activeIcon: <Svg icon="discover" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="discover" color="var(--primary-color)" size={28} />
    ),

    text: "Discover",
  },
  {
    path: "/soon",
    icon: <Svg icon="clock" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="clock" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="clock" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="clock" color="var(--primary-color)" size={28} />
    ),

    text: "Coming Soon",
  },
];

export const libraryLinks = [
  {
    path: "/favorites",
    icon: <Svg icon="heart" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="heart" color="var(--secondary-color)" size={28} />,

    activeIcon: <Svg icon="heart" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="heart" color="var(--primary-color)" size={28} />
    ),

    text: "Favorites",
  },
  {
    path: "/collection-1",
    icon: <Svg icon="folder" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="folder" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="folder" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="folder" color="var(--primary-color)" size={28} />
    ),

    text: "Collection #1",
  },
  {
    path: "/collection-2",
    icon: <Svg icon="folder" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="folder" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="folder" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="folder" color="var(--primary-color)" size={28} />
    ),

    text: "Collection #2",
  },
];

export const categoryLinks = [
  {
    path: "/movies",
    icon: <Svg icon="movie" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="movie" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="movie" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="movie" color="var(--primary-color)" size={28} />
    ),

    text: "Movies",
  },
  {
    path: "/tvshows",
    icon: <Svg icon="tv" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="tv" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="tv" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: <Svg icon="tv" color="var(--primary-color)" size={28} />,

    text: "TV Shows",
  },
  {
    path: "/anime",
    icon: <Svg icon="play-rect" color="var(--secondary-color)" size={20} />,
    mobileIcon: (
      <Svg icon="play-rect" color="var(--secondary-color)" size={28} />
    ),
    activeIcon: <Svg icon="play-rect" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="play-rect" color="var(--primary-color)" size={28} />
    ),

    text: "Anime",
  },
];

export const generalLinks = [
  {
    path: "/settings",
    icon: <Svg icon="settings" color="var(--secondary-color)" size={20} />,
    mobileIcon: (
      <Svg icon="settings" color="var(--secondary-color)" size={28} />
    ),
    activeIcon: <Svg icon="settings" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="settings" color="var(--primary-color)" size={28} />
    ),

    text: "Settings",
  },
  {
    icon: <Svg icon="logout" color="var(--secondary-color)" size={20} />,
    mobileIcon: <Svg icon="logout" color="var(--secondary-color)" size={28} />,
    activeIcon: <Svg icon="logout" color="var(--primary-color)" size={20} />,
    mobileActiveIcon: (
      <Svg icon="logout" color="var(--primary-color)" size={28} />
    ),

    text: "Logout",
  },
];

export const navLinks = [
  {
    text: "Movies",
    path: "/",
  },
  {
    text: "TV Shows",
    path: "/tvshows",
  },
  {
    text: "Anime",
    path: "/anime",
  },
];

export const heroCarouselData: IMedia[] = [
  {
    _id: "1",
    title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/iNgn9LP0iMuLSnWqolivcY3Y7F6.jpg",
    poster: "",
  },
  {
    _id: "2",
    title: "Thanksgiving", //
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/meRwi0lVzv7cMnLNJKoZY59krMp.jpg",
    poster: "",
  },
  {
    _id: "3",
    title: "The Beekeeper",
    overview:
      "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    releaseDate: "2024",
    runtime: "1h 45m",
    genres: ["Action", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
    poster: "",
  },
  {
    _id: "4",
    title: "Oppenheimer",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    poster: "",
  },
];

export const collectionsData: ICollection[] = [
  {
    _id: "1",
    name: "Must Watch Action",
    movies: [
      {
        _id: "1",
        title: "The Equalizer 3",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/jojfdfuhh8pWVn5G0HmPspv3sja.jpg",
        backdropWithText:
          "https://image.tmdb.org/t/p/original/bQ4mX2lxnpDBnlKkj0nd1TNIJsk.jpg",
        poster: "",
      },
      {
        _id: "2",
        title: "The Bricklayer",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/rsG3b17WzUaMKCgHjMRPNaBlfcM.jpg",
        poster: "",
      },
      {
        _id: "3",
        title: "Dead for a Dollar",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/sfrXFuVWcWpfjrbL8X7aCMCHfrf.jpg",
        poster: "",
      },
      {
        _id: "4",
        title: "The Creator",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/nZQcowL2neIM5sMLiZiaUN0rPf1.jpg",
        poster: "",
      },
      {
        _id: "5",
        title: "Freelance",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/ow5z2yWnSb5J2wQWAgGYbO0nBcw.jpg",
        poster: "",
      },
    ],
  },

  {
    _id: "2",
    name: "Laugh Out Loud Comedies Cache",
    movies: [
      {
        _id: "1",
        title: "Wonka",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/95ldoFNgoYinCn9K4D7JoIHDv4g.jpg",
        poster: "",
      },
      {
        _id: "2",
        title: "Trolls Band Together",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/c6msiFybhohrgaBYxfR5gyDkn6L.jpg",
        poster: "",
      },
      {
        _id: "3",
        title: "The Family Plan",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/2R8VCFxHjcFbMwWepWd9QBH1AyF.jpg",
        poster: "",
      },
      {
        _id: "4",
        title: "Ruby Gillman, Teenage Kraken",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/iu9bgjga2YymekAmUAMqU83IHFZ.jpg",
        poster: "",
      },
      {
        _id: "5",
        title: "Chicken Run",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/aTydnWgZ32m41DnTIb7paXsLBs8.jpg",
        poster: "",
      },
    ],
  },

  {
    _id: "3",
    name: "Heart-Pounding Horror Haven",
    movies: [
      {
        _id: "1",
        title: "Thanksgiving",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/enCrVL80z58zNRF4AhZ9Unq8R4s.jpg",
        poster: "",
      },
      {
        _id: "2",
        title: "The Nun II",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/tzqegi5m05VEFGmUX4Uk9xsSE1P.jpg",
        poster: "",
      },
      {
        _id: "3",
        title: "Night Swim",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/bgkhfC1U9FVgYU0QYf7N6M2ADfH.jpg",
        poster: "",
      },
      {
        _id: "4",
        title: "A Quiet Place Part II",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/tJRSV7UsuLb65svcEASDFmt4k30.jpg",
        poster: "",
      },
      {
        _id: "5",
        title: "The Boogyman",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/bVrKmBSiv1OZHQjRLEke0wOYqaO.jpg",
        poster: "",
      },
    ],
  },
];

export const moviesData: IMedia[] = [
  {
    _id: "1",
    title: "The Equalizer 3",
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/jojfdfuhh8pWVn5G0HmPspv3sja.jpg",
    backdropWithText:
      "https://image.tmdb.org/t/p/original/bQ4mX2lxnpDBnlKkj0nd1TNIJsk.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
  },
  {
    _id: "2",
    title: "The Bricklayer",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/rsG3b17WzUaMKCgHjMRPNaBlfcM.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
  },
  {
    _id: "3",
    title: "Dead for a Dollar",
    overview:
      "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    releaseDate: "2024",
    runtime: "1h 45m",
    genres: ["Action", "Thriller"],
    backdrop:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1AnXfjxFqMsQmUPSvt9YxUJhfFw.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1AnXfjxFqMsQmUPSvt9YxUJhfFw.jpg",
  },
  {
    _id: "4",
    title: "The Creator",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/nZQcowL2neIM5sMLiZiaUN0rPf1.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
  },
  {
    _id: "5",
    title: "Freelance",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/ow5z2yWnSb5J2wQWAgGYbO0nBcw.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
  },
];

export const topRatedMoviesData: IMedia[] = [
  {
    _id: "1",
    title: "Wonka",
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/95ldoFNgoYinCn9K4D7JoIHDv4g.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
  },
  {
    _id: "2",
    title: "Trolls Band Together",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/c6msiFybhohrgaBYxfR5gyDkn6L.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
  },
  {
    _id: "3",
    title: "The Family Plan",
    overview:
      "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    releaseDate: "2024",
    runtime: "1h 45m",
    genres: ["Action", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/2R8VCFxHjcFbMwWepWd9QBH1AyF.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
  },
  {
    _id: "4",
    title: "Ruby Gillman, Teenage Kraken",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/iu9bgjga2YymekAmUAMqU83IHFZ.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8ChIb3WzYAcza1vrXR56v510MWk.jpg",
  },
  {
    _id: "5",
    title: "Chicken Run",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/aTydnWgZ32m41DnTIb7paXsLBs8.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zgBW2eNkN0Ez09GgRaWret90C1T.jpg",
  },
];

export const popularMediaData: IMedia[] = [
  {
    _id: "1",
    title: "Wonka",
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/95ldoFNgoYinCn9K4D7JoIHDv4g.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
  },
  {
    _id: "2",
    title: "Trolls Band Together",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/c6msiFybhohrgaBYxfR5gyDkn6L.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
  },
  {
    _id: "3",
    title: "The Family Plan",
    overview:
      "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    releaseDate: "2024",
    runtime: "1h 45m",
    genres: ["Action", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/2R8VCFxHjcFbMwWepWd9QBH1AyF.jpg",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
  },
];
