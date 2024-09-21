const seats = document.getElementsByClassName("bus_seat")
let i = 0

for (const seat of seats) {

    seat.addEventListener("click", function () {
        if (i <= 3) {

            let tr = document.createElement("tr")
            tr.innerHTML = `
<td class="py-1">${seat.innerHTML}</td>
                        <td class="py-1">Economy</td>
                        <td class="py-1">$550</td>
`
            document.getElementById("clearAll").addEventListener("click", function () {
                tr.innerHTML = ""
            })
            document.getElementById("selection_shower").appendChild(tr)
            i++
            let totalPrice = parseInt(document.getElementById("total_price").innerText)

            document.getElementById("total_price").innerText = (totalPrice + 550).toString()
        }

    })

}
document.getElementById("coupon_apply").addEventListener("click", function () {
    let coupon_input = document.getElementById("coupon_input")
    if (coupon_input.value == "king120") {
        document.getElementById("couponShower").innerText = (parseInt(document.getElementById("total_price").innerText) - 35).toString()
        coupon_input.value = ""
    }
    else if (coupon_input.value == "safin120") {
        document.getElementById("couponShower").innerText = (parseInt(document.getElementById("total_price").innerText) - 300).toString()
        coupon_input = ""
    }
    else {
        alert("Coupon code")

    }
})

const passengerName = document.getElementById("passengerName");
const passengerNum = document.getElementById("passengerNum");
const passengerEmail = document.getElementById("passengerEmail");
const nextBtn = document.getElementById("nextBtn");


function updateButtonState() {
    if (passengerName.value != "" && passengerNum.value != "" && passengerEmail.value != "") {
        nextBtn.removeAttribute("disabled");
    } else {
        nextBtn.setAttribute("disabled", true);
    }
}


passengerName.addEventListener("input", updateButtonState);
passengerNum.addEventListener("input", updateButtonState);
passengerEmail.addEventListener("input", updateButtonState);




