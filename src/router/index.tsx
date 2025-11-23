import { CSSFormatter, CSSMinifier, Dashboard, Develop, HTMLFormatter, HTMLMinifier, JSONFormatter, PageNotFound } from '../pages/tools';


import { createBrowserRouter } from 'react-router-dom';
import JSFormatter from '../pages/tools/JSFormatter';
import JSMinifier from '../pages/tools/JSMinifier';
import HTMLViewer from '../pages/tools/HTMLViewer';
import { MainLayout } from '../layout/mainlayout';
import TextDiff from '../pages/tools/TextDiff';

// ROUTES CONFIG
const IMPLEMENTED_ROUTES = [
    {
        path: 'html-formatter',
        element: <HTMLFormatter />,
    },
    {
        path: 'css-formatter',
        element: <CSSFormatter />,
    },
    {
        path: 'json-formatter',
        element: <JSONFormatter />,
    },
    {
        path: 'html-minifier',
        element: <HTMLMinifier />,
    },
    {
        path: 'css-minifier',
        element: <CSSMinifier />,
    },
    {
        path: 'js-formatter',
        element: <JSFormatter />,
    },
    {
        path: 'js-minifier',
        element: <JSMinifier />,
    },
    {
        path: 'html-viewer',
        element: <HTMLViewer />,
    },
    {
        path: 'text-diff',
        element: <TextDiff />,
    },


]

//  DEVELOPMENT ROUTES
const DEVELOPMENT_ROUTES = [
    // HTML / CSS / JS TOOLS
    'html-minifier',
    'css-minifier',
    'js-formatter',
    'js-minifier',

    // TEXT TOOLS
    'regex-tester',
    'word-counter',
    'lorem-ipsum',
    'random-string',
    'case-converter',
    'duplicate-remover',

    // ENCODING TOOLS
    'base64-encode',
    'base64-decode',
    'url-encode',
    'url-decode',
    'jwt-decode',
    'html-entities',
    'morse-code',

    // JSON & DATA TOOLS
    'json-validator',
    'json-to-csv',
    'csv-to-json',
    'yaml-to-json',
    'json-viewer',
    'base-converter',

    // OTHER UTILITIES
    'uuid-generator',
    'timestamp-converter',
    'color-picker',
    'qr-code-generator',
    'barcode-generator',
    'ip-lookup',
    'user-agent',
].map(path => ({
    path,
    element: <Develop />,
}))

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },

            ...IMPLEMENTED_ROUTES,

            ...DEVELOPMENT_ROUTES,

            {
                path: '*',
                element: <PageNotFound />,
            }
        ],
    },
]);

export default router;