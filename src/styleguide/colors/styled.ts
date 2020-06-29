import styled from 'styled-components';

const PageWrapper = styled.div`
    padding: 100px;
    h1 {
        font-size: 72px;
    }
    p {
        font-size: 18px;
    }
    h2 {
        font-size: 32px;
    }
`;
const Title = styled.h3`
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
`;

const List = styled.ul`
    list-style-position: inside;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    list-style: none;
    border-radius: 3px;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li<{
    bgColor: string;
    contrast: string;
}>`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    justify-content: space-between;
    padding: 15px 25px;

    ${({ bgColor, contrast }) => `
        background-color: ${bgColor};
        color: ${contrast};
    `}
`;

const Palette = styled.div`
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;

    > p {
        margin-bottom: 50px;
    }
`;

const PalettesList = styled.div`
    display: flex;
    flex-wrap: wrap;

    > ${Palette} {
        flex: calc(50% - 20px) 0;
        padding: 10px;
    }
`;

const Page = styled.div``;

export { Title, List, ListItem, Page, Palette, PalettesList, PageWrapper };
