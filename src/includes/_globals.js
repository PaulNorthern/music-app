import _ from "lodash";

export default {
    install(app) {
        // globs are a feature for searching for files with patterns
        const baseComponents = import.meta.glob("../components/base/*.vue", {
            eager: true
        });

        // convert obj to array
        Object.entries(baseComponents).forEach(([path, module]) => {
            const componentName = _.upperFirst(
                _.camelCase(
                    path
                        .split("/")
                        .pop()
                        .replace(/\.\w+$/, "")
                )
            );
            // console.log(path, componentName)

            // export default
            app.component(`Base${componentName}`, module.default);
        });
    }
}