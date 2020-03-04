import path from 'path';

const ROOT = path.resolve(__dirname, '../');

export default {
    BUILD: `${ROOT}/dist`,
    ROOT,
    SRC: `${ROOT}/src`,
    SRC_INDEX: `${ROOT}/src/index.ts`,
};
