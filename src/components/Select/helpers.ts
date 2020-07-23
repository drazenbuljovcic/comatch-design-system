import { Option } from '../../core/hooks/options/types';

function optionsAreEqual(optionA?: Option, optionB?: Option) {
    return optionA?.id === optionB?.id;
}

export { optionsAreEqual };
