exports.generateSlug = (slug) => {
    return slug
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}