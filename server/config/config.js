const config = {
    production : {
        SECRET : process.env.SECRET,
        DATABASE : process.env.MONGODB_URI
    },
    default: {
        SECRET : 'SUPERSECRET',
        DATABASE : 'mongodb://localhost:27017/Alimente'
    }
}

exports.get = function(env){
    return config[env] || config.default
}
