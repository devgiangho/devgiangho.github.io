module.exports = (themeOptions) => {
  const loadDefaultPages = themeOptions.loadDefaultPages ? themeOptions.loadDefaultPages : true;
  const contentPath      = themeOptions.contentPath || 'content';
  const manifest         = themeOptions.manifest ? themeOptions.manifest : {
    name: `DevGiangHo Theme`,
    short_name: `devgiangho`,
    start_url: `/`,
    background_color: `#a4cbb8`,
    theme_color: `#a4cbb8`,
    display: `minimal-ui`,
    icon: `${__dirname}/assets/logo.png`
  };

  return {
    siteMetadata: {
      title: `Dev Giang Hồ`,
      siteUrl: `https://devgiangho.github.io`,
      description: `Blog của Kiên & %TOPICS%`,
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
          name: 'RSS',
          path: '/rss.xml'
        },
        {
          name: 'Sitemap',
          path: '/sitemap.xml'
        }
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
      `gatsby-plugin-typescript`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: manifest
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: 'content',
          path: contentPath
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `themeAssets`,
          path: `${__dirname}/assets`
        }
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `Tags`
        }
      },
      {
        resolve: `gatsby-plugin-lunr`,
        options: {
          languages: [
            {
              name: 'en'
            }
          ],
          fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'content', store: true },
            { name: 'tags', store: true },
            { name: 'excerpt', store: true },
            { name: 'path', store: true }
          ],
          resolvers: {
            MarkdownRemark: {
              title: node => node.frontmatter.title,
              content: node => node.html,
              tags: node => node.frontmatter.tags,
              excerpt: node => node.frontmatter.excerpt,
              path: node => node.frontmatter.path
            }
          }
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-prismjs`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200
              }
            }
          ]
        }
      },
      loadDefaultPages && {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`
        }
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allMarkdownRemark } }) => {
                return allMarkdownRemark.edges.map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.excerpt,
                    date: edge.node.frontmatter.created,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  })
                })
              },
              query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___created] },
                  filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        excerpt
                        path
                        created
                      }
                    }
                  }
                }
              }
              `,
              output: `/rss.xml`,
              title: `RSS Feed`
            }
          ]
        }
      }
    ]
  };
};
