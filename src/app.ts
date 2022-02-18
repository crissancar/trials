import "dotenv-flow/config";

const hello = process.env.HELLO_WORLD || 'HELLO!';

console.log(hello);

hello === 'Hello world!' ? console.log('true') : console.log('false');
