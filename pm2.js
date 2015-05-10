var pm2 = require('pm2');

pm2.connect(function() {

  pm2.start({
    script: 'server.js',
    exec_mode: 'cluster',
    instances: 10,
    max_memory_restart: '100M'
  }, function(err, apps){

    pm2.disconnect();
  });
});
