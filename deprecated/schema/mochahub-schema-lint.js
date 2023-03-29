import Ajv from "ajv"
import schema from './mochahub.schema.json' assert {type: 'json'};
import data from '../src/site-info.mochahub.json' assert {type: 'json'};
import { strict as assert } from 'node:assert';

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) 
    console.log(validate.errors);
else
    console.log('[Lint] OK');

process.exit(valid ? 0 : 1)
