import express, { Request, Response } from 'express';
import * as http from 'http';
import container from '../config/dependency-injection';
import { registerRoutes } from '../config/router';
import Router from 'express-promise-router';
import httpStatus from 'http-status';

export class Server {
  private express: express.Express;
  private httpServer?: http.Server;
  private readonly port: string;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    const router = Router();
    this.express.use(router);

    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        console.info(
          `MovieDB Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        console.info('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          return reject(error);
        });
        return resolve();
      }
      return resolve();
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }
}
