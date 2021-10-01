const PROXY_CONFIG = [
    {
        context:['/api'],
        target:'/home/adelio.castro/Área%20de%20Trabalho/cursos_certificados/cursos/curso_angular-js/index.html',
        secure:false,
        logLevel:'debug',
        pathRewrite:{'^/api':""}
    }

]

module.exports = PROXY_CONFIG