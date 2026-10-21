'use strict'

const {model, Schema, Types} = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

const shopSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 150,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    verify: {
        type: Schema.Types.Boolean,
        default: false,
    },
    roles: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
})

//Export the model
module.exports = model(DOCUMENT_NAME, shopSchema)
