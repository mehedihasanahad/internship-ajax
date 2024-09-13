export const readyStateDetails = [
    {
        Value: 0,
        State: 'UNSENT',
        Description: 'Client has been created. open() not called yet.'
    },
    {
        Value: 1,
        State: 'OPENED',
        Description: 'open() has been called.'
    },
    {
        Value: 2,
        State: 'HEADERS_RECEIVED',
        Description: 'send() has been called, and headers and status are available.'
    },
    {
        Value: 3,
        State: 'LOADING',
        Description: 'Downloading; responseText holds partial data.'
    },
    {
        Value: 4,
        State: 'DONE',
        Description: 'The operation is complete.'
    }
];