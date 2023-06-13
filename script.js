let isOpen = false
function openMenu () {
    const mobile = document.getElementById("mobileId")

    if (isOpen) {
       mobile.style.display = "none" 
       isOpen = false
    } else {
       mobile.style.display = "flex"
       isOpen = true
    }

}



                                        