import React from "react";
import styled from "styled-components";
import { typo_body4_regular, typo_body2_medium } from "../../styles/Typo";

const tmp_image = require("../../assets/images/tmp_profile_img1.png");

const Wrapper = styled.div`
  display: flex;
  margin-left: 16px;
`;

const ProfileImg = styled.img`
  height: 48px;
  width: 48px;
`;

const TextWrapper = styled.span`
  margin-left: 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const ProfilePositionText = styled.div`
  ${typo_body4_regular}
  margin-bottom: 4px;
`;

const ProfileName = styled.div`
  ${typo_body2_medium}
`;

type Props = {
  name: string;
  imageSource: string;
};

export const TaskManagerProfile = ({ name, imageSource }: Props) => {
  imageSource = tmp_image;
  return (
    <Wrapper>
      <ProfileImg src={imageSource} />
      <TextWrapper>
        <ProfilePositionText>업무 담당자</ProfilePositionText>
        <ProfileName>{name}</ProfileName>
      </TextWrapper>
    </Wrapper>
  );
};
