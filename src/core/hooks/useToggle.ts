import { useState } from 'react';

export default (
    isToggled = false,
    onToggle: (newState: boolean, oldState: boolean) => void = () => {},
): [boolean, (toState?: boolean) => void] => {
    const [toggled, setToggled] = useState(isToggled);

    const toggle = (toState?: boolean) => {
        setToggled((oldState) => {
            const newState = typeof toState === 'boolean' ? toState : !oldState;
            onToggle(newState, oldState);
            return newState;
        });
    };

    return [toggled, toggle];
};
