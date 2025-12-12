import { createServer, Response, Model } from "miragejs";
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
      this.urlPrefix = 'http://localhost:3003';
      this.namespace = "api";

      this.get("/wohnungen", (schema) => {
        return schema.db.wohnungs; 
      });

      this.get("/wohnungen/:id", (schema, request) => {
        const id = request.params.id;
        let wohnung = schema.db.wohnungs.find(id)
        
        if (wohnung != null) {
          console.log("server response", wohnung)
          return wohnung
        } else {
          console.log("returning 404")
          return new Response(404, {}, { errors: [`Resource with id ${id} not found`] });
        }
      })
      
    },
  });
}