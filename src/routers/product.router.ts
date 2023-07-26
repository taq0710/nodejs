import { HTTP_METHOD, ROLE } from "../common/constants";
import { BaseRouter } from "./basic.router";
import { auth } from "../middlewares/authorization.middleware";
import { uploadDiskStorage } from "../middlewares/upload.middleware";
import { ProductController } from "../controllers/product.controller";

export class ProductRouter extends BaseRouter {
  private productController = new ProductController();

  constructor() {
    super();
    this.init();
  }

  init() {
    this.route({
      method: HTTP_METHOD.POST,
      url: "/create",
      action: this.productController.create,
      middleware: [uploadDiskStorage.single("image")],
    });
    this.route({
      method: HTTP_METHOD.GET,
      url: "/",
      action: this.productController.getAll,
      middleware: [],
    });
    this.route({
      method: HTTP_METHOD.GET,
      url: "/:id",
      action: this.productController.getById,
      middleware: [],
    });
    this.route({
      method: HTTP_METHOD.PUT,
      url: "/:id",
      action: this.productController.updateById,
      middleware: [auth([ROLE.ADMIN]), uploadDiskStorage.single("avatar")],
    });

    this.route({
      method: HTTP_METHOD.DELETE,
      url: "/:id",
      action: this.productController.deleteById,
      middleware: [auth([ROLE.ADMIN])],
    });
  }
}
