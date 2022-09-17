import NProgress from "nprogress";

export default (router) => {
    router.beforeEach((to, from, next) => {
        NProgress.start();
        // can begin loading a component
        next();
    });


    router.afterEach(NProgress.done);
};