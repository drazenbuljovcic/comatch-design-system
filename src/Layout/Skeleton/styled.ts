import styled from 'styled-components';

const Header = styled.div`
    height: 60px;
    width: calc(100% +160px);
    background-color: #d2d5d7;
    margin: -80px -80px 0 -80px;
`;

const Wrapper = styled.div`
    padding: 80px 80px 40px 80px;
    background-color: #f7fbfd;
    width: 1080px;
    margin-bottom: 80px;

    > div {
        margin-bottom: 25px;
    }
`;

const Container = styled.div`
    padding: 20px;
    background-color: #e9edef;
    > div:not(:last-child) {
        margin-bottom: 25px;
    }
`;

const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px !important;
`;

const SmallTextBlock = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    > div:not(:last-child) {
        margin-bottom: 5px;
    }
`;

const MediumTextBlock = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    > div:not(:last-child) {
        margin-bottom: 5px;
    }
`;
export { AvatarWrapper, Container, Header, MediumTextBlock, SmallTextBlock, Wrapper };
