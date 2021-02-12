const COOKIE_NAME = 'local';
let COOKIE_OPTIONS = "";

if (process.env.REACT_APP_NODE_DEV) {
    COOKIE_OPTIONS = { path: '/', expires: new Date('Tue, 19 Jan 2038 03:14:07 UTC') }
}

export {COOKIE_OPTIONS, COOKIE_NAME}