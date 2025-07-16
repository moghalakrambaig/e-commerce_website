export const subCategories = [
    { name: 'Athletics', href: '#' },
    { name: 'Basketball', href: '#' },
    { name: 'Football', href: '#' },
    { name: 'Golf', href: '#' },
    { name: 'Running', href: '#' },
    { name: 'Skateboarding', href: '#' },
    { name: 'Tennis', href: '#' },
    { name: 'Training & Gym', href: '#' },
    { name: 'Walking', href: '#' },
]
export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2', label: '2', checked: false },
            { value: '3', label: '3', checked: false },
            { value: '3.5', label: '3.5', checked: false },
            { value: '5', label: '5', checked: false },
            { value: '6', label: '6', checked: false },
            { value: '7', label: '7', checked: true },
            { value: '8', label: '8', checked: true },
            { value: '9', label: '9', checked: true },
            { value: '10', label: '10', checked: true },
        ],
    },
    {
        id: 'gender',
        name: 'Gender',
        options: [
            { value: 'male', label: 'Male', checked: false },
            { value: 'female', label: 'Female', checked: false },
            { value: 'unisex', label: 'Unisex', checked: false },
        ],
    },
    {
        id: 'brand',
        name: 'Brand',
        options: [
            { value: 'adidas', label: 'Adidas', checked: false },
            { value: 'new balance', label: 'New Balanace', checked: false },
            { value: 'nike', label: 'Nike', checked: false },
            { value: 'puma', label: 'Puma', checked: false },
            { value: 'rebook', label: 'Rebook', checked: false },
        ],
    },
]