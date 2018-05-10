import { Item } from './item';

const data = [
    {
        id: 1,
        description: 'blah'
    },
    {
        id: 2,
        description: 'rawr rawr'
    },
    {
        id: 3,
        description: 'rawr blah rawr 2'
    }
];

export const resolver = {
    Query: {
        info: () => 'hello darkness',
        items: () => data,
    },
    Item: Item,
}
