import { apiProvider } from "./provider.js";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (params) => {
        return apiProvider.getAll(options.url, params);
      };
    }

    if (options.getSingle) {
      this.getSingle = (id) => {
        return apiProvider.getSingle(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model) => {
        return apiProvider.post(options.url, model);
      };
    }

    if (options.put) {
      this.put = (model, id) => {
        return apiProvider.put(options.url, model, id);
      };
    }

    if (options.remove) {
      this.remove = (id) => {
        return apiProvider.remove(options.url, id);
      };
    }
  }
}
