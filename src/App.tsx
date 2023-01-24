import { useState, useEffect, useCallback, KeyboardEvent } from "react";
import HangmangDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver/";
import { Container } from "./styles/styles";

const words = [
  "Betina",
  "coisa",
  "casa",
  "tempo",
  "ano",
  "dia",
  "vez",
  "homem",
  "senhor",
  "senhora",
  "moço",
  "moça",
  "bom",
  "grande",
  "melhor",
  "pior",
  "certo",
  "último",
  "próprio",
  "ser",
  "ir",
  "estar",
  "ter",
  "haver",
  "fazer",
  "dar",
  "ficar",
  "poder",
  "ver",
  "não",
  "mais",
  "muito",
  "já",
  "quando",
  "mesmo",
  "depois",
  "ainda",
];
const generateRamdomWord = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const notBelongingLetters = (letter: string) =>
    !wordToGuess.toLocaleLowerCase().includes(letter.toLowerCase());
  const belongingLetters = (letter: string) =>
    wordToGuess.toLocaleLowerCase().includes(letter.toLowerCase());
  const incorrectLetters = guessedLetters.filter(notBelongingLetters);
  const correctLetters = guessedLetters.filter(belongingLetters);

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((prevState) => [...prevState, letter]);
    },
    [guessedLetters]
  );

  let isLoser = incorrectLetters.length >= 6;
  let isWinner = correctLetters.join("").length === wordToGuess.length;

  //generate new word
  useEffect(() => {
    setWordToGuess(generateRamdomWord(words));
  }, []);

  //process typed letters
  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      if (!isLoser && !isWinner) {
        const key = e.key;
        let regex = /^[a-z]$/;
        if (!key.match(regex) || key == "Enter") return;
        e.preventDefault();
        addGuessedLetters(key.toLocaleLowerCase());
      }
    }) as unknown as EventListener;

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  //reset game / game over
  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      if (isLoser || isWinner) {
        const key = e.key;
        if (key === "Enter") {
          setWordToGuess(generateRamdomWord(words));
          setGuessedLetters([]);
          isLoser = false;
          isWinner = false;
        }
      }
    }) as unknown as EventListener;

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [isLoser, isWinner]);

  return (
    <Container className="app">
      <GameOver isLoser={isLoser} isWinner={isWinner} />
      <h2 className="title">Jogo da Forca</h2>
      <HangmangDrawing numOfErrors={incorrectLetters.length} />
      <HangmanWord
        word={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <Keyboard
        activeLetters={correctLetters}
        inactiveLetters={incorrectLetters}
        addGuessedLetters={addGuessedLetters}
        disabled={isLoser || isWinner}
      />
    </Container>
  );
}

export default App;
