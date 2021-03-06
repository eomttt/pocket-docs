import styled from '@emotion/styled';

interface ThumbnailProps {
  delay: number;
  left: number;
}

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-top: 25vh;
  margin-bottom: 1em;
  width: 20em;
  align-self: center;
  z-index: 20;
`;

export const Text = styled.div`
  cursor: pointer;
  align-self: center;
  margin-top: 3em;
  font-size: 1.5em;
  font-weight: bold;
  z-index: 20;
`;

export const Thumbnail = styled.div<ThumbnailProps>`
  position: absolute;
  animation-name: rainDown;
  animation-duration: 5.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  top: -15%;
  z-index: 10;

  @keyframes rainDown {
    90% {
      opacity: 1;
    }
    70% {
      opacity: 0.7;
      transform: translate(0, 102vh);
    }
    100% {
      opacity: 0;
      transform: translate(0, 112vh);
    }
  }
`;
