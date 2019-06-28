module.exports = {
    mode: 'development',
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
        product_id: {
            values: [
                {
                    name: 'A Box',
                    description: 'A red box with cat inside'
                },
                {
                    name: 'A Teapot',
                    description: 'A teapot found on orbit between Mars and Jupyter'
                }
            ],
            mode: 'keys'
        },
        color: {
            values: ['black', 'blue', 'red'],
            mode: 'values'
        }
    }
};
