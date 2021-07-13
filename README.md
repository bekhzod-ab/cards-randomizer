1) Create randomizer component and import it to App.js

2) In randmizer component create a fucntion and export with following;

    - 4 useStates that contain (imgSrc, firstName,lastName eMail);
    - 1 useEffect to mount the component and trigger axios call to prevent from displaying empty card;
    - 1 onclick handler for button;
        - preventsDefault() 
        - axios.get request 
            .then set the state of three variables  ->  {    setFullName(data.obj.fullName); 
                                                             setImgSrc(data.obj.Img); 
                                                             seteMail(data.obj.eMail) };

    - render img tag, 2 p tags and button;
    - give value attribute to rendered tags; 
        - img tags src value = {imgSrc}
        - p tags  {firstName}, {lastName}
        - p tags  {eMail}
        - button onClick={handler} text -> Click Me (upper case)

3) Add some styling ;
    - reset default padding and margin, box-sizing;
    - body color olive green and fonts (montserrat)
    - add margin-top,word-wrap,line-height and sizing for p tags 
    - button : padding, width, backg-color or google for different prestyled ones
    
4) Run build and deploy on gh-pages                