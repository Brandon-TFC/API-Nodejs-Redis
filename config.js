module.exports= {
    remoteDB: process.env.REMOTE_DB || false,
    api:{
        port:process.env.API_PORT||3000,
},
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt:{
        secret:process.env.JWT_SECRET|| '',
},
    mysql:{
        host:process.env.MYSQL_HOST||'',
        user:process.env.MYSQL_USER||'',
        password:process.env.MYSQL_PASS||'',
        database:process.env.MYSQL_DB||'',
    },
    mysqlService: {
        host: process.env.MSQL_SRV_PORT || '',
        port: process.env.MSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MSQL_SRV_PORT || 'localhost',
        port: process.env.MSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST ||'Aqui va todo el endpoint que aparece en redis',
        port: process.env.REDIS_PORT ||'Segundo parte del final del endpoint',
        password: process.env.REDIS_PASS ||'Al igual viene abajo del endpoint',
    }
    
}