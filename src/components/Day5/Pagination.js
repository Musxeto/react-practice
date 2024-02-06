import React, { useState, useEffect } from 'react';

function Pagination() {
  const totalItems = 100;
  const itemsPerPage = 10;

  
  const animeCharacters = [
    'Naruto Uzumaki',
    'Sasuke Uchiha',
    'Goku',
    'Vegeta',
    'Monkey D. Luffy',
    'Ichigo Kurosaki',
    'Edward Elric',
    'Eren Yeager',
    'Light Yagami',
    'Lelouch Lamperouge',
    'Saitama',
    'Gon Freecss',
    'Killua Zoldyck',
    'Tanjiro Kamado',
    'Nezuko Kamado',
    'Inuyasha',
    'Kagome Higurashi',
    'Sesshomaru',
    'Astolfo',
    'Levi Ackerman',
    'Mikasa Ackerman',
    'Armin Arlert',
    'Erwin Smith',
    'Maka Albarn',
    'Soul Eater Evans',
    'Monkey D. Dragon',
    'Roronoa Zoro',
    'Sanji Vinsmoke',
    'Franky',
    'Brook',
    'Robin Nico',
    'Usopp',
    'Tony Tony Chopper',
    'Boa Hancock',
    'Monkey D. Garp',
    'Portgas D. Ace',
    'Sabo',
    'Trafalgar D. Water Law',
    'Rukia Kuchiki',
    'Renji Abarai',
    'Byakuya Kuchiki',
    'Kisuke Urahara',
    'Toshiro Hitsugaya',
    'Kenpachi Zaraki',
    'Kurama',
    'Hiei',
    'Yusuke Urameshi',
    'Kurapika',
    'Guts',
    'Griffith',
    'Casca',
    'Jotaro Kujo',
    'Joseph Joestar',
    'Dio Brando',
    'Giorno Giovanna',
    'Josuke Higashikata',
    'Jonathan Joestar',
    'Gon Freecss',
    'Killua Zoldyck',
    'Meruem',
    'Komugi',
    'Hisoka Morow',
    'Gon Freecss',
    'Killua Zoldyck',
    'Guts',
    'Griffith',
    'Casca',
    'Jotaro Kujo',
    'Joseph Joestar',
    'Dio Brando',
    'Giorno Giovanna',
    'Josuke Higashikata',
    'Jonathan Joestar',
    'Edward Newgate',
    'Charlotte Katakuri',
    'Roronoa Zoro',
    'Sanji Vinsmoke',
    'Trafalgar Law',
    'Kaido',
    'Akainu',
    'Monkey D. Garp',
    'Gol D. Roger',
    'Shanks',
    'Sabo',
    'Edward Teach (Blackbeard)',
    'Nami',
    'Usopp',
    'Tony Tony Chopper',
    'Brook',
    'Jinbe',
    'Nico Robin',
    'Franky',
    'Boa Hancock',
    'Buggy',
    'Nico Robin',
    'Vinsmoke Reiju',
    'Kizaru',
    'Aokiji',
    'Crocodile',
    'Nefertari Vivi',
    'Koala',
    'Fujitora',
    'Donquixote Doflamingo',
    'Katakuri',
    'Charlotte Linlin (Big Mom)',
    'Hawk-Eye Mihawk',
    'Coby',
    'Bartolomeo',
    'Basil Hawkins',
    'Scratchmen Apoo',
    'X Drake',
    'Kozuki Oden',
    'Yamato',
    'Kanjuro',
    'Kinemon',
    'Raizo',
    'Kiku',
    'Ashura Doji',
    'Denjiro',
    'Izuku Midoriya',
    'All Might',
    'Katsuki Bakugo',
    'Shoto Todoroki',
    'Ochaco Uraraka',
    'Tenya Iida',
    'Tsuyu Asui',
    'Eijiro Kirishima',
    'Momo Yaoyorozu',
    'Fumikage Tokoyami',
    'Shota Aizawa',
    'Hawks',
    'Tomura Shigaraki',
    'Endeavor',
    'Stain',
    'Mirio Togata',
    'Nejire Hado',
    'Tamaki Amajiki',
    'Mina Ashido',
    'Koji Koda',
    'Mezo Shoji',
    'Kyoka Jiro',
    'Denki Kaminari',
    'Hanta Sero',
    'Rikido Sato',
    'Toru Hagakure',
    'Kosei Tsuburaba',
    'Nagamasa Mora',
    'Jurota Shishida',
    'Pony Tsunotori',
    'Tetsutetsu Tetsutetsu',
    'Ibara Shiozaki',
    'Juzo Honenuki',
    'Setsuna Tokage',
    'Kinoko Komori',
    'Yui Kodai',
    'Mashirao Ojiro',
    'Kojiro Bondo',
    'Ryuko Tatsuma',
    'Sorahiko Torino',
    'Inko Midoriya',
    'Gran Torino',
    'Recovery Girl',
    'Sir Nighteye',
    'Eri',
    'Gentle Criminal',
    'La Brava',
    'Fat Gum',
    'Bubble Girl',
    'Cementoss',
    'Midnight',
    'Snipe',
    'Vlad King',
    'Present Mic',
    'Eraser Head',
    'Power Loader',
    'Mt. Lady',
    'Kamui Woods',
    'Edgeshot',
    'Best Jeanist',
    'Gang Orca',
    'Hawks',
    'Endeavor',
    'All For One',
    'Nomu',
    'Mitsuki Bakugo',
    'Inko Midoriya',
    'Kyotoku Jiro',
    'Mitsuki Togata',
    'Sekijiro Kan',
    'Nemuri Kayama',
    'Yoroi Musha',
    'Kurogiri',
    'Overhaul',
    'Magne',
    'Twice',
    'Mr. Compress',
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < 1) {
      setCurrentPage(1);
    } else if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    
    const pageItems = animeCharacters.slice(startIndex, endIndex);

    setCurrentItems(pageItems);
  }, [currentPage, animeCharacters]); // Update the effect when currentPage or animeCharacters change

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h1>Day 5 Pagination!</h1>
      <h2>Page Number: {currentPage}</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button className="button-funny" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          className="button-funny"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
