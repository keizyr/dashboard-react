const { GraphQLError } = require("graphql");

class EntityNotFoundError extends GraphQLError {
  constructor() {
    super("Entity not found");
    this.code = "E_NOTFOUND";
  }

  static get $provides() {
    return "error.entityNotFound";
  }
}

module.exports = EntityNotFoundError;
