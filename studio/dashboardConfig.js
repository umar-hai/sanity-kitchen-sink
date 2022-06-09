export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a1cad5f76e9e5f18d5ab08',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2f6ejp5w',
                  apiId: '1d90cdb1-957b-408d-a184-13e2af94b1b9'
                },
                {
                  buildHookId: '62a1cad663989d5953d1f964',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hc6sftp7',
                  apiId: '5c3f7072-8933-4292-ad72-182166566013'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/umar-hai/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hc6sftp7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
