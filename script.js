fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    

    // const parentContainerEl = document.getElementById("main");

    for (let child of data.data.children) {
        // console.log(child);
        const parentContainerEl = document.querySelector(".parentContainer")
        const divEl = document.createElement("div");
        const hTwoEl = document.createElement("h2");
        const imageEl = document.createElement("img");
        const linkEl = document.createElement("a");

        parentContainerEl.appendChild(divEl);
        divEl.appendChild(hTwoEl);
        // divEl.appendChild(imageEl);
        divEl.appendChild(linkEl);

        hTwoEl.innerText = child.data.title;
        // imageEl.setAttribute("src", child.data.thumbnail);
        linkEl.setAttribute("href", child.data.url);
        linkEl.innerText = "Click to view on reddit";
        if (child.data.thumbnail === "default") {
            imageEl.remove();
        } else {
            imageEl.setAttribute("src", child.data.thumbnail);
            divEl.appendChild(imageEl);
        }
    }
});