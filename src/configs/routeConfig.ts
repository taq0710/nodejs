import { Application } from 'express';
import { AuthRouter } from '../routers/auth.router';
import { ProductRouter } from '../routers/product.router';
import { UserRouter } from '../routers/user.router';

export class RouteConfig {
  init(app: Application) {
    app.use('/api/auth', new AuthRouter().addRoot());
    app.use('/api/users', new UserRouter().addRoot());
    app.use('/api/products', new ProductRouter().addRoot());
  }
}
