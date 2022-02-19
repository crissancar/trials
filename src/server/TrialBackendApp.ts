import * as http from 'http';
import { Server } from './server';

export class TrialBackendApp {
  server?: Server;

  start() {
    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    return this.server.listen();
  }

  stop() {
    return this.server?.stop();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }
}
