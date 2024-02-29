const searchInput = document.querySelector("#search-input"),
 searchColor = document.querySelector(".search-color"),
 searchImage = document.querySelector("#search-image"),
 typeSelect = document.querySelector("#palette-type"),
 typeText = document.querySelector("#type-text"),
 countSelect = document.querySelector("#palette-count"),
 randomBtn = document.querySelector("#randomBtn") ,
 paletteContainer = document.querySelector("#palette"),
 relatedContainer = document.querySelector("#related");
 imageColorsContainer = document.querySelector("#image-colors");
 imageColorsWrapper = document.querySelector(".image-colors-wrapper");
 
 //container = document.querySelector(".container");

let currentColor = "skyblue",
    currentType = "analogous",
    currentCount = 6,
    imageColors = [] ;
    //All funtions to generate diferent colors

function generateAnalogousPalette(hsl,count){
        // hsl is color , count means quantity of colors 
        const palette = []
        // GET HUE , saturation and lightness from hsl
        const [hue, saturation , lightness] = hsl ;
        //Generate  colors equals count 
        for(let i = 0; i < count ; i++){
            // add 30 and multiple index of every colour 
            let newHue  = hue + 30 * i
            // hue can be greater tha 360 so check if greater than -360
            if(newHue > 360 ){
                newHue -= 360
            }
            // add new color  in palette array 
            palette.push ([newHue,saturation,lightness]);

        }
        //after getting all colors  return palette 
        return palette ;
    }

    // lets test it 
  
    // we got 6 colors with different hues
function generateMonochramaticPalette(hsl,count){
    // same in this but instead of hue increase lightness by 10 
    const palette = []
    let [hue , saturation ,lightness] =   hsl;
    for(let i =0 ; i < count ; i++){
        let newLightness = (lightness = 10 * i);
        if (newLightness > 100){
            // lightness cant be greater than 100
            newLightness -= 100 ;

        }
        palette.push ([hue , saturation , newLightness])

    }
    return  palette 
}    
 

function generateTriadicPalette(hsl,count){
   // hsl is color , count means quantity of colors 
        const palette = []
        const [hue, saturation , lightness] = hsl ;
        //Generate  colors equal count 
        for(let i = 0; i < count ; i++){
            // add 30 and multiple index of every colour 
            // increase 
            let newHue  = hue + 120 * i;
            // hue can be greater tha 360 so check if greater than -360
            if(newHue > 360 ){
                newHue -= 360
            }
            // add new color  in palette array 
            palette.push ([newHue,saturation,lightness]);

        }
        //after getting all colors  return palette 
        return palette ;
}
function generateCompoundPalette(hsl,count){
   // hsl is color , count means quantity of colors 
        const palette = []
        const [hue, saturation , lightness] = hsl ;
        //Generate  colors equal count 
        for(let i = 0; i < count ; i++){
            // add 30 and multiple index of every colour 
            let newHue  = hue + 150 * i ;
            // hue can be greater tha 360 so check if greater than -360
            if(newHue > 360 ){
                newHue -= 360
            }
            // add new color  in palette array 
            palette.push ([newHue,saturation,lightness]);

        }
        //after getting all colors  return palette 
        return palette ;
}
 
 

function generaShadesPalette(hsl,count){
   // hsl is color , count means quantity of colors 
        const palette = []
        const [hue, saturation , lightness] = hsl ;
        //to get shades increase brightness by 10 
        //Generate  colors equal count 
        for(let i = 0; i < count ; i++){
            // add 30 and multiple index of every colour 
            let newSaturation  = saturation + 10 * i ;
            // hue can be greater tha 360 so check if greater than -360
            if(newSaturation > 100 ){
                //saturation cant be greater than 100
                newSaturation -= 100 ;
            }
            // add new color  in palette array 
            palette.push ([hue,newSaturation,lightness]);

        }
        //after getting all colors  return palette 
        return palette ;
}



