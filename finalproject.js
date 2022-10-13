let comments = JSON.parse(localStorage.getItem("comments"))

if (!comments){
    comments = []
    localStorage.setItem("comments", JSON.stringify(comments))
} else {
    for (c of comments) {
        document.getElementById("post-comment").innerHTML += `<p>[${c[0]}] ${c[1]}</p>`
    }
}

function tambahComment(){
    const d = new Date();
    let komen = document.getElementById("input-comment").value

    document.getElementById("post-comment").innerHTML += `<p>[${d.toString()}] ${komen}</p>`

    comments.push([d.toString(), komen])
    localStorage.setItem("comments", JSON.stringify(comments))
}

function backMenu (){
    let menu = document.getElementById("menumenu").value

    document.getElementById("seemore").innerHTML = 'menumenu'