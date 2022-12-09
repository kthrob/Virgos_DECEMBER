export const SITE = {
	name: 'Virgos Design',

	origin: 'https://virgosdesign.com',
	basePathname: '/',
	trailingSlash: false,

	title: 'Virgos Design | Infinite Possibilities',
	description: 'Virgos Design is proudly serves small businesses in Queen Creek, AZ and nationwide.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
