var field = [];

export const addPlant = (seed) => {
    field.push(seed);
    return field;
};

export const usePlants = () => {
    return addPlant.slice();
};