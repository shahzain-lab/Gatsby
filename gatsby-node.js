
exports.createPages = async function ({actions}){

    actions.createPage({
        path: 'dynamic-page',
        component: require.resolve('./src/template/dynamics.js'),
        context: {
            name: 'Zain-Ul-Abideen'
        },
    })
    actions.createPage({
        path: 'dynamic-page2',
        component: require.resolve('./src/template/dynamics.js'),
        context: {
            name: 'Shahzain',
        }
    })
    console.log('the ready final result')
}



///////////////////////////////////////////////Client only routes

exports.onCreatePage = async function ({page, actions}){
    const {createPage} = actions;

    if(page.path.match(/^\/app/)){

        page.matchPath = '/app/*'

        createPage(page)
    }
}