function generateTetradicPalette(hsl,count){
   // hsl is color , count means quantity of colors 
        const palette = []
        const [hue, saturation , lightness] = hsl ;
        // in compound increase hue by 90 
        for(let i = 0; i < count ; i++){
            // add 30 and multiple index of eve;ry colour 
            let newHue  = hue + 90 * i;
            // hue can be greater tha 360 so check if greater than -360
            if(newHue > 360 ){
                newHue -= 360;
            }
            // add new color  in palette array 
            palette.push ([newHue,saturation,lightness]);

        }
        //after getting all colors  return palette 
        return palette ;
}


function generateSquarepalette(hsl,count){
   // hsl is color , count means quantity of colors 
        const palette = []
        const [hue, saturation , lightness] = hsl ;
        // in compound increase hue by 60 
        for(let i = 0; i < count ; i++){
            // add 30 and multiple index of every colour 
            let newHue  = hue + 60 * i;
            // hue can be greater tha 360 so check if greater than -360
            if(newHue > 360 ){
                newHue -= 360
            }
            // add new color  in palette array 
            palette.push ([newHue,saturation,lightness]);

        }
        //after getting all colors  return palette 
        return palette ;
}


function generateRelatedColorPalette(hsl,count){
   // hsl is color , count means quantity of colors 
        const palette = []
        const [hue, saturation , lightness] = hsl ;
        //Generate  colors equal count 
       
            // add new color  in palette array 
        palette.push([hue,(saturation + 20) % 100,lightness]);
        palette.push([hue,(saturation - 20) % 100,lightness]);
        palette.push([hue , saturation ,(lightness + 20 ) % 100]);
        palette.push([hue,saturation,(lightness - 20 ) % 100]);
        palette.push([(hue + 20) % 360,saturation,lightness]);
        palette.push([(hue - 20) % 360,saturation,lightness]);
        
        //after getting all colors  return palette 
        for (let i = palette.length - 1; i > 0 ; i-- ){
            const j = Math.floor(Math.random()*(i + 1));
            [palette[i],palette[j]] = [palette[j] , palette[i]];

        }
        return palette ;
}



// fucntion to call specific type of color palette
function generatePalette(hsl,type,count){
    switch(type){
        case "analogous":
            return generateAnalogousPalette(hsl,count);
        case "monochromatic":
            return generateMonochramaticPalette(hsl,count);
        case "triadic":
            return generateTriadicPalette(hsl,count);
        case "compound":
            return generateCompoundPalette(hsl,count);
        case "shades":
            return generaShadesPalette(hsl,count);
        case "tetradic":
            return generateTetradicPalette(hsl,count);
        case "square":
            return generateSquarepalette(hsl,count);
        case "related":
            return generateRelatedColorPalette(hsl,count);

    }
   

}




// fucntion to generate html
function generatePalettehtml(type,container){
    let color = currentColor;
    let count = currentCount;
    const hsl = getHslFromcolor(color);
    // if hsl is zero do nothing 
    if (!hsl) return ;
    let palette = [];
    container.innerHTML = "";
    // if type image colors then use palette is image-colors
    if(type === "image-colors"){
        palette = imageColors;
    }
    else{
           palette = generatePalette(hsl,type,count);
    }
   
    console.log(palette)
    palette.forEach((color)=>{
        //convert to hsl to hex
        if(type != "image-colors"){
            color = HslToHex(color);
        }
      
      const colorEl = document.createElement("div");
      colorEl.classList.add("color");
      colorEl.style.backgroundColor = color ;
      colorEl.innerHTML =   ` <div class="color">
              <div class="overlay">
                <div class="icons">
                  <div class="copy-color" title = "copy color code">
                    <i class="far fa-copy "></i>

                  </div>
                  <div class="generate-palette">
                    <i class="fas fa-palette "></i>
                  </div>
                </div>
                        <div class="code">${color}</div>
              </div>
            </div>
          ` ;
      container.appendChild(colorEl);
    })
}



