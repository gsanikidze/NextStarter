const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
    webpack: config => {
        const updatedConfig = {
            ...config,
            resolve: {
                alias: {
                    PAGES: path.resolve(__dirname, 'pages/'),
                    COMPONENTS: path.resolve(__dirname, 'components/'),
                    HOCS: path.resolve(__dirname, 'hocs/'),
                    SERVICES: path.resolve(__dirname, 'services/'),
                    STYLES: path.resolve(__dirname, 'styles/'),
                    STORE: path.resolve(__dirname, 'store/'),
                    REDUCERS: path.resolve(__dirname, 'reducers/'),
                    ACTIONS: path.resolve(__dirname, 'actions/'),
                }
            }
        }
        return updatedConfig
    }
})