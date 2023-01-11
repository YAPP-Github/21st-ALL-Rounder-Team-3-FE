import styled, { css } from "styled-components";

type Props = {
  color: "purple" | "green" | "gray";
  value: string;
};

const Badge = ({ color, value }: Props) => {
  return <BaseBadge color={color}>{value}</BaseBadge>;
};

const PurpleBadge = css`
  background-color: ${({ theme }) => theme.colors.main[100]};
  color: ${({ theme }) => theme.colors.main[500]};
  border: 1px solid ${({ theme }) => theme.colors.main[200]};
`;

const GreenBadge = css`
  background-color: ${({ theme }) => theme.colors.sub[100]};
  color: ${({ theme }) => theme.colors.sub[500]};
  border: 1px solid ${({ theme }) => theme.colors.sub[300]};
`;

const GrayBadge = css`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[600]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

const BaseBadge = styled.span`
  padding: 2px 10px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  ${props => {
    if (props.color === "purple") return PurpleBadge;
    if (props.color === "green") return GreenBadge;
    if (props.color === "gray") return GrayBadge;
  }};
`;

export default Badge;
