const ghpages = require('gh-pages');

ghpages.publish('dist', () => {
	console.log('Deploy to gh-pages complete.');
});
