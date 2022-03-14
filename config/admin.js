module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3ee9da09802b99b49e9ff47b91b4ce7'),
  },
});
