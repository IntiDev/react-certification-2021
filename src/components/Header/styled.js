import styled from 'styled-components';

const Container = styled.header`
  align-items: center;
  color: white;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  background-color: #f2b735;

  &__img {
    margin-left: 30px;
    width: 150px;
  }

  &__menu {
    margin-right: 30px;
  }

  &__menu ul {
    display: none;
    list-style: none;
    margin: 0px 0px 0px -14px;
    padding: 0px;
    position: absolute;
    width: 100px;
    text-align: right;
  }

  &__menu:hover ul,
  ul:hover {
    display: block;
  }

  &__menu li {
    margin: 10px 0px;
  }

  &__menu li a {
    color: white;
    text-decoration: none;
  }

  &__menu li a:hover {
    text-decoration: underline;
  }

  &__menu--profile {
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  &__menu--profile img {
    margin-right: 8px;
    width: 40px;
  }
`;

const Styled = { Container };
export default Styled;
