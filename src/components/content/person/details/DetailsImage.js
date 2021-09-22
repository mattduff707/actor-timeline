import styled from 'styled-components';
import { imageUrl } from '../../../../constants';

const DetailsImage = ({ picture }) => {
  return <>{picture ? <Image src={imageUrl + picture} /> : <NoPicture>No Picture</NoPicture>}</>;
};

const Image = styled.img`
  width: 133px;
  height: 200px;
  background-color: gray;
`;

const NoPicture = styled.p`
  height: 200px;
  width: 133px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.highlightPrimary};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default DetailsImage;
