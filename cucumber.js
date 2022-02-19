const common = [
    '--require-module ts-node/register' // Load TypeScript module
];

const trials_backend = [
    ...common,
    'tests/features/**/*.feature',
    '--require tests/features/step_definitions/*.steps.ts',
    '--publish-quiet'
].join(' ');

module.exports = {
    trials_backend
};
