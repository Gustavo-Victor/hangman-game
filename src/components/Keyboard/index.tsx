import { Container, Wrapper, Key } from "./styles";

const keys: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface Props {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
  disabled?: boolean;
}

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetters,
  disabled = false,
}: Props) {
  return (
    <Container>
      <Wrapper>
        {keys.map((key, index) => {
          const isActive = !activeLetters.includes(key);
          const isInactive = !inactiveLetters.includes(key);

          return (
            <Key
              onClick={() => addGuessedLetters(key)}
              isActive={isActive && isInactive}
              disabled={!(isActive && isInactive) || disabled}
              key={key}
              id={key}
            >
              {key}
            </Key>
          );
        })}
      </Wrapper>
    </Container>
  );
}
