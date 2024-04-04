        function otoColorGenerate(){
            let rgbColor1 = '';
            let rgbColor2 = '';
            let rgbColor3 = '';
            let rgbColor ='';

            const boxElements =document.querySelectorAll(".box-row .box");
            const boxArray =Array.from(boxElements);
            
            const generateButton = document.getElementById('generateButton');

            function rgbColorGenerator (){
                let rgbColor1 = '';
                let rgbColor2 = '';
                let rgbColor3 = '';

                for(let i= 0; i<1; i++){
                
                    const randomNumber1 = Math.floor(Math.random() * 250);
                    const randomNumber2 = Math.floor(Math.random() * 250);
                    const randomNumber3 = Math.floor(Math.random() * 250);
                    rgbColor1 += randomNumber1;
                    rgbColor2 += randomNumber2;
                    rgbColor3 += randomNumber3;
                }
                const rgbColor = `rgb(${rgbColor1}, ${rgbColor2}, ${rgbColor3})`;
                return rgbColor
            }

            function setRandomColor(boxElement){
                const colorRandom = boxElement.querySelector('.color');
                const colorIdValue = boxElement.querySelector('.colorId');

                const randomColor =rgbColorGenerator();
                colorRandom.style.backgroundColor = randomColor;

            }

            boxArray.forEach(box =>{
                setRandomColor(box);
            });
        }
        otoColorGenerate();

        generateButton.addEventListener('click', function(){
            otoColorGenerate();
        });

