import { TrialBackendApp } from './TrialBackendApp';

try {
  new TrialBackendApp().start();
} catch (error) {
  console.error(error);
  process.exit(1);
}

process.on('uncaughtException', (error) => {
  console.error('uncaughtException', error);
  process.exit(1);
});
