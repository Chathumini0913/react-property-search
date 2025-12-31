export function filterProperties(properties, criteria) {
    return properties.filter(property => {

        if (criteria.type && property.type !== criteria.type) {
            return false;
        }

        if (criteria.minPrice && property.price < Number(criteria.minPrice)) {
            return false;
        }

        if (criteria.maxPrice && property.price > Number(criteria.maxPrice)) {
            return false;
        }

        return true;
    });
}