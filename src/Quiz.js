import React from "react";
import "./Quiz.css";

export default function Quiz(props) {
  const characters = [
    {
      id: "howl",
      name: "Howl",
      scrambled: "LWOH",
      hint: "🏰 Can you unscramble the name of the wizard who lives here?",
      success:
        "That's right! Howl is a powerful wizard known for his beautiful hair and dramatic personality!",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/896/original/howls-moving-castle.gif?1749652852",
    },
    {
      id: "ponyo",
      name: "Ponyo",
      scrambled: "YNOOP",
      hint: "🐠 Can you unscramble this girl's name?",
      success:
        "That's right! Ponyo is a magical fish girl who dreams of becoming human! The film won Animation of the Year and Outstanding Achievement in Music at the 32nd Japan Academy Prize.",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/782/original/ponyo-icegif-4.gif?1749581311",
    },
    {
      id: "kiki",
      name: "Kiki",
      scrambled: "IKIK",
      hint: "🐈‍⬛Can you guess this character's name?",
      success:
        "Super! Kiki is a young witch who starts her own delivery service! The book has won many awards including the Hans Christian Anderson Award for Writing.",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/900/original/kiki.gif?1749653660",
    },
    {
      id: "arrietty",
      name: "Arrietty",
      scrambled: "YTTEITRA",
      hint: "🏠 Can you unscramble this tiny character's name?",
      success:
        "That's right! Arrietty is a tiny 'borrower' who lives under the floorboards! The film won Animation of the year twice in 2011.",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/897/original/arrietty-ghibli.gif?1749653332",
    },
    {
      id: "totoro",
      name: "Totoro",
      scrambled: "RORTOTO",
      hint: "🐻 Can you unscramble the name of this gentle creature?",
      success:
        "That's right! Totoro is a forest spirit who is befriended by sisters Satsuki and Mei. My Neighbour Totoro, celebrated for its enchanting animation has won numerous awards for best film!",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/906/original/totoro2.gif?1749654760",
    },
    {
      id: "chihiro",
      name: "Chihiro",
      scrambled: "HIROCHI",
      hint: "⽰ What's the name of this girl who helps her parents when they are turned into pigs?",
      success:
        "That's right! In 'Spirited Away' the ghost who helps Chihiro is called No-Face also known as Koanashi in Japanese which translates to face-less. He is a spirit who reacts to emotions and absorbs the personalities of those he consumes. The film won an Academy Award for Animated Feature and is described as the best Ghibli film of all time.",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/902/original/spirited-away2.gif?1749654030",
    },
  ];

  function handleCharacterClick(character) {
    const userAnswer = prompt(character.hint + " " + character.scrambled);

    if (!userAnswer || userAnswer.trim() === "") {
      alert("Sorry that's not quite right, have another go!");
      return;
    }

    if (userAnswer.toLowerCase().trim() === character.name.toLowerCase()) {
      alert(character.success);
    } else {
      alert("Not quite, why don't you have another go!");
    }
  }

  return (
    <div className="card-container">
      <h2>
        Think you know your way around the magical world of Studio Ghibli?
      </h2>
      <h3>Click to unscramble and discover!</h3>

      <div className="row">
        <div className="col-md-4 mt-1">
          <img
            className="pic"
            src={characters[0].image}
            onClick={() => handleCharacterClick(characters[0])}
            alt={characters[0].name}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-md-4 mt-1">
          <img
            className="pic"
            src={characters[1].image}
            onClick={() => handleCharacterClick(characters[1])}
            alt={characters[1].name}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-md-4 mt-1">
          <img
            className="pic"
            src={characters[2].image}
            onClick={() => handleCharacterClick(characters[2])}
            alt={characters[2].name}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="card-container2 mt-4">
        <div className="row">
          <div className="col-md-4 mt-1">
            <img
              className="pic"
              src={characters[3].image}
              onClick={() => handleCharacterClick(characters[3])}
              alt={characters[3].name}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-md-4 mt-1">
            <img
              className="pic"
              src={characters[4].image}
              onClick={() => handleCharacterClick(characters[4])}
              alt={characters[4].name}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-md-4 mt-1">
            <img
              className="pic"
              src={characters[5].image}
              onClick={() => handleCharacterClick(characters[5])}
              alt={characters[5].name}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
