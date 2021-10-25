const test = function (id) {
    let elPostTemplate = document.querySelector("#post-template").content;



    let newPostFragment = document.createDocumentFragment();

    function renderPost(obj) {
        let elPost = elPostTemplate.cloneNode(true);

        elPost.querySelector(".js-post__id").textContent = `${obj.userId}`;
        elPost.querySelector(".js-post__title").textContent = `${obj.title}`;
        elPost.querySelector(".js-post__body").textContent = `${obj.body}`;

        newPostFragment.appendChild(elPost);
    }

    function eachPosts(array) {
        array.forEach((obj) => {
            if (obj.userId == idUser)
                renderPost(obj);
        });

        elPostList.appendChild(newPostFragment);

        let elItems = document.querySelectorAll(".js-btn__commit")

        elItems.forEach(function (item, i) {

            item.addEventListener("click", () => {
                elCommitList.innerHTML = ""
                test2();
                idPost = i+1
            })
        })
    }

    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => eachPosts(data));
}