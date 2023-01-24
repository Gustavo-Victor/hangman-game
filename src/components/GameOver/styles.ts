import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  position: relative;
  top: 10px;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ddd;
  gap: 0.4rem;

  &::first-child {
    color: #fff;
  }

  @media only screen and (max-width: 1100px) {
    margin-top: 7rem;
  }

  @media only screen and (max-width: 640px) {
    margin-top: 7rem;
  }

  @media only screen and (max-width: 630px) {
    margin-top: 10rem;
  }

  @media only screen and (max-width: 550px) {
    margin-top: 13rem;
  }

  @media only screen and (max-width: 450px) {
    margin-top: 17rem;
  }

  @media only screen and (max-width: 365px) {
    margin-top: 22rem;
  }

  @media only screen and (max-width: 270px) {
    margin-top: 32rem;
  }

  @media only screen and (max-width: 260px) {
    margin-top: 35rem;
  }
`;
