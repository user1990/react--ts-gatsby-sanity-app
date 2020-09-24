import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import person from "./person";
import pizza from "./pizza";
import topping from "./topping";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pizza, topping, person]),
});
