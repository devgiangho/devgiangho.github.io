var path=require('path');
module.exports = {
  //__experimentalThemes: [`gatsby-theme-devgiangho`],
  pathPrefix: "devgiangho.github.io",
  siteMetadata: {
    title: `Dev Giang Hồ - Blog for Devs`,
    siteUrl: `https://devgiangho.github.io`,
    description: `Blog Kiên Đinh & %TOPICS%`,
    topics: [
      'JavaScript',
      '.NET',
      'Vuejs',
      'PHP',
      'Vạn Vật'
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Example',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'Example',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `Kiên Đinh`,
      description: `Bần đạo là <strong>Kiên Đinh</strong>, một Junior Fullstack Developer. 
        Ta viết blog này với mục đích chia sẻ những kinh nghiệm của bản thân đối với <b>tu DEV chi đạo</b>. `,
      social: {
        facebook: `https://www.facebook.com/kien.matu.7`,
        twitter: ``,
        linkedin: `https://www.linkedin.com/in/kiendinh-dev/`,
        instagram: ``,
        youtube: `https://www.youtube.com/channel/UCnq0iZ1X0udszc7ODV9uK4g`,
        github: `https://github.com/kienmatu`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve:  `gatsby-theme-devgiangho`,
      options: {
        manifest: {
          name: `Devgiangho Theme`,
          short_name: `Devgiangho`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    },
  ]
};