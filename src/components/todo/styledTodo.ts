/* eslint-disable operator-linebreak */
import styled, { keyframes } from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 6px;
  color: #000000;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  &:hover {
    border: 3px solid #dedede;
  }
  &:focus {
    outline: none;
    border: 1px solid #9f9f9f;
  }
`;

export const Form = styled.form`
  display: flex;
  padding: 12px 16px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SearchIconContainer = styled.svg.attrs(({ xmlns, viewBox }) => ({
  xmlns: xmlns || 'http://www.w3.org/2000/svg',
  viewBox: viewBox || '0 0 15 15',
}))`
  width: 15px;
  height: 15px;
  fill: none;
  margin-right: auto;
`;

export const SearchIcon = styled.path.attrs(({ d }) => ({
  d:
    d ||
    'M11.1666 6.58333C11.1666 9.11463 9.11462 11.1667 6.58331 11.1667C4.05201 11.1667 1.99998 9.11463 1.99998 6.58333C1.99998 4.05202 4.05201 1.99999 6.58331 1.99999C9.11462 1.99999 11.1666 4.05202 11.1666 6.58333ZM10.3742 11.5528C9.32275 12.3561 8.00876 12.8333 6.58331 12.8333C3.13153 12.8333 0.333313 10.0351 0.333313 6.58333C0.333313 3.13155 3.13153 0.333328 6.58331 0.333328C10.0351 0.333328 12.8333 3.13155 12.8333 6.58333C12.8333 8.00878 12.3561 9.32276 11.5528 10.3743L14.214 13.0355C14.5395 13.361 14.5395 13.8886 14.214 14.214C13.8886 14.5395 13.3609 14.5395 13.0355 14.214L10.3742 11.5528Z',
}))`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #7d7d7d;
`;

const spin = keyframes`
  100% {
     rotate: z 360deg
  }
`;

export const Spinner = styled(ImSpinner2)`
  animation: ${spin} 1.5s linear infinite;
`;

export const SearchResultBox = styled.div`
  margin-top: 2px;
  position: absolute;
  width: 100%;
  max-height: 164px;
  background-color: #ffffff;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-shadow: 0px 0px 1px rgba(50, 50, 50, 0.05), 0px 2px 4px rgba(50, 50, 50, 0.1);
  padding: 0px 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.48);
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;

export const MoreIndicator = styled.span`
  position: sticky;
  display: flex;
  bottom: 0;
  justify-content: center;
  width: 100%;
  background-color: white;
`;
