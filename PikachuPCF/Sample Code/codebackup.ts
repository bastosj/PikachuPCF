//Control Manifest


<control 
    namespace="hsol" 
    constructor="ImageURL" 
    version="1.0.0" 
    display-name-key="Image through URL Component" 
    description-key="Allows you to display an image on the form using the image's URL." 
    control-type="standard"
>


<property 
    name="imageUrl"
    display-name-key="Image URL"
    description-key="URL of the Image to be displayed"
    of-type="SingleLine.URL"
    usage="bound"
    required="true"
/>


<css 
    path="css/imageURL.css" 
    order="1" 
/>


--

//index.ts
//TOP of FILE

private _image : HTMLImageElement;
private _imageOnError : EventListenerOrEventListenerObject;
private _imageOnLoad : EventListenerOrEventListenerObject;

//INIT

let imageUrl = context.parameters.imageUrl.raw || "";
this._imageOnError = this.imageOnError.bind(this);
this._imageOnLoad = this.imageOnLoad.bind(this);


let image = document.createElement("img");
image.addEventListener("error",this._imageOnError);
image.addEventListener("load",this._imageOnLoad);
image.src = imageUrl;
this._image = image;
container.appendChild(image);

// UPDATE VIEW

let imageUrl = context.parameters.imageUrl.raw || "";
this._image.src = imageUrl;


//DESTROY

private imageOnError(){
this._image.hidden = true; 
     }
private imageOnLoad(){
this._image.hidden = false; 
     }



// IMAGE URL CSS


.hsol\.ImageURL img{
    max-width: -webkit-fill-available;
    min-width: 0px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
