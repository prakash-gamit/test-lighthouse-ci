module.exports = {
  ci: {
    collect: {
      numberOfRuns: 2,
      staticDistDir: './public',
      url: [
        'http://localhost/index.html',
        'http://localhost/404.html',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
};

