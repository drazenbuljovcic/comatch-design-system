import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 50px;
    background-color: #f7fbfd;

    > div {
        margin-bottom: 25px;
    }
`;

const Header = styled.div`
    height: 60px;
    width: calc(100% +100px);
    background-color: #d2d5d7;
    margin: -50px -50px 0 -50px;
`;

const Title = styled.div`
    height: 12px;
    width: 25%;
    background-color: #d2d5d7;
`;

const SubTitle = styled.div`
    width: 15%;
    height: 20px;
    background-color: #d2d5d7;
`;

const Container = styled.div`
    padding: 20px;
    background-color: #e9edef;
    > div:not(:last-child) {
        margin-bottom: 25px;
    }
`;

const ContainerTitle = styled.div`
    width: 45%;
    height: 20px;
    background-color: #d2d5d7;
`;

const Rextangle = styled.div`
    width: 100%;
    height: 236px;
    background-color: #d2d5d7;
    margin: 0 0 10px 0;
`;

const AvatarWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px !important;
`;

const SmallTextBlock = styled.div`
    padding: 5px;
    width: 15%;
    display: flex;
    flex-direction: column;
`;

const MediumTextBlock = styled.div`
    padding: 5px;
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const RtlText = styled.div`
    width: 50%;
    height: 14px;
    background-color: #d2d5d7;
    margin: 0 0 10px 0;
    margin-inline-start: auto;
`;

const Avatar = styled.div`
    border-radius: 50%;
    width: 47px;
    height: 47px;
    border: solid 1px #d2d5d7;
    background-color: #d2d5d7;
`;

const LineText = styled.div`
    width: 100%;
    height: 14px;
    background-color: #d2d5d7;
    margin: 0 0 10px 0;
`;

const HalfLineText = styled.div`
    width: 55%;
    height: 14px;
    background-color: #d2d5d7;
    margin: 0 0 10px 0;
`;

export {
    Wrapper,
    Header,
    Title,
    SubTitle,
    Container,
    ContainerTitle,
    Rextangle,
    AvatarWrapper,
    SmallTextBlock,
    HalfLineText,
    MediumTextBlock,
    Avatar,
    RtlText,
    LineText,
};
