import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

describe('Hooks - `useToggle`', () => {
    it('should return expected flag and toggle', () => {
        const [toggled, toggle] = renderHook(() => useToggle()).result.current;

        expect(toggled).toBe(false);
        expect(toggle).toBeInstanceOf(Function);
    });

    it('should accept a default toggle value', () => {
        const [toggled, toggle] = renderHook(() => useToggle(true)).result.current;

        expect(toggled).toBe(true);
        expect(toggle).toBeInstanceOf(Function);
    });

    it('should toggle', () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current[0]).toBe(false);
        act(result.current[1]);
        expect(result.current[0]).toBe(true);
    });

    it('should toggle to desired state', () => {
        const { result } = renderHook(() => useToggle(true));

        expect(result.current[0]).toBe(true);
        act(result.current[1]);
        expect(result.current[0]).toBe(false);
    });
});
