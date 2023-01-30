import Ajv from "ajv"
import schema from './sitesSchema.json' assert {type: 'json'};
import data from '../sites.json' assert {type: 'json'};

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
console.log(valid)