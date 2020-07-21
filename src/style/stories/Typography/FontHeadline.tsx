import React from 'react';
import { FontHeadlineWrapper } from './styled';

function FontHeadline({ bold }: { bold?: boolean }) {
    return (
        <FontHeadlineWrapper bold={bold}>
            Aa
            <div className="indicator">{bold ? 'bold' : 'regular'}</div>
        </FontHeadlineWrapper>
    );
}

export default FontHeadline;
