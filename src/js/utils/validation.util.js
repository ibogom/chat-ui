
/**
 * Created by ibogom on 4/17/17.
 */

import { validationRules } from './validation.rules';

export default class ValidationUtil {

    /**
     * containe rules arguments
     * @param rules | Object | validation rules
     */

    constructor(rules){
        this.rules = Object.assign({}, rules || {}, validationRules);
    }

    /**
     * Main validation method
     * @param options | Object | you can find possible options bellow
     *  value | String | transfer data from field if you want validate only value in field
     *  field | String | transfer field name if you want validate only specific field
     *  fields | Object | transfer fields if you what make validation for the whole form
     * @returns {Promise}
     */
    validate(options){
        return new Promise(function (resolve, reject) {
            if(!options){
                return reject('Options is not defined!');
            }
           return options.state ?
               this.formValidation(options, resolve, reject) : this.filedValidation(options, resolve, reject);
        }.bind(this));
    }

    formValidation(options, resolve, reject) {
        let errors = [];
        Object.keys(options.fields).map(function(field){
            if(this.rules[field] && !this.rules[field].defaultFn(options.fields[field])) {
                errors.push({ [field]: this.rules[field].message });
            }
        }.bind(this));
        return errors.length ? reject(errors) : resolve(options.state);
    }

    filedValidation(options, resolve, reject){
        return this.rules[options.field].defaultFn(options.value) ?
            resolve(options.data) :
            reject(this.rules[options.field].message);
    }
}
