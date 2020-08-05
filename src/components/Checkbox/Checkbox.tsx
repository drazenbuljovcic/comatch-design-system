import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

import { buildComponentIdAndClassNameFromProps, noop } from '../../core/helpers';

import { ComponentProps } from './types';
import { CheckboxInput, Wrapper } from './styled';

function Checkbox(props: ComponentProps) {
    const {
        name,

        checked = false,
        children,
        disabled = false,
        generateCss,
        hasError = false,
        onChange = noop,
        value,
        ...rest
    } = props;

    return (
        <Wrapper
            {...buildComponentIdAndClassNameFromProps(rest, 'Checkbox', { disabled, hasError })}
            generateCss={generateCss}
            onClick={(event) => {
                event.persist();
                onChange(event, !checked);
            }}
        >
            <input
                checked={checked}
                name={name}
                onChange={(event) => {
                    event.persist();
                    onChange(event, event.target.checked);
                }}
                type="checkbox"
                value={value}
            />

            <CheckboxInput className="CheckboxInput__input" role="checkbox">
                <FontAwesomeIcon className="CheckboxInput__tick" icon={faCheck} />
            </CheckboxInput>

            {children}
        </Wrapper>
    );
}

export { CheckboxInput as StyledCheckboxInput, Wrapper as StyledCheckbox };
export default memo(Checkbox);
