import { Container } from "./styles";

interface Props {
  isLoser: boolean;
  isWinner: boolean;
}

export default function GameOver({ isLoser, isWinner }: Props) {
  const defaultMsg = "Aperte ENTER para jogar novamente";

  return (
    <Container className="result">
      {isLoser && (
        <>
          <span>Sinto muito, não foi dessa vez :(</span>
          <span>{defaultMsg}</span>
        </>
      )}
      {isWinner && (
        <>
          <span>Parabéns, você venceu!</span>
          <span>{defaultMsg}</span>
        </>
      )}
    </Container>
  );
}
