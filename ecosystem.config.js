module.exports = {
    apps: [{
        name: 'sample-server',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-54-67-80-226.us-west-1.compute.amazonaws.com',
            key: './server-test.pem',
            ref: 'origin/master',
            repo: 'https://github.com/klee128/sample-server.git',
            path: '/home/ubuntu/sample-server',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}