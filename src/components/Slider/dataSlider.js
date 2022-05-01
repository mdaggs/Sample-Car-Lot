import { v4 as uuidv4 } from "uuid"
import chevy1 from '../img/chevy1.png'
import chevy2 from '../img/chevy2.jpeg'
import ford1 from '../img/ford1.jpeg'
import ford2 from '../img/ford2.jpeg'

const dataSlider = [
    {
        id: uuidv4(),
        title: "Title1",
        subTitle: "test sub 1",
        image: chevy1
    },
    {
        id: uuidv4(),
        title: "Title2",
        subTitle: "test sub 2",
        image: chevy2
    },
    {
        id: uuidv4(),
        title: "Title3",
        subTitle: "test sub 3",
        image: ford1
    },
    {
        id: uuidv4(),
        title: "Title4",
        subTitle: "test sub 4",
        image: ford2
    },
    {
        id: uuidv4(),
        title: "Title5",
        subTitle: "test sub 5",
        image: ford2
    },
];

export default dataSlider;