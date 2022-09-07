const  Page_404 =  {
    template: '<van-empty image="network" description="描述文字" />',
    data() {
        return {}
    }
}
const routes = [{
	path: '/404',
	name: '404',
	component: Page_404
}]
const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})
const getPath = function(path) {
	return "mobile/vue" +path
}
router.beforeEach((to, from, next) => {
	if ( to.path === "/") {
		next({
			path: "/home"
		});
	}else if (!router.hasRoute(to.name)) {
		ImportHtml(getPath(to.path)).then(module => {
			router.addRoute({
				path: to.path,
				name: to.path,
				component: module
			})
			next({
				path: to.path
			});
		}).catch(err => {
			console.log("访问路径 “" + to.path + "” 不存在")
			console.log(err)
			next({
				path: "/404"
			});
		});
	} else {
		next();
	}
})
export default router
