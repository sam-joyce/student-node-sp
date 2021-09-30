const students = require('../docs/student.swagger.js');
const schemas = require('../docs/schemas.swagger.js');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Sams Node API',
        description: 'The documentation for the _nology self-paced Course Node API, designed to teach the concepts of server-side programming to trainees on our self-paced course.',
        termsOfService: '',
        contact: {
            name: '_nology',
            email: 'sam@nology.io',
            url: 'https://nology.io'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: {
        url: 'http://localhost:3000/',
        description: 'Local server'
    },
    tags: {
        name: "Students"
    },
    paths: {
        "/api/students": {
            get: students.findAll,
            post: students.create
        },
        "/api/students/:id": {
            get: students.find,
            delete: students.destroy
        }
    },
    components: {
        schemas: schemas
    }
}

module.exports = swaggerDocument;