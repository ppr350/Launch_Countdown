document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('.output');

    function launch() {
        /*console.log("testing")
        const para = document.createElement("p");
                para.textContent = "Blast off!";
                output.appendChild(para)
                console.log(para)*/
        let i = 10;

        do {
            if (i === 10) {
                /*console.log(i);*/
                const para = document.createElement("p");
                output.appendChild(para);
                para.textContent += "Countdown ";

            } if (i < 1){
                /*console.log(i);*/
                const para = document.createElement("p");
                output.appendChild(para);
                para.textContent += "Blast off";
            } else {
                const newParagraph = `${i}`;
                output.textContent += `${newParagraph}\n`;
            }

            i--;

        } while (i > -1);

    

    }

    const btn = document.querySelector('button');
    btn.addEventListener('click', launch);
})