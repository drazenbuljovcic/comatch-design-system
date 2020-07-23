import { RefObject, useMemo, useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

export default <T extends Element>(wrapperRef: RefObject<T>, toggleOnClickInside = false) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const collapseToggle = (collapsed = !isCollapsed) => {
        setIsCollapsed(collapsed);
    };

    const focusToggle = (focused = !isFocused) => {
        setIsFocused(focused);
    };

    const collapseAndFocus = useMemo(
        () => () => {
            setIsCollapsed(true);
            setIsFocused(true);
        },
        [],
    );

    const toggle = useMemo(
        () => () => {
            setIsCollapsed((currentlyCollapsed) => !currentlyCollapsed);
            setIsFocused((currentlyIsFocused) => !currentlyIsFocused);
        },
        [],
    );

    const handleClickOutside = useMemo(
        () => () => {
            setIsCollapsed(false);
            setIsFocused(false);
        },
        [],
    );

    useOnClickOutside(wrapperRef, handleClickOutside, toggleOnClickInside ? toggle : undefined);

    return {
        isCollapsed,
        isFocused,
        collapseAndFocus,
        collapseToggle,
        focusToggle,
        toggle,
    };
};
