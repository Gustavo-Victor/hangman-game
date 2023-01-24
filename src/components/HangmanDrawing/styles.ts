import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head = styled.div`
  background-color: inherit;
  border: 10px solid #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  top: 29px;
  right: calc(50% - 80px);
`;

export const Torso = styled.div`
  width: 10px;
  height: 55px;
  background-color: #fff;
  position: absolute;
  top: calc(28px + 50px);
  right: calc(50% - 60px);
`;
export const LeftArm = styled.div`
  width: 35px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  top: calc(40px + 50px);
  left: calc(50% + 25px);
  transform: rotate(-50deg);
`;

export const RightArm = styled.div`
  width: 35px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  top: calc(40px + 50px);
  left: calc(50% + 50px);
  transform: rotate(50deg);
`;

export const LeftLeg = styled.div`
  width: 55px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  top: calc(90px + 60px);
  left: calc(50% + 15px);
  transform: rotate(-65deg);
`;

export const RightLeg = styled.div`
  width: 55px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  top: calc(90px + 60px);
  left: calc(50% + 40px);
  transform: rotate(65deg);
`;

export const Gallows = styled.div`
  height: 10px;
  width: 120px;
  background-color: #fff;
  position: absolute;
  left: calc(50% - 60px);
  top: 0;
`;

export const GallowsTip = styled.div`
  background-color: #fff;
  width: 10px;
  height: 30px;
  position: absolute;
  left: 50%;
  margin-left: 50px;
  top: 0;
`;

export const Stem = styled.div`
  height: 250px;
  width: 10px;
  margin-right: 120px;
  background-color: #fff;
`;

export const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: #fff;
`;
