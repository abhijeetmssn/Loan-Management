storeLoanData = () => {
    const companyName = document.getElementById("cName").value;
    const companyOwner = document.getElementById("cOwner").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("pNumber").value;
    const annualSale = document.getElementById("annualSale").value;
    const borrowAmount = document.getElementById("borrowAmount").value;
    const paymentTerms = document.getElementById("paymentTerms").value;

    let loanObject = {
        companyName: companyName,
        companyOwner: companyOwner,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        annualSale: annualSale,
        borrowAmount: borrowAmount,
        paymentTerms: paymentTerms
    }

    localStorage.setItem("loanData", JSON.stringify((loanObject)));

    if(true) {
        window.location.href = "./approval.html";
    }
    else
        alert("Missing Information")
}

const loanInfo = JSON.parse(localStorage.getItem("loanData"));
console.log(loanInfo);
console.log(loanInfo.companyName);
document.getElementById("cName").innerHTML = loanInfo.companyName;
document.getElementById("cOwner").innerHTML = loanInfo.companyOwner;
document.getElementById("email").innerHTML = loanInfo.emailAddress;
document.getElementById("borrowAmount").innerHTML = loanInfo.borrowAmount;
document.getElementById("paymentTerms").innerHTML = loanInfo.paymentTerms;

const interest = (loanInfo.borrowAmount*loanInfo.paymentTerms)/(12*3);
const payment = parseInt(loanInfo.borrowAmount)
 + interest;
const profit = payment - parseInt(loanInfo.borrowAmount);

document.getElementById("interest").innerHTML = interest.toFixed(2);
document.getElementById("payment").innerHTML = payment.toFixed(2);
document.getElementById("profit").innerHTML = profit.toFixed(2);
let decision;

storeDecision = () => {
    decision = document.getElementById("decision").value;
}

storeAllLoanData = () => {
    let updateLoadObj = {
        ...loanInfo,
        interest: interest.toFixed(2),
        payment: payment.toFixed(2),
        profit: profit.toFixed(2),
        decision: decision
    }

    localStorage.setItem("loanData", JSON.stringify((updateLoadObj)));

    let message = "";
    if(decision === "Accept") {
        message = "Accpeted Successfully"
    }
    document.getElementById("finalMessage").innerHTML = message;
}