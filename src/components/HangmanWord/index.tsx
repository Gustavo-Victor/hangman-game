import { Wrapper, CharBlock } from "./styles";

interface Props {
  word: string;
  guessedLetters: string[];
  reveal: boolean;
}

export default function HangmangWord({ word, guessedLetters, reveal }: Props) {
  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <CharBlock key={letter + index}>
          <span
            className="letter"
            style={{
              visibility:
                guessedLetters.includes(letter.toLocaleLowerCase()) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter.toLocaleLowerCase()) && reveal
                  ? "orange"
                  : "#ccc",
            }}
          >
            {letter}
          </span>
        </CharBlock>
      ))}
    </Wrapper>
  );
}
