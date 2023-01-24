import {
  Container,
  Base,
  Stem,
  Gallows,
  GallowsTip,
  Head,
  Torso,
  LeftArm,
  RightArm,
  LeftLeg,
  RightLeg,
} from "./styles";

interface Props {
  numOfErrors: number;
}

const bodyParts = [Head, Torso, LeftArm, RightArm, LeftLeg, RightLeg];

export default function HangmangDrawing({ numOfErrors }: Props) {
  return (
    <Container>
      {bodyParts.slice(0, numOfErrors).map((BodyPart, index) => {
        return <BodyPart key={index} />;
      })}
      <GallowsTip />
      <Gallows />
      <Stem />
      <Base />
    </Container>
  );
}
