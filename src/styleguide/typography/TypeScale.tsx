/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const tbodyValues = [
    { title: 'headline1', fontSize: 24, lineHeight: 36, fontWeight: <b>Bold</b>, example: <b>Lorem ipsum dolor</b> },
    { title: 'headline2', fontSize: 20, lineHeight: 30, fontWeight: <b>Bold</b>, example: <b>Lorem ipsum dolor</b> },
    { title: 'subheadline1', fontSize: 18, lineHeight: 27, fontWeight: <b>Bold</b>, example: <b>Lorem ipsum dolor</b> },
    { title: 'subheadline2', fontSize: 16, lineHeight: 24, fontWeight: <b>Bold</b>, example: <b>Lorem ipsum dolor</b> },
    {
        title: 'body copy',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: (
            <>
                Regular, <b>Bold</b>
            </>
        ),
        example: (
            <>
                Lorem ipsum dolor, <b>Lorem ipsum dolor</b>
            </>
        ),
    },
    {
        title: 'label',
        fontSize: 12,
        lineHeight: 18,
        fontWeight: (
            <>
                Regular, <b>Bold</b>
            </>
        ),
        example: (
            <>
                Lorem ipsum dolor, <b>Lorem ipsum dolor</b>
            </>
        ),
    },
    {
        title: 'foot note',
        fontSize: 10,
        lineHeight: 15,
        fontWeight: (
            <>
                Regular, <b>Bold</b>
            </>
        ),
        example: (
            <>
                Lorem ipsum dolor, <b>Lorem ipsum dolor</b>
            </>
        ),
    },
];

const FontTable = styled.table<{
    fontSize: number;
}>`
    margin-top: 30px;
    width: 70%;
    text-align: center;

    td {
        border-bottom: 1pt solid grey;
        padding: 15px;
    }
    td:nth-child(2),
    td:nth-child(3),
    td:nth-child(4) {
        font-size: 16px;
    }

    th {
        text-align: -webkit-center;
        border-bottom: 1pt solid grey;
        padding: 15px;
    }

    th:nth-child(even) {
        background-color: #f2f2f2;
    }
    td:nth-child(even) {
        background-color: #f2f2f2;
    }
    td:first-child {
        font-size: 14px;
    }
    ${({ fontSize }) => `
    tr:last-child {
        font-size: ${fontSize};
    }
    `}
`;

function TypeScale() {
    return (
        <div>
            <h3>Typescale</h3>
            <p>
                The COMATCH type scale includes a range of contrasting styles that support the needs of our product and
                its content.
                <br />
                <br />
                The type scale is a combination of 6 styles that are supported by the type system. It contains reusable
                categories of text, each with an intended application and meaning.
            </p>
            <FontTable>
                <thead>
                    <tr>
                        <th>IDK</th>
                        <th>FONT SIZE</th>
                        <th>LINE HEIGHT</th>
                        <th>FONT WEIGHT</th>
                        <th>Example</th>
                    </tr>
                </thead>

                <tbody>
                    {tbodyValues.map(({ title, fontSize, lineHeight, fontWeight, example }) => (
                        <tr key={title}>
                            <td>{title}</td>
                            <td>{fontSize}</td>
                            <td>{lineHeight}</td>
                            <td>{fontWeight}</td>
                            <td style={{ fontSize }}>{example}</td>
                        </tr>
                    ))}
                </tbody>
            </FontTable>
        </div>
    );
}

export default TypeScale;
