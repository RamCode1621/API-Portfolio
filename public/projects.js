require('dotenv').config('../')
const {v4}=require('uuid')
const uuidv4=v4

const list=[
    {
        name:'Some name',
        description: 'Some description\nSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome descriptionSome description',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[ 
            sourceCode='github.com',
            url='www.someWeb.com',
        ],  
        images:`${process.env.URL_SERVER}images/img1.png`,
    },
    {
        name:'Some name 2',
        description: 'Some description 2',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img2.jpg`,
    },{
        name:'Some name 3',
        description: 'Some description 3',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img3.png`,
    },{
        name:'Some name 4',
        description: 'Some description 4',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img4.gif`,
    },{
        name:'Some name 5',
        description: 'Some description 5',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img5.png`,
    },{
        name:'Some name 6',
        description: 'Some description 6',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img6.jpg`,
    },{
        name:'Some name 7',
        description: 'Some description 7',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img7.jpg`,
    },{
        name:'Some name 8',
        description: 'Some description 8',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img8.png`,
    },{
        name:'Some name 9',
        description: 'Some description 9',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img9.png`,
    },
    {
        name:'Some name',
        description: 'Some description',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],  
        images:`${process.env.URL_SERVER}images/img1.png`,
    },
    {
        name:'Some name 2',
        description: 'Some description 2',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img2.jpg`,
    },{
        name:'Some name 3',
        description: 'Some description 3',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img3.png`,
    },{
        name:'Some name 4',
        description: 'Some description 4',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img4.gif`,
    },{
        name:'Some name 5',
        description: 'Some description 5',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img5.png`,
    },{
        name:'Some name 6',
        description: 'Some description 6',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img6.jpg`,
    },{
        name:'Some name 7',
        description: 'Some description 7',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img7.jpg`,
    },{
        name:'Some name 8',
        description: 'Some description 8',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img8.png`,
    },{
        name:'Some name 9',
        description: 'Some description 9',
        technologies:[
            {name:'html5',colorClass:'html-icon-color'},
            {name:'css3',colorClass:'css-icon-color'},
            {name:'react',colorClass:'react-icon-color'},
            {name:'js',colorClass:'js-icon-color'},
            {name:'node-js',colorClass:'node-icon-color'},
            {name:'docker',colorClass:'docker-icon-color'},
        ],
        links:[
            sourceCode='github.com',
            url='www.someWeb.com',
        ],
        images:`${process.env.URL_SERVER}images/img9.png`,
    }
]

module.exports=list