function getHslFromcolor(color){
    // to get hsl from color
    let hsl ;
    if (isValidColor(color)){
        //id  valid color names 
        //create temp div and set its background colour properly
        let temp = document.createElement("div");
        temp.style.color = color;
        document.body.appendChild(temp);
        //get all styles of temp div
        let styles = window.getComputedStyle(temp , null );
        //get only color from styles

        let rgb = styles.getPropertyValue("color");
        console.log(rgb);
        // no need of temp div remove it\
        document.body.removeChild(temp);
        rgb = removeRGB(rgb);
       // covert rgb to hsl
       hsl = rgbToHsl(rgb);
    }
    return hsl;
}

function isValidColor(color){
          //check color vallidity
          return CSS.supports("color",color)  ;  

     }

function removeRGB(rgb){
        return rgb.replace("rgb(","").replace(")","").split(",");
     }
function rgbToHsl(rgb){
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;

    let cmin = Math.min(r , g ,b);
    let cmax = Math.max(r ,g ,b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = (cmin + cmax) / 2 ;

    if (delta === 0){
        h  = 0;
        s  = 0;
    }else if (cmax === r){
        h = ((g-b) / delta) % 6;
    }else if ( cmax === g){
        h = (b - r) / delta  + 2;   
    }else{
        h = (r - g) / delta + 4;
    }
    h = Math.round( h * 60);
    if (h < 0){
        h +=  360
    }
    if (delta !== 0){
        s = Math.round((delta/(1-Math.abs(2 * l - 1)))*100)
    }
    l = Math.round( l * 100);
    return [h,s,l];
}     
function HslToHex(hsl){
    let h = hsl[0];
    let s = hsl[1]; 
    let l = hsl[2];
    l /= 100;
    const a = ( s * Math.min( l ,1 - l)) / 100;
    const f = (n)=>{
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min( k - 3 , 9 - k , 1) , -1);
        return Math.round( 255 * color)
        .toString(16)
        .padStart(2 ,"0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;

}

function getRandomColor(){
    const letters = "0123456789abcdef";
    let color = "#";
    for(let i =0; i<6 ;i++){
        color += letters[Math.floor(Math.random()*16)];

    }
    return color ;

}



searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value;
    if(isValidColor(value)){
        //if val;id color written
        searchColor.style.backgroundColor = value;
        currentColor = value;
        generatePalettehtml(currentType,paletteContainer);
        generatePalettehtml("related",relatedContainer)
    }
})

typeSelect.addEventListener("change",(e)=>{
 const value = e.target.value;
 currentType = value;
 typeText.textContent =   value + " Palette";
 generatePalettehtml(currentType,paletteContainer)
})

countSelect.addEventListener("change",(e)=>{
     const value = e.target.value;
     currentCount = value ;
     generatePalettehtml(currentType,paletteContainer) ;
     

})
randomBtn.addEventListener("click",()=>{
    const randomColor = getRandomColor();
    searchInput.value = randomColor;
    searchColor.style.backgroundColor = randomColor;
    currentColor = randomColor;
    generatePalettehtml(currentType ,paletteContainer);
    generatePalettehtml("related" ,relatedContainer);
})

// add event listener on each color 
const palettes = document.querySelectorAll(".palette");
palettes.forEach((palette)=>{
    palette.addEventListener("click",(e)=>{
        const target =  e.target ;
        const color = target.parentElement.parentElement.children[1].textContent;
        console.log(color); 
        if(target.classList.contains("copy-color")){
            copyToClipBoard(color);
            toast(`Color ${color} copied to clipboard `);
        } 
        if(target.classList.contains("generate-palette")){
            searchInput.value = color;
            searchColor.style.backgroundColor = color;
            currentColor = color;
            generatePalettehtml(currentType,paletteContainer);
            generatePalettehtml("related",relatedContainer) ;
            toast(`Palette generated for ${color}`);
        }
    })
}) 

