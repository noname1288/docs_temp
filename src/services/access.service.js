'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            const holderShop = await shopModel.findOne({ email }).lean()

            if (holderShop) {
                return {
                    code: 'xxxx',
                    message: 'Shop already registered!',
                    status: 'error'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)
            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles: [RoleShop.SHOP]
            })

            if (newShop) {
                // created public key, private key
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    // export ra chuỗi PEM để lưu/trả về được (mặc định là KeyObject)
                    publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
                    privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
                })

                // TODO: lưu publicKey vào DB (keytoken model) và dùng privateKey để ký token
                console.log({ privateKey, publicKey })

                return {
                    code: 201,
                    message: 'Signup success',
                    status: 'success',
                    metadata: {
                        // chỉ trả các field an toàn, KHÔNG trả password / privateKey
                        shop: {
                            _id: newShop._id,
                            name: newShop.name,
                            email: newShop.email,
                            roles: newShop.roles,
                        },
                        publicKey,
                    }
                }
            }

            return {
                code: 200,
                message: 'Signup failed',
                status: 'error',
                metadata: null
            }

        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService