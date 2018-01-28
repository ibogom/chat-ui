/**
 * Created by ibogom on 4/19/17.
 */

const defaultRule = {
    required: true,

    length: {
        min: 3,
        max: 35
    },

    regExp: '',

    defaultFn: function(data){
        if(!data){
            return false;
        } else if(data.length < this.length.min || data.length > this.length.max){
            this.message =
                `Data length is wrong! Minimum length is ${ this.length.min} and maximum length is ${this.length.max}`;
            return false;
        } else if(!(new RegExp(this.regExp).test(data))){
            this.message = 'Data format is wrong!';
            return false;
        } else if(this.fn && !this.fn(data)){
            return false;
        } else {
            return true;
        }
    },

    message: 'This field is required'
};

const validationRules = {

    username: Object.assign({}, defaultRule, {
        message: 'Username field could not be empty!'
    }),

    message:  Object.assign({}, defaultRule, {

        length: {
            min: 1,
            max: 150
        },

        message: 'Message field could not be empty!'
    })
};

export { validationRules };