function copyToClipBoard(text){
    const input = document.createElement("input");
    input.value = text ;
    document.body.appendChild(input);
    input.select()
    document.execCommand("copy");
    input.remove()

}

function toast(message){
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message ;
    document.body.appendChild(toast);
     // add show class after some time to animate 
     setTimeout(()=>{
        toast.classList.add("show");
        // remove after 2 seconds
     },10)
     setTimeout(()=>{
        toast.classList.remove("show");
        toast.addEventListener("transitioned",()=>{
            toast.remove();
        },1000)
     })
}   

searchImage.addEventListener("change",(e)=>{
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(){
            const image = new Image();
            image.src = reader.result;
            image.onload = function(){
            extractColorsFromImage(image); 
            }
            
        }    
    } 
})

function extractColorsFromImage(image){
    colorjs.prominent(image,{amount:6,format:"hex"}   ).then((color)=>{
        console.log(color);
        // empty the images array
        imageColors = [];
        imageColors.push(...color);
         generatePalettehtml("image-colors",imageColorsContainer) 
         imageColorsWrapper.classList.remove("hidden")
    })

}

const downloadFormat = document.querySelector("#download-format"),
      downloadName = document.querySelector("#download-name"),
      downloadBtn = document.querySelector("#download-btn")

downloadBtn.addEventListener("click",()=>{
    const format = downloadFormat.value;
    let name = downloadName.value;
    //if name is empty 
    name = name == "" ? "palette" : name ;
    downloadPalette(format,name);

})

function downloadPalette(format,name){
    const palette   = document.querySelector("#palette");
    const paletteColors = palette.querySelectorAll(".color");
    const colors = []; 
    paletteColors.forEach((color)=>{
        colors.push(color.style.backgroundColor);

    })
    switch(format){
        case "png" :
            downloadPalettePng(colors,name);
            break;
         case "svg":
             downloadPaletteSvg(colors,name);
             break;    
         case "css":
             downloadPaletteCss(colors,name);
             break;
         case "json":
             downloadPaletteJson(colors,name);
             break;


    }

}

function downloadPalettePng(colors,name){
    const canvas = document.createElement("canvas");
    canvas.width = colors.length *200;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    colors.forEach((color,index)=>{
        ctx.fillStyle = color ;
        ctx.fillRect(index * 200,0,200,1000);

    })  
    const link = document.createElement("a");
    link.download = name + ".png";
    link.href = canvas.toDataURL();
    link.click()

    
}
 function downloadPaletteSvg(colors,name){
     const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
     svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
     svg.setAttribute("width","100%");
     svg.getAttribute("height","100%");
     svg.setAttribute("viewbox","0 0 100 100");
     svg.setAttribute("preserveAspectRatio","none");
     //add all colors in svg
     colors.forEach((color,index)=>{
        const rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        const width = 200 / colors.length;
        rect.setAttribute("x",index * width);
        rect.setAttribute("y",0);
        rect.setAttribute("width",width);
        rect.setAttribute("height",100);
        rect.setAttribute("fill",color);
        svg.appendChild(rect);

     })
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData],{type : "image/svg+xml;charset=utf-8"});
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.download = name + ".svg";  
        downloadLink.href = svgUrl;                                                             
        downloadLink.click();   
 }  

 function downloadPaletteCss(colors,name){
    const css = `:root{
           ${colors
            .map((color,index) => `--color-${index + 1}: ${color};`)
            .join("\n")}     
           };
                                                                `
    const blob = new Blob([css],{type:"text/css"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download  = name + ".css";
    link.href = url;
    link.click();
 
}

function downloadPaletteJson(colors,name){
    const json = JSON.stringify(colors);
    const blob = new Blob([json],{
        type:"application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = name + ".json";
    link.href = url;
    link.click();


}

const toggle  = document.querySelector("#toggle");

toggle.addEventListener("change",(e)=>{
    if(e.target.checked){
        document.body.classList.add("dark");

    }else{
        document.body.classList.remove("dark");
    }
})
