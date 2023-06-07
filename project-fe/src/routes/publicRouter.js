
const PublicRouter = (path, element , children  = null) => {
    return {
        path : path,
        element: element,
        children : children
    }
}

export default PublicRouter;