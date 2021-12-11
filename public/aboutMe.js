require('dotenv').config('../')

const data={ 
    name:'Richard Aguilar',
    tittle:'About me',
        description:`Hi :D I'm a JavaScript developer I love to develop for the web especially server side,
        I'm still very newbie in terms of work experience, but that doesn't stop me to keep getting technical experience, I love to keep learning <(^_^<) as anyone who is dedicated to this discipline of software development.

        My main tool is NodeJs because it allows me to work on the backend and fromtend with the same programming language.
    
        Although at the moment I only know about web technologies like Html, Css and JavaScript, I'm also learning Docker, ReactJs, Goland and AWS.`,
    description2:`Hola :D Soy un desarrollador de JavaScript  me encanta    desarrollar para la web sobre todo del lado del servidor,
        Todavía soy muy novato en cuanto a experiencia laboral, pero eso no me impide seguir adquiriendo experiencia técnica, me encanta seguir aprendiendo <(^_^<) como cualquiera que se dedique a esta disciplina del desarrollo de software.

        Mi herramienta principal es NodeJs porque me permite trabajar en el backend y fromtend con el mismo lenguaje de programación.
    
        Aunque de momento solo conozco tecnologías web como Html, Css y JavaScript, también estoy aprendiendo Docker, ReactJs, Goland y AWS.

        Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator`,
    image:`${process.env.URL_SERVER}images/me.jpeg`,
    socialMedia:[
        {facebook:'https://www.facebook.com/profile.php?id=100044622940765'},
        {instagram:'https://www.instagram.com/ridarlar/'},
        {github:'https://github.com/RamCode1621'}
    ]
        
    
}

module.exports=data;