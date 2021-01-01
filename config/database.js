module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '192.168.0.10'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dicenter'),
        username: env('DATABASE_USERNAME', 'cesar'),
        password: env('DATABASE_PASSWORD', '1aPxgraf61'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
