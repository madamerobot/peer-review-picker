let sendRequestButton
let requestBlocks

function createRequestObject(children){
    
    let requestObject = {}
    let requester = children[0].value

    children.forEach((item, index) => {
        requestObject.pair = [ requester, children[index].value ]
    })

    // requestObject.requester = children[0].value

    // let requested = children.map((n, index) => children[index].value)
    // requestObject.requested = requested

    console.log(requestObject)

}

window.addEventListener('load', function(){

    sendRequestButton = document.querySelector('#send-requests')
    addEventListeners(sendRequestButton)

})

function addEventListeners(buttonElement){
    buttonElement.addEventListener('click', () => {
        let requestBlocks = document.querySelectorAll('.request-block')

        requestBlocks.forEach((item) => {
            let children = Array.from(item.children)
            createRequestObject(children)
        })
    })
}
