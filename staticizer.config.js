module.exports = {
    // mode: 'production',
    output: {
        assetsPrefix: 'assets',
        staticPrefix: false,
        minify: false
    },

    data: {
        common: {
            meta: {
                title: 'Sz Dynamics Demo'
            }
        }
    },

    dynamics: {
        product_id: [
            {
                name: 'A Box',
                description: 'A red box with cat inside'
            },
            {
                name: 'A Teapon',
                description: 'A teapout found on orbit between Mars and Jupyter'
            }
        ]
    }
};
