module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("notes", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/notes/*.md").filter(item => !item.inputPath.includes('index.md'));
    });

    eleventyConfig.addCollection("projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/projects/*.md").filter(item => !item.inputPath.includes('index.md'));
    });

    eleventyConfig.addCollection("tagList", function (collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
            if ("tags" in item.data) {
                let tags = item.data.tags;
                tags.forEach(tag => tagSet.add(tag));
            }
        });
        return [...tagSet];
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};