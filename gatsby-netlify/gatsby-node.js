exports.createPages = async ({ page, actions }) => {
    
    actions.createPage({
        path: 'dynamic-page',
        component: require.resolve('./src/components/dynamicPage.tsx'),
        context: {
            name: 'zain'
        }
    });
    if(page.path.match(/^\/app/)){

        page.matchPath = "/app/"
        
        createPage(page)
    }
}