
let imageIndex = 0;

let firstImage = document.getElementById("image1");
let secondImage = document.getElementById("image2");
let thirdImage = document.getElementById("image3");
secondImage.style.display = "none";
thirdImage.style.display = "none";


function next()
{
    if (imageIndex < 2)
    {
        if (imageIndex == 0)
        {
            firstImage.style.display = "none";
            secondImage.style.display = "block";
            imageIndex +=1;
        }
        else
        {
            secondImage.style.display = "none";
            thirdImage.style.display = "block";
            imageIndex +=1;
        }
    }
}

function prev()
{
    if (imageIndex > 0)
    {
        if (imageIndex == 2)
        {
            thirdImage.style.display = "none";
            secondImage.style.display = "block";
            imageIndex -=1;
        }
        else
        {
            secondImage.style.display = "none";
            firstImage.style.display = "block";
            imageIndex -=1;
        }
    }
}

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);