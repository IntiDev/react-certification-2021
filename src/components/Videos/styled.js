import styled from 'styled-components';

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 15px;

  & video {
    transition: 0.4s;
    max-width: 100%;
    display: block;
    border-radius: 4px 4px 0 0;
  }
`;

const Video = styled.div`
  &:hover video {
    transform: scale(2.2);
    transform-origin: center;
  }

  &:hover .view {
    padding: 10px;
  }

  &-content {
    width: 100%;
    color: #808080;
    padding: 15px 10px 0;
    border-radius: 0 0 4px 4px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ImgContainer = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Styled = { VideosContainer, Video, ImgContainer };
export default Styled;
