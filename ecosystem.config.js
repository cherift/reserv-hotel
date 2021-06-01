module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '51.178.53.176',
      ref  : 'origin/main',
      repo : 'https://github.com/cherift/reserv-hotel.git',
      path : '/home/ubuntu/reserv-hotel',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
