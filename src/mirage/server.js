
import { createServer, Model } from "miragejs";
import seedData from "../data/wohnung.json";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      wohnung: Model,
    },

    seeds(server) {
      server.db.loadData({
        wohnungs: seedData 
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/wohnungen", (schema) => {
        return schema.db.wohnungs; 
      });

      this.get("/wohnungen/:id", (schema, request) => {
        const id = request.params.id;
        return schema.db.wohnungs.find(id)
      })
    },
  });
}