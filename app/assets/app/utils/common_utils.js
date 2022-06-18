import _ from "lodash";

function camelizeKeys(object) {
  if(Array.isArray(object)) {
    return object.map(entry => camelizeKeys(entry))
  }
  if( object !== null && object.constructor === Object) {
    return Object.keys(object).reduce((result, entry) => ({
      ...result,
      [_.camelCase(entry)]: camelizeKeys(object[entry])
    }), {})
  }
  return object;
}

function setEntityAttributes(entityData, name) {
  return entityData[name].reduce((result, data) => ({
    ...result,
    [data.id]: {...data}
  }), {});
}

export { camelizeKeys, setEntityAttributes }
