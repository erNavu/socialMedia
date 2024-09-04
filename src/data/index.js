import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material";

export const SIDE_BAR_MENU = [
    {
        text: "HomePage",
        icon: <Home />,
        component: "a",
        href: "#home",
    },
    {
        text: "Pages",
        icon: <Article />,
        component: "a",
        href: "#simple-list",
    },
    {
        text: "Market Place",
        icon: <Storefront />,
        component: "a",
        href: "#simple-list",
    },
    {
        text: "Groups",
        icon: <Group />,
        component: "a",
        href: "#simple-list",
    },
    {
        text: "Friends",
        icon: <Person />,
        component: "a",
        href: "#simple-list",
    },
    {
        text: "Profile",
        icon: <AccountBox />,
        component: "a",
        href: "#simple-list",
    },
    {
        text: "Settings",
        icon: <Settings />,
        component: "a",
        href: "#simple-list",
    },
    {
        text: "mode",
        icon: <ModeNight />,
        component: "a",
        href: "#simple-list",
    },
]

const imageUrl = "https://images.pexels.com/photos/"
const compressImage = ".jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

export const POST_DATA = [

    {
        key: 1,
        userName: "J",
        userDetails: "Japnaaz Kaur",
        date: "September 5, 2024",
        image: `${imageUrl}709552/pexels-photo-709552${compressImage}`,
        imageDesc: "Mirror Lake Reflecting Wooden House in Middle of Lake Overlooking Mountain Ranges"
    },
    {
        key: 2,
        userName: "R",
        userDetails: "Ran Ian Turnell",
        date: "September 6, 2024",
        image: `${imageUrl}147411/italy-mountains-dawn-daybreak-147411${compressImage}`,
        imageDesc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque enim magna etiam, lorem vitae fames. Rhoncus massa ut scelerisque vivamus, maecenas diam tempor. Iaculis sit bibendum varius vestibulum potenti vestibulum pulvinar convallis. Proin curae interdum mollis nibh hendrerit at cursus. Integer facilisis auctor torquent porttitor auctor. Aliquet ac ex velit nam hac velit.  Proin curae interdum mollis nibh hendrerit at cursus"

    },
    {
        key: 3,
        userName: "J",
        userDetails: "Jai Teganvir Singh",
        date: "September 5, 2024",
        image: `${imageUrl}707915/pexels-photo-707915${compressImage}`,
        imageDesc: "Timelapse Photography of Falls Near Trees"
    },
    {
        key: 4,
        userName: "G",
        userDetails: "Gurjashan Vaneet Singh",
        date: "September 4, 2024",
        image: `${imageUrl}1200861/pexels-photo-1200861${compressImage}`,
        imageDesc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque enim magna etiam, lorem vitae fames. Rhoncus massa ut scelerisque vivamus, maecenas diam tempor. Iaculis sit bibendum varius vestibulum potenti vestibulum pulvinar convallis."
    },
    {
        key: 5,
        userName: "N",
        userDetails: "Navpreet Boparai",
        date: "September 3, 2024",
        image: `${imageUrl}1612353/pexels-photo-1612353${compressImage}`,
        imageDesc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque enim magna etiam, lorem vitae fames. Rhoncus massa ut scelerisque vivamus, maecenas diam tempor. Iaculis sit bibendum varius vestibulum potenti vestibulum pulvinar convallis."
    }
]

export const IMAGE_LIST_DATA = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

export const CONVERSATION_LIST = [
    {
        key: 1,
        text: "Brunch this weekend?",
        userName: "Ali Connors",
        conversation: " — I'll be in your neighborhood doing errands this…"
    },
    {
        key: 2,
        text: "Oui Oui",
        userName: " Sandra Adams",
        conversation: "  — Do you have Paris recommendations? Have you ever…"
    },
    {
        key: 3,
        text: "WHo was your weekend?",
        userName: "Jap Connors",
        conversation: " — I'll be in your city for some work..."
    },
    {
        key: 4,
        text: "Knock knock",
        userName: "Alice Ali",
        conversation: "  — Hi I am waiting for you for so long…"
    },
    {
        key: 5,
        text: "Lunch this weekend?",
        userName: "Vaneet Singh",
        conversation: " — I'll be in your neighborhood doing errands this…"
    },
]