module.exports = {
  title: 'Hello World',
  description: 'Just playing around',
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'LeetCode',
        link: '/leetcode/',
      },
      {
        text: 'Tag',
        link: '/tag/',
      },
      {
        text: 'About',
        link: '/about',
      },
      {
        text: 'Github',
        link: 'https://github.com/volcanoliuc',
      },
    ],
    modifyBlogPluginOptions(blogPlugnOptions) {
      const classifier = [
        {
          id: 'post',
          dirname: '_post',
          path: '/',
          pagination: {
            perPagePosts: 5,
          },
        },
        {
          id: 'leetcode',
          dirname: '_leetcode',
          path: '/leetcode/',
          pagination: {
            perPagePosts: 5,
          },
        }
      ];

      blogPlugnOptions.directories.push(...classifier)
      return blogPlugnOptions
    },
  }
}