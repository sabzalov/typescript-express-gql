export const Item = {
    id: (root) => root.id,
    description: (root) => `TEST ${root.description}`,